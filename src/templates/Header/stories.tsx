import { Header } from ".";
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Header',
  component: Header,
  args: {
    user: 'User'
  }
}

export const Temaplete = (args: any) => {
  return (
    <Provider store={store}>
      <Router>
        <Header {...args} />
      </Router>
    </Provider>
  )
}