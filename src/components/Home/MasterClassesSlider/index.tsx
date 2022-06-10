import * as React from "react";

import MasterClass from "../MasterClass";
import CustomSlider from "../../custom/CustomSlider";
import { IMasterClass } from "../../../../shared/api/types";

export type MasterClassesSliderType = {
  sliderParentWidth: number;
  masterClassesList: Array<IMasterClass>;
};

const MasterClassesSlider: React.FC<MasterClassesSliderType> = ({
  sliderParentWidth,
  masterClassesList,
}) => {
  return (
    <CustomSlider
      itemSize={sliderParentWidth}
      items={masterClassesList}
      gap={10}
    >
      {({ item, leftGap, rightGap }) => (
        <MasterClass
          imageUrl={item.image_url}
          title={item.title}
          subtitle={item.subtitle}
          imageBackgroundStyles={{
            width: sliderParentWidth,
            marginLeft: leftGap,
            marginRight: rightGap,
          }}
        />
      )}
    </CustomSlider>
  );
};

export default MasterClassesSlider;
