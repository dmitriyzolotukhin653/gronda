import { Navigation } from "react-native-navigation";

export const useCreationNavigation = (componentId: string) => {
  const handleBackButtonPress = () => {
    Navigation.pop(componentId);
  };

  return { handleBackButtonPress };
};
