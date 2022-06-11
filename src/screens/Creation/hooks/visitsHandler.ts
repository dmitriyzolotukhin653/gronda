import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { creationsVisitsDictSelector } from "../../../../shared/redux/selectors/creations";
import { AppDispatch } from "../../../../shared/redux";
import { addVisitToDictionary } from "../../../../shared/redux/slices/creations";

export const useVisitsHandler = (creationId: number) => {
  const visitsDictionary = useSelector(creationsVisitsDictSelector);

  const dispatch = useDispatch<AppDispatch>();

  const visits = React.useRef(visitsDictionary[creationId] + 1 || 1);

  React.useEffect(() => {
    dispatch(addVisitToDictionary({ id: creationId }));
  }, [creationId, dispatch]);

  return { visits: visits.current };
};
