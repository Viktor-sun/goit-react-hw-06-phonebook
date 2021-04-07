import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import routes from './routes';
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

const App = () => (
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

export default App;
