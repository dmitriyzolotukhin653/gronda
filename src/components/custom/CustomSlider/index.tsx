import * as React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { useCustomSlider } from "./hook";

export type CustomSliderProps<K = unknown> = {
  items: Array<K>;
  itemSize: number;
  children: (props: {
    item: K;
    index: number;
    leftGap: number;
    rightGap: number;
  }) => React.ReactElement;
  sliderPointSize?: number;
  gap?: number;
};

const CustomSlider = <T,>({
  items,
  itemSize,
  children,
  sliderPointSize = 6,
  gap = 0,
}: CustomSliderProps<T>): React.ReactElement => {
  const {
    snapToInterval,
    sliderPointsLeft,
    dividedGap,
    currentItem,
    handleSliderScroll,
  } = useCustomSlider({ items, itemSize, gap, sliderPointSize });

  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval}
        onScroll={handleSliderScroll}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {children({
              item,
              index,
              leftGap: index === 0 ? 0 : dividedGap,
              rightGap: index === items.length - 1 ? 0 : dividedGap,
            })}
          </React.Fragment>
        ))}
      </ScrollView>
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.point,
            {
              left: sliderPointsLeft + index * (10 + sliderPointSize),
              width: sliderPointSize,
              height: sliderPointSize,
              borderRadius: sliderPointSize,
              ...(index === currentItem && {
                backgroundColor: "rgba(255, 255, 255, 1)",
              }),
            },
          ]}
        ></View>
      ))}
    </View>
  );
};

export default CustomSlider;
