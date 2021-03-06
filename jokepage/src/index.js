import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/signin';
import Jokes from './components/jokes';
import SignOut from './components/signout';
import SignUp from './components/signup';
import RequireAuth from './components/HOC/RequireAuth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import './css/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
<Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={RequireAuth(Jokes)} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);