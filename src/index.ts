import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
import { store } from "../shared/redux";
import { SCREENS } from "./screens/const";

registerScreens(store);

const app = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      /**
       * Add default options right here
       */
      topBar: { visible: false, elevation: 0 },
    });
    Navigation.setRoot({
      root: {
        stack: {
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
