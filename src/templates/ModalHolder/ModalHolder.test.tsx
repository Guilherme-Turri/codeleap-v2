/* eslint-disable testing-library/no-unnecessary-act */
import { ModalHolder } from '.'
import { pageRender } from '../../render/pageRender'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import * as unsetModalTest from '../../context/modal/unSetModal'
import * as deletePostTest from '../../services/posts/delete/deletePost'
import * as fetchPostTest from '../../services/posts/delete/deletePost'
import * as updatePostTest from '../../services/posts/update/updatePost'
import * as setPhotoTest from '../../services/images/photo'
import * as updateUserTest from '../../services/users/update/updateUser'


import userEvent from '@testing-library/user-event'

jest.setTimeout(10000)

describe('</ModalHolder>  type:showPhoto', () => {
  const spyModal = jest.spyOn(unsetModalTest, 'unSetModal')
  it('should render on screen properly', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'showPhoto',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const img = screen.getByTestId('img')
    expect(img).toBeInTheDocument();
  })
  it('should render on screen properly and close modal', () => {

    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'showPhoto',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const cancel = screen.getByTestId('cancelbtn');
    fireEvent.click(cancel)
    expect(spyModal).toHaveBeenCalled();
  })

})

describe('</ModalHolder>  type:delete', () => {
  const spyfetch = jest.spyOn(fetchPostTest, 'deletePost')

  const spyModal = jest.spyOn(unsetModalTest, 'unSetModal')
  const spyDelete = jest.spyOn(deletePostTest, 'deletePost')

  it('should render on screen properly', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'delete',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const deleteText = screen.getByText('Are you sure to delete this post?')
    expect(deleteText).toBeInTheDocument();
  })
  it('should render on screen properly and close modal', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'delete',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const cancel = screen.getByTestId('cancelbtn');
    fireEvent.click(cancel)
    expect(spyModal).toHaveBeenCalled();
  })

  it('should render on screen properly, delete post  and close modal.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'delete',
        postId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    spyfetch.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        msg: 'Post deleted'
      }
    }))

    pageRender(<ModalHolder {...modalProps} />)
    const deletebtn = screen.getByTestId('deletebtn');
    fireEvent.click(deletebtn)

    await waitFor(() => {
      expect(spyDelete).toHaveBeenCalled();
    })
    await waitFor(() => {
      const errorMsg = screen.getByText('Post deleted')
      expect(errorMsg).toBeInTheDocument();
    })

    const successbtn = screen.getByTestId('successbtn')
    fireEvent.click(successbtn)
    expect(spyModal).toHaveBeenCalled();
  })

  it('should render on screen properly and show fail msg to delete post.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'delete',
        postId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    spyfetch.mockResolvedValue(({
      response: {
        status: 400
      },
      json: {
        msg: 'fail to delete post'
      }
    }))

    pageRender(<ModalHolder {...modalProps} />)
    const deletebtn = screen.getByTestId('deletebtn');
    fireEvent.click(deletebtn)

    await waitFor(() => {
      expect(spyDelete).toHaveBeenCalled();
    })
    await waitFor(() => {
      const errorMsg = screen.getByText('fail to delete post')
      expect(errorMsg).toBeInTheDocument();
    })
  })
})

describe('</ModalHolder>  type:update', () => {
  const spyModal = jest.spyOn(unsetModalTest, 'unSetModal')
  const spyUpdate = jest.spyOn(updatePostTest, 'updatePost')
  it('should render on screen properly', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'update',
        post: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const deleteText = screen.getByText('Edit your post')
    expect(deleteText).toBeInTheDocument();
  })

  it('should render on screen properly and close modal', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'update',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const cancel = screen.getByTestId('cancelbtn');
    fireEvent.click(cancel)
    expect(spyModal).toHaveBeenCalled();
  })

  it('should render on screen properly, update post  and close modal.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'update',
        postId: '123',
        avatarPic: '/123',
      },
      user: {
        _id: '123',
        name: 'testName',
        email: '123@132.com'
      }
    }
    spyUpdate.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        status: 'ok',
        msg: 'Post update',
        error: 'error'
      }
    }))

    pageRender(<ModalHolder {...modalProps} />)
    const title = screen.getByPlaceholderText('Title')
    const content = screen.getByPlaceholderText('Content Here')
    const form = screen.getByTestId('form');

    act(() => {
      userEvent.type(title, 'This is a title');
      userEvent.type(content, 'content');
      fireEvent.submit(form);
    });

    await waitFor(() => {
      const successsmsg = screen.getByText('Post update')
      expect(successsmsg).toBeInTheDocument();
    })

    const successbtn = screen.getByTestId('successbtn')
    fireEvent.click(successbtn)
    expect(spyModal).toHaveBeenCalled();
  })

  it('should render on screen properly and show fail msg to update post.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'update',
        postId: '123',
        avatarPic: '/123',
      },
      user: {
        _id: '123',
        name: 'testName',
        email: '123@132.com'
      }
    }
    spyUpdate.mockResolvedValue(({
      response: {
        status: 400
      },
      json: {
        status: 'ok',
        msg: 'fail to update',
        error: 'error'
      }
    }))

    pageRender(<ModalHolder {...modalProps} />)
    const title = screen.getByPlaceholderText('Title')
    const content = screen.getByPlaceholderText('Content Here')
    const form = screen.getByTestId('form');

    act(() => {
      userEvent.type(title, 'This is a title');
      userEvent.type(content, 'content');
      fireEvent.submit(form);
    });

    await waitFor(() => {
      const failmsg = screen.getByText('fail to update')
      expect(failmsg).toBeInTheDocument();
    })
  })
})

