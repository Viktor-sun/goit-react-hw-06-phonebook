import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
import { authOperations, authSelectors } from './redux/auth';
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

const DoNotAuthenticated = lazy(() =>
  import(
    './pages/DoNotAuthenticated/DoNotAuthenticated.js' /* webpackChunkName: "do-not-authenticated-page" */
  ),
);

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getTokenCurrenUser();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <>
        <AppBar />

        {isLoading && <Spinner />}

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PrivateRoute
              exect
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.needAuthenticated}
            />

            <PublicRoute
              exact
              path={routes.register}
              component={RegisterPage}
              restricted
              redirectTo={routes.contacts}
            />
            <PublicRoute
              exact
              path={routes.login}
              component={LoginPage}
              restricted
              redirectTo={routes.contacts}
            />

            <PublicRoute
              exact
              path={routes.needAuthenticated}
              component={DoNotAuthenticated}
              restricted
              redirectTo={routes.contacts}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: authSelectors.getLoading(state),
});

const mapDispatchToProps = {
  getTokenCurrenUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
