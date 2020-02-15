import React from 'react';
import "../styles/styles.scss"
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { getCourseList } from '../redux/actionCreators';

store.dispatch(getCourseList())

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App;