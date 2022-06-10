import { createSelector } from "reselect";

import { creationsErrorSelector, creationsLoadingSelector } from "./creations";
import {
  masterClassesErrorSelector,
  masterClassesLoadingSelector,
} from "./masterClasses";

export const homeLoadingSelector = createSelector(
  creationsLoadingSelector,
  masterClassesLoadingSelector,
  (creationsLoading, masterClassesLoading) =>
    creationsLoading || masterClassesLoading
);

export const homeErrorSelector = createSelector(
  creationsErrorSelector,
  masterClassesErrorSelector,
  (creationsError, masterClassesError) =>
    creationsError || masterClassesError ? "Error loading data" : null
);
