import { Button } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Error from "../../page/Error";
import Collapse from '@material-ui/core/Collapse';
import {
  nonAuthenticantedRouter,
  AuthenticantedRouter,
} from "../routers/router";
import { Provider } from "react-redux";
import { makeStore } from "../../redux/store";

export const PublicRoute = (props) => {
  const { isAuth } = props;
  if (isAuth) {
    return <Redirect to="/home" />;
  }
  return <>{props.children}</>;
};

export const PrivateRoute = (props) => {
  const { isAuth } = props;
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return <>{props.children}</>;
};

const App = () => {
  const isAuthenticated = false;
  const notistackRef = useRef();
  const onClickDismiss = (key) => {
    notistackRef?.current?.closeSnackbar(key);
  };
  return (
    <Provider store={makeStore()}>
      <SnackbarProvider
        ref={notistackRef}
        action={(key) => <Button onClick={() => onClickDismiss(key)}>X</Button>}
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={Collapse}
      >
        <BrowserRouter>
          <Switch>
            {nonAuthenticantedRouter.map((item) => {
              const Component = item.component;
              return (
                <Route
                  key={item.path}
                  exact={item.isExact}
                  path={item.path}
                  render={(props) => {
                    return (
                      <PublicRoute {...props} isAuth={isAuthenticated}>
                        <Component {...props} />
                      </PublicRoute>
                    );
                  }}
                />
              );
            })}
            {AuthenticantedRouter.map((item) => {
              const Component = item.component;

              return (
                <Route
                  key={item.path}
                  exact={item.isExact}
                  path={item.path}
                  render={(props) => {
                    return (
                      <PrivateRoute {...props} isAuth={isAuthenticated}>
                        <Component />
                      </PrivateRoute>
                    );
                  }}
                />
              );
            })}
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
};
export default App;
