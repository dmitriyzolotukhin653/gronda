import * as React from "react";

import { screenWidth } from "../../../utils/dimesions";

export type UseCreationCardParams = {
  cardWidth: number;
};

export const useCreationCard = ({ cardWidth }: UseCreationCardParams) => {
  const width = React.useMemo(() => {
    if (cardWidth < 0) return 0;
    if (cardWidth > 1) return 1;
    return cardWidth * screenWidth;
  }, [cardWidth]);

  return { width };
};
