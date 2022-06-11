import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { creationsListSelector } from "../../../../shared/redux/selectors/creations";
import { masterClassesListSelector } from "../../../../shared/redux/selectors/masterClasses";
import {
  homeErrorSelector,
  homeLoadingSelector,
} from "../../../../shared/redux/selectors/shared";
import { AppDispatch } from "../../../../shared/redux";
import { getCreationsList } from "../../../../shared/redux/slices/creations";
import { getMasterClassesList } from "../../../../shared/redux/slices/masterClasses";

export const useHomeScreenStore = () => {
  const creationsList = useSelector(creationsListSelector);
  const masterClassesList = useSelector(masterClassesListSelector);
  const error = useSelector(homeErrorSelector);
  const loading = useSelector(homeLoadingSelector);

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCreationsList());
    dispatch(getMasterClassesList());
  }, [dispatch]);

  return { creationsList, masterClassesList, error, loading };
};
