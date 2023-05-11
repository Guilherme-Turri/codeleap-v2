import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store'
import { FormPost } from '../../templates/FormPost';
import { Header } from '../../templates/Header';
import { useFetchData } from '../../hooks/useFetchData'
import { useForm } from '../../hooks/useForm'
import { createPost } from '../../services/posts/create/createPost'
import * as Styled from './styles'
import { Info } from '../../templates/info-login-register';
import { PostHolder } from '../../templates/PostHolder';
import { io } from 'socket.io-client';
import { Notification } from '../../UI/Notification'
import { AddPost } from '../../UI/AddPost'
import { ScrollToTop } from '../../components/ScrollToTop'
import { ModalHolder } from '../../templates/ModalHolder';
import { setUpdate } from '../../store/posts/posts'
import { useWidth } from '../../hooks/useWidth';
import { Helmet } from '../../helper/Helmet';

export const Home = () => {
  const { error, loading, request } = useFetchData();
  const [message, setMessage] = React.useState<string | null>(null)
  const [newNotification, setNewNotification] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false)
  const [loginSucess, setLoginSucess] = React.useState<boolean>(false)

  const postTitle = useForm();
  const postContent = useForm()
  const dispatch = useDispatch();
  const width = useWidth();
  const isMobile = width <= 850;

  const { user } = useSelector((state: RootState) => state.user);
  const { modal } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    const socket = io('https://backendcodeleap.onrender.com/');
    const handleNewPost = (data: string) => {
      if (data !== user?._id && !newNotification) {
        setNewNotification(true);
      }
    }
    socket.on('new-post', handleNewPost);
    return () => {
      socket.off('new-post', handleNewPost);
    }
  }, [newNotification, user?._id]);

  const handleSocket = () => {
    dispatch(setUpdate())
    setNewNotification(!newNotification)
    /*     window.scrollTo(0, 0) */
  }

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postTitle.value && postContent.value && user) {
      postTitle.setValue('')
      postContent.setValue('')
      const result = await createPost(postTitle.value, postContent.value, request, user);
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && !json.error) {
          dispatch(setUpdate())
          setLoginSucess(true)
          setTimeout(() => {
            setClicked(!clicked)
            setLoginSucess(false)
          }, 1000)
        }
        else {
          setMessage(json.status) //add this condition
        }
      }
    }
  }
  return (
    <Styled.Container data-testid='homepage'>
      <Helmet title='Home'></Helmet>
      {modal?.showModal ? <ModalHolder user={user} modalProps={modal} /> : null}
      <ScrollToTop></ScrollToTop>
      <Header ></Header>
      <Styled.Add isMobile={isMobile} clicked={clicked} onClick={() => setClicked(!clicked)}>
        <AddPost isClicked={clicked}></AddPost>
      </Styled.Add>
      <Styled.Content isMobile={isMobile}>
        <Styled.Blur isMobile={isMobile} clicked={clicked}>
          <FormPost isClosable={false} postTitle={postTitle} postContent={postContent} handleCreatePost={handleCreatePost} />
          <Styled.Info>
            <Info loginSucess={loginSucess} message={message} error={error} loading={loading}></Info>
          </Styled.Info>
        </Styled.Blur>
        {newNotification ?
          <Styled.Notification isMobile={isMobile} onClick={handleSocket}><Notification /></Styled.Notification> : null}
        <PostHolder></PostHolder>
      </Styled.Content>
    </Styled.Container >
  )
}