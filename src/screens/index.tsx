import * as React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import { StoreType } from "../../shared/redux";
import { SCREENS } from "./const";
import App from "../App";

const registerComponentWithRedux =
  (store: StoreType) =>
  <T,>(name: string, ScreenComponent: React.ComponentType<T>) => {
    Navigation.registerComponent(
      name,
      () => (props: T) =>
        (
          <Provider store={store}>
            <ScreenComponent {...props} />
          </Provider>
        ),
      () => ScreenComponent
    );
  };

export function registerScreens(store: StoreType) {
  const registerWithRedux = registerComponentWithRedux(store);
  registerWithRedux(SCREENS.Home, App);
}
