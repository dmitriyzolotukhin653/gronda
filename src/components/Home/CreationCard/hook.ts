import * as React from "react";

import { screenWidth } from "../../../utils/dimesions";
import { ICreation } from "../../../../shared/api/types";

export type UseCreationCardParams = {
  creation: ICreation;
  cardWidth: number;
  onPress?: (id: number) => void;
};

export const useCreationCard = ({
  creation,
  cardWidth,
  onPress,
}: UseCreationCardParams) => {
  const width = React.useMemo(() => {
    if (cardWidth < 0) return 0;
    if (cardWidth > 1) return 1;
    return cardWidth * screenWidth;
  }, [cardWidth]);

  const handleCreationPress = () => {
    onPress && onPress(creation.id);
  };

  return { width, handleCreationPress };
};
