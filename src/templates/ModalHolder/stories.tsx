import { ModalHolder } from ".";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ModalHolder',
  component: ModalHolder,
  args: {
    modalProps: {
      showModal: true,
      modalType: 'delete',
      userId: '123',
      postId: '123',
    },
    user: {
      _id: '123',
      name: 'storyUser',
      email: 'story@mail.com'
    }
  }
}

export const Temaplete = (args: any) => {
  return (
    <Provider store={store}>
      <Router>
        <ModalHolder {...args} />
      </Router>
    </Provider>
  )
}
Temaplete.args = {
  modalProps: {
    showModal: true,
    modalType: 'update',
    userId: '123',
    postId: '123',
  },
  user: {
    _id: '123',
    name: 'storyUser',
    email: 'story@mail.com'
  }
}

export const Temaplete2 = (args: any) => {
  return (
    <Provider store={store}>
      <Router>
        <ModalHolder {...args} />
      </Router>
    </Provider>
  )
}
