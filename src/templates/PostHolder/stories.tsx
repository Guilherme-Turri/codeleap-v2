import { PostHolder } from ".";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/store';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'PostHolder',
  component: PostHolder,
  args: {
    post: []
  }
};

export const Template = (args: any) => {
  return (
    <Provider store={store}>
      <Router>
        <PostHolder {...args} />
      </Router>
    </Provider>
  );
};