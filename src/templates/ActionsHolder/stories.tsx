import { ActionsHolder } from ".";
import { Provider } from 'react-redux';
import store from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'ActionsHolder',
  component: ActionsHolder,
  args: {
    id: '123'
  }
}
const handleDelete = (id: string) => {
  return
};

const handleEdit = (id: string) => {
  return
};

export const Temaplete = (args: any) => {
  return (

    <Provider store={store}>
      <Router>
        <ActionsHolder handleDelete={handleDelete}
          handleEdit={handleEdit}{...args} />
      </Router>
    </Provider>


  )
}