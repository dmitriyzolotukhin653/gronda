import * as React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/es/types";

import { StoreType } from "../../shared/redux";
import { SCREENS } from "./const";
import HomeScreen from "./Home";
import CreationScreen from "./Creation";

const registerComponentWithRedux =
  (store: StoreType, persistor: Persistor) =>
  <T,>(name: string, ScreenComponent: React.ComponentType<T>) => {
    Navigation.registerComponent(
      name,
      () => (props: T) =>
        (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <ScreenComponent {...props} />
            </PersistGate>
          </Provider>
        ),
      () => ScreenComponent
    );
  };

export function registerScreens(store: StoreType, persistor: Persistor) {
  const registerWithRedux = registerComponentWithRedux(store, persistor);
  registerWithRedux(SCREENS.Home, HomeScreen);
  registerWithRedux(SCREENS.Creation, CreationScreen);
}