describe('</ModalHolder>  type:updatePhoto', () => {
  const spyModal = jest.spyOn(unsetModalTest, 'unSetModal')
  const spyPhoto = jest.spyOn(setPhotoTest, 'setPhoto')
  const spyUpdate = jest.spyOn(updateUserTest, 'updateUser')

  it('should render on screen properly', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'updatePhoto',
        post: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const uploadText = screen.getByText('Upload')
    expect(uploadText).toBeInTheDocument();
  })
  it('should render on screen properly and close modal', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'updatePhoto',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)

    const cancel = screen.getByTestId('cancelbtn');
    fireEvent.click(cancel)
    expect(spyModal).toHaveBeenCalled();
  })

  it('should render on screen properly, and try o upload an unsupported file.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'updatePhoto',
        postId: '123',
        avatarPic: '/123',
      },
      user: {
        _id: '123',
        name: 'testName',
        email: '123@132.com'
      }
    }
    pageRender(<ModalHolder {...modalProps} />)
    const inputElement = screen.getByTestId('input')
    const file = new File(['test content'], 'testdwad.pngs', { type: 'imagwde/pngsa' });
    fireEvent.change(inputElement, { target: { files: [file] } });
    const uploadBtn = screen.getByTestId('upload')

    act(() => {
      fireEvent.click(uploadBtn)
    });

    await waitFor(() => {
      expect(screen.getByText('Unsupported file type')).toBeInTheDocument();
    })
  })

  it('should render on screen properly, and upload file.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'updatePhoto',
        postId: '123',
        avatarPic: '/123',
      },
      user: {
        _id: '123',
        name: 'testName',
        email: '123@132.com'
      }
    }
    spyPhoto.mockResolvedValue('urlFromFireBase')
    spyUpdate.mockResolvedValue(({
      response: {
        status: 200
      },
      json: {
        status: 'ok',
        message: 'Upload ok',
        error: 'error',
        user: {
          _id: '123',
          name: 'userTest',
          email: 'test@test.com'
        }
      }
    }))
    pageRender(<ModalHolder {...modalProps} />)
    const inputElement = screen.getByTestId('input')
    const file = new File(['test content'], 'test.png', { type: 'image/png' });
    fireEvent.change(inputElement, { target: { files: [file] } });
    const uploadBtn = screen.getByTestId('upload')

    act(() => {
      fireEvent.click(uploadBtn)
    });

    await waitFor(() => {
      expect(screen.getByText('Upload ok')).toBeInTheDocument()
    })
    const okBtn = screen.getByText('OK')
    fireEvent.click(okBtn)
    await waitFor(() => {
      expect(spyModal).toHaveBeenCalled()
    })
  })
  it('should render on screen properly, show error msg to upload file.', async () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'updatePhoto',
        postId: '123',
        avatarPic: '/123',
      },
      user: {
        _id: '123',
        name: 'testName',
        email: '123@132.com'
      }
    }
    spyPhoto.mockResolvedValue('urlFromFireBase')

    spyUpdate.mockResolvedValue(({
      response: {
        status: 400
      },
      json: {
        status: 'ok',
        message: 'Fail to upload',
        error: 'error',
        user: {
          _id: '123',
          name: 'userTest',
          email: 'test@test.com'
        }
      }
    }))
    pageRender(<ModalHolder {...modalProps} />)
    const inputElement = screen.getByTestId('input')
    const file = new File(['test content'], 'test.png', { type: 'image/png' });
    fireEvent.change(inputElement, { target: { files: [file] } });
    const uploadBtn = screen.getByTestId('upload')

    act(() => {
      fireEvent.click(uploadBtn)
    });
    await waitFor(() => {
      expect(screen.getByText('Fail to upload')).toBeInTheDocument()
    })
  })
})
describe('Modal Holder - Mobile', () => {
  window.innerWidth = 400;
  it('should render on screen properly', () => {
    const modalProps = {
      modalProps: {
        showModal: true,
        modalType: 'showPhoto',
        userId: '123',
        avatarPic: '/123',
      },
      user: null
    }
    pageRender(<ModalHolder {...modalProps} />)
    const holder = screen.getByTestId('modalholder')
    const blur = screen.getByTestId('blur')
    expect(holder).toHaveStyleRule('align-items', 'start')
    expect(blur).toHaveStyleRule('border-radius', 'none')
    expect(blur).toHaveStyleRule('width', '100%')
    expect(blur).toHaveStyleRule('height', '100%')
  })
}) 