import * as Styled from './styles'
import { Header } from '../../templates/Header'
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import React from 'react';
import { getProfile } from '../../services/users/profile/getProfile';
import { useFetchData } from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { IUser } from '../../types/types';
import { Info } from '../../templates/info-login-register'
import { PostHolder } from '../../templates/PostHolder';
import { Heading } from '../../components/Heading';
import avatar from '../../UI/avatar.avif'
import { ModalHolder } from '../../templates/ModalHolder'
import { ScrollToTop } from '../../components/ScrollToTop';
import { Add } from '../../UI/Add'
import { useDispatch } from 'react-redux'
import { setModal } from '../../context/modal/setModal'
import { useWidth } from '../../hooks/useWidth';


export const Profile = () => {
  const { id } = useParams();
  const { error, loading, request } = useFetchData();
  const dispatch = useDispatch();

  const [message, setMessage] = React.useState<string | null>(null)
  const [userInPage, setUserInPage] = React.useState<IUser | null>(null)

  const { modal } = useSelector((state: RootState) => state.modal);
  const { user } = useSelector((state: RootState) => state.user);

  const isLoggedUser = userInPage?._id === user!._id;
  const width = useWidth();
  const isMobile = width <= 850;

  React.useEffect(() => {
    /*     window.scrollTo(0, 0) */
    const getUserById = async () => {
      const result = await getProfile(id!, request)
      if (result) {
        const { response, json } = result;
        if (response.status === 200 && json.user) {
          setUserInPage(json.user)
        }
        else {
          setMessage(json.message)
        }
      }
    }
    getUserById();
  }, [id, request])

  return (
    <Styled.Container isMobile={isMobile}>
      <ScrollToTop></ScrollToTop>
      {modal.showModal ? <ModalHolder data-testid='holderModal' user={userInPage} modalProps={modal} /> : null}
      <Header />
      <Styled.UserRef isMobile={isMobile}>
        <Styled.Img data-testid='photo' onClick={() => setModal({
          showModal: true,
          modalType: 'showPhoto',
          avatarPic: userInPage?.avatarPic ?? undefined,
        }, dispatch)}
          src={userInPage?.avatarPic || avatar} alt='Profile' />
        <Styled.Add data-testid='add' isLoggedUser={isLoggedUser} onClick={() => setModal({
          showModal: true,
          modalType: 'updatePhoto',
          userId: id,
        }, dispatch)}><Add /></Styled.Add>
        <Heading big={false} as='h3' uppercase={true}>{userInPage?.name}</Heading>
      </Styled.UserRef  >
      <Styled.Content data-testid='content' isMobile={isMobile} >
        <Info loading={loading} error={error} message={message}></Info>
        <PostHolder />
      </Styled.Content>
    </Styled.Container>

  )
}