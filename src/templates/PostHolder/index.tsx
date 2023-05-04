import React, { useEffect } from 'react'
import * as Styled from './styles'
import { CardPost } from '../../components/CardPost'
import { IPost } from '../../types/types'
import { TextComponent } from '../../components/TextComponent'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux';
import { setModal } from '../../context/modal/setModal'
import { ActionsHolder } from '../ActionsHolder'
import { fetchPost } from '../../services/posts/fetch/fetchPost'
import { useFetchData } from '../../hooks/useFetchData'
import { setPost } from '../../context/posts/setPost'
import { useParams } from 'react-router-dom'
import { Info } from '../info-login-register'
import { useWidth } from '../../hooks/useWidth';
import { Button } from '../../components/Button'

export const PostHolder = () => {
   const { error, loading, request } = useFetchData();

   const [message, setMessage] = React.useState<string | null>(null)
   const [morePosts, setMorePosts] = React.useState<number>(3)

   const { user } = useSelector((state: RootState) => state.user);
   const { post, update } = useSelector((state: RootState) => state.posts);

   const dispatch = useDispatch();
   const { id } = useParams()

   const width = useWidth();
   const isMobile = width <= 850;

   useEffect(() => {
      const fetchPostsHolder = async () => {
         const result = await fetchPost(request);
         if (result !== undefined) {
            const { response, json } = result;
            if (response.status !== 200) {
               setMessage('Error to fetch posts')
            }
            setPost(json, dispatch)
         }
      }
      fetchPostsHolder();
   }, [request, dispatch, update]);

   const postsToRender = (post: IPost[]): IPost[] => {
      if (id && post) {
         return post.filter((post) => post.authorId === id).length > 0 ? post.filter((post) => post.authorId === id) : []
      }
      else return post;
   }

   return (
      <Styled.Container data-testid='container'>
         <Styled.Info >
            <Info message={message} error={error} loading={loading}></Info>
         </Styled.Info>
         <ul>
            {postsToRender(post)?.length ? postsToRender(post)?.map((post, index) => (
               <li key={index}>
                  <Styled.Wrapper isMobile={isMobile} >
                     <CardPost avatarPic={post.avatarPic}
                        authorId={post.authorId}
                        content={post.content}
                        author={post.author}
                        _id={post._id}
                        title={post.title}
                        createdAt={post.createdAt} />
                     {post.authorId === user!._id ?
                        <ActionsHolder
                           handleEdit={() => setModal({
                              showModal: true,
                              modalType: 'update',
                              postId: post._id,
                           }, dispatch)}
                           handleDelete={() => setModal({
                              showModal: true,
                              modalType: 'delete',
                              postId: post._id,
                           }, dispatch)} />
                        : null}
                  </Styled.Wrapper>
               </li>
            )).reverse().slice(0, morePosts)
               : <TextComponent>There are no posts yet</TextComponent>}
         </ul>
         {postsToRender(post)?.length > morePosts && <Styled.Btn data-testid='loadmore' onClick={() => setMorePosts(morePosts + 3)}><Button>+</Button></Styled.Btn>
         }
      </Styled.Container >

   )

}
