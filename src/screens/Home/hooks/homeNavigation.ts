import * as React from "react";
import { Navigation } from "react-native-navigation";

import { SCREENS } from "../../const";

export const useHomeNavigation = (componentId: string) => {
  const handleCreationPress = React.useCallback(
    (id: number) => {
      Navigation.push<{ creationId: number }>(componentId, {
        component: {
          name: SCREENS.Creation,
          passProps: {
            creationId: id,
          },
        },
      });
    },
    [componentId]
  );

  return { handleCreationPress };
};
