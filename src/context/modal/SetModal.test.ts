import { setModal } from './setModal'
import { openModal } from '../../store/modal/modal'

describe('setModal', () => {
  it('should open modal with paramns', () => {
    const data = 
      {
        showModal: true,
        modalType:'showPhoto',
        userId:'123',
        postId: '123',
        avatarPic:'href.com',
      }
    
    const dispatch = jest.fn();
    setModal(data, dispatch)
    expect(dispatch).toHaveBeenCalledWith(openModal(data));
  })
})