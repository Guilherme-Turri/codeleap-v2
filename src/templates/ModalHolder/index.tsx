import { IModal, IUser } from '../../types/types'
import * as Styled from './styles'
import { ModalDeletePost } from '../../components/Modal/ModalDeletePost'
import { useFetchData } from '../../hooks/useFetchData'
import { deletePost } from '../../services/posts/delete/deletePost'
import { updatePost } from '../../services/posts/update/updatePost'
import { Info } from '../info-login-register'
import React from 'react'
import { unSetModal } from '../../context/modal/unSetModal'
import { useDispatch } from 'react-redux'
import { setUpdate } from '../../store/posts/posts'
import { ModalUpdatePost } from '../../components/Modal/ModalUpdatePost'
import { ModalAddPhoto } from '../../components/Modal/ModalAddPhoto'
import { setUser } from "../../store/user/user";
import { useForm } from '../../hooks/useForm'
import { updateUser } from '../../services/users/update/updateUser'
import { ModalShowPhoto } from '../../components/Modal/ModalShowPhoto'
import { setPhoto } from '../../services/images/photo'
import { useNavigate } from 'react-router-dom'
import { useWidth } from '../../hooks/useWidth';

interface modalHolderProps {
  modalProps: IModal | undefined;
  user: IUser | null;
}

export const ModalHolder = ({ modalProps, user }: modalHolderProps) => {
  const { error, loading, request } = useFetchData();
  const [message, setMessage] = React.useState<string | null>(null)
  const [loadPhoto, setLoadPhoto] = React.useState<boolean>(false)
  const dispatch = useDispatch()

  const postTitle = useForm();
  const postContent = useForm()

  const width = useWidth();
  const isMobile = width <= 850;


  const postId = modalProps!.postId
  const userId = modalProps!.userId
  const avatarPic = modalProps!.avatarPic

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (postId) {
      const result = await deletePost(postId, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200) {
          setMessage(json.msg)
        }
        setMessage(json.msg)
      }
    }
  };

  const handleUpdatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postTitle.value && postContent.value && user && postId) {
      postTitle.setValue('')
      postContent.setValue('')
      const result = await updatePost(postTitle.value, postContent.value, request, user, postId)
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && json.error) {
          setMessage(json.msg)
        }
        setMessage(json.msg)
      }
    }
  }


  const handleAddPhoto = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png', 'image/avif'].includes(file.type)) {
      setMessage('Uploading...')
      setLoadPhoto(true);
      const urlFromFireBase = await setPhoto(file);
      const result = await updateUser(userId!, urlFromFireBase, request)
      if (result !== undefined) {
        const { response, json } = result;
        if (response.status === 200 && json.user) {
          setMessage(json.message)
          setLoadPhoto(false);
          dispatch(setUser(json.user))
          /*        setMessage(json.message)
                 setLoadPhoto(false); */
        }
        setMessage(json.message)
        setLoadPhoto(false)
      }
      /*    setLoadPhoto(false); */
    }
    else {
      setMessage('Unsupported file type')
      setLoadPhoto(false);
    }
  }


  const handleSuccess = () => {
    dispatch(setUpdate())
    unSetModal(dispatch);
  }
  const handleSuccessPhoto = () => {
    dispatch(setUpdate())
    unSetModal(dispatch);
    navigate('/home')
  }

  type ModalType = 'delete' | 'update' | 'updatePhoto' | 'showPhoto';

  type Modals = {
    [key in ModalType]: JSX.Element;
  } & {
    [key: string]: JSX.Element;
  };
  const modals: Modals = {
    delete: <ModalDeletePost handleSuccess={handleSuccess} handleCancel={() => unSetModal(dispatch)} handleDelete={handleDelete} message={message} />,
    update: <ModalUpdatePost postTitle={postTitle} postContent={postContent} handleUpdatePost={handleUpdatePost} message={message} handleSuccess={handleSuccess} handleCancel={() => unSetModal(dispatch)} />,
    updatePhoto: <ModalAddPhoto loadPhoto={loadPhoto} handleCancel={() => unSetModal(dispatch)} handleAddPhoto={handleAddPhoto} handleSuccessPhoto={handleSuccessPhoto} message={message} />,
    showPhoto: <ModalShowPhoto avatarPic={avatarPic!} handleCancel={() => unSetModal(dispatch)} />,
  };

  if (modalProps?.modalType && modalProps.modalType in modals) {
    const ModalComponent = modals[modalProps.modalType];
    return (
      <Styled.Container data-testid='modalholder' isMobile={isMobile}>
        <Styled.Blur data-testid='blur' isMobile={isMobile}>
          {ModalComponent}
          <Styled.Info>
            <Info error={error} loading={loading}></Info>
          </Styled.Info>
        </Styled.Blur>
      </Styled.Container>
    );
  } else {
    return null;
  }
};

