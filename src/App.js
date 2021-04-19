import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
import { authOperations, authSelectors } from './redux/auth';

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

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      {isLoading && <Spinner />}

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home}>
            <HomePage />
          </Route>
          <PrivateRoute
            exect
            path={routes.contacts}
            redirectTo={routes.needAuthenticated}
          >
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute
            exact
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute
            exact
            path={routes.needAuthenticated}
            restricted
            redirectTo={routes.contacts}
          >
            <DoNotAuthenticated />
          </PublicRoute>

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
}
