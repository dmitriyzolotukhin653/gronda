import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { persistor, store } from "../shared/redux";
import { SCREENS } from "./screens/const";

registerScreens(store, persistor);

const app = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      /**
       * Add default options right here
       */
      topBar: { visible: false, elevation: 0 },
      layout: {
        orientation: ["portrait"],
      },
      hardwareBackButton: {
        popStackOnPress: true,
      },
    });
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            animations: {
              push: {
                content: {
                  alpha: {
                    from: 0,
                    to: 1,
                    duration: 300,
                  },
                },
              },
              pop: {
                content: {
                  alpha: {
                    from: 1,
                    to: 0,
                    duration: 300,
                  },
                },
              },
            },
          },
          children: [
            {
              component: {
                name: SCREENS.Home,
              },
            },
          ],
        },
      },
    });
  });
};

export default app;
