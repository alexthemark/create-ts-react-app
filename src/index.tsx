import createHistory from "history/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  ConnectedRouter,
  RouterState,
  routerMiddleware,
  routerReducer
} from "react-router-redux";
import { StoreEnhancer, combineReducers, createStore } from "redoodle";
import { applyMiddleware } from "redux";
import "./index.less";
import { ApplicationContainer } from "./layout/application-container/ApplicationContainer";
import {
  IPageState,
  initialPageState,
  pageStateReducer
} from "./state/pageReducer";

export interface IApplicationState {
  pageState: IPageState;
  router: RouterState;
}

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    pageState: pageStateReducer,
    router: routerReducer
  }),
  {
    router: { location: null },
    pageState: initialPageState
  },
  applyMiddleware(middleware) as StoreEnhancer
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApplicationContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
