import { CardPost } from ".";
import { Provider } from 'react-redux'
import store from '../../store/store';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'CardPost',
  component: CardPost,
  args: {
    author: 'AuthorTest',
    title: 'This is a Tittle',
    content: 'This is the content',
    _id: '123',
    authorId: '123',
    createdAt: '2022-09-23T14:25:37.504+00:00',
    user: '123'
  }
}

const ajustDiv = {
  width: '600px'
}

export const Temaplete = (args: any) => {
  return (
    <div style={ajustDiv}>
      <Provider store={store}>
        <CardPost {...args} />
      </Provider>
    </div>
  )
}