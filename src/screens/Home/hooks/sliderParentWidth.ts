import * as React from "react";
import { LayoutChangeEvent } from "react-native";

export const useSliderParentWidth = () => {
  const [sliderParentWidth, setSliderParentWidth] = React.useState(0);

  const handleScrollViewLayout = (event: LayoutChangeEvent) => {
    const paddingsWidth = 32;
    setSliderParentWidth(event.nativeEvent.layout.width - paddingsWidth);
  };

  return { sliderParentWidth, handleScrollViewLayout };
};
