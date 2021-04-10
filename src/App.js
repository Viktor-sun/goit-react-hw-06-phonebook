import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import routes from './routes';
import { authOperations } from './redux/auth';
import './App.scss';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage.js' /* webpackChunkName: "contacts-page" */
  ),
);

const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage.js' /* webpackChunkName: "register-page" */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getTokenCurrenUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.contacts} component={ContactsPage} />
            <Route exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.login} component={LoginPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

// const App = () => (
//   <>
//     <AppBar />

//     <Suspense fallback={<Spinner />}>
//       <Switch>
//         <Route exact path={routes.home} component={HomePage} />
//         <Route exact path={routes.contacts} component={ContactsPage} />
//         <Route exact path={routes.register} component={RegisterPage} />
//         <Route exact path={routes.login} component={LoginPage} />
//       </Switch>
//     </Suspense>
//   </>
// );

const mapStateToProps = {
  getTokenCurrenUser: authOperations.getCurrentUser,
};

export default connect(null, mapStateToProps)(App);
