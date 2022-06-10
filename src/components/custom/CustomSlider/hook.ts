import * as React from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export type UseCustomSliderParams<T> = {
  itemSize: number;
  gap: number;
  sliderPointSize: number;
  items: Array<T>;
};

export const useCustomSlider = <T>({
  itemSize,
  gap,
  items,
  sliderPointSize,
}: UseCustomSliderParams<T>) => {
  const [currentItem, setCurrentItem] = React.useState(0);

  const { snapToInterval, sliderPointsLeft, dividedGap } = React.useMemo(() => {
    return {
      snapToInterval: itemSize + gap,
      sliderPointsLeft:
        itemSize / 2 -
        ((items.length - 1) * 10 + items.length * sliderPointSize) / 2,
      dividedGap: gap / 2,
    };
  }, [itemSize, gap, items]);

  const handleSliderScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    setCurrentItem(Math.round(event.nativeEvent.contentOffset.x / itemSize));
  };

  return {
    snapToInterval,
    sliderPointsLeft,
    dividedGap,
    currentItem,
    handleSliderScroll,
  };
};
