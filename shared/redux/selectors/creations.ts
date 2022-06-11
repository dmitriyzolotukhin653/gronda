import { RootState } from "../index";

export const creationsListSelector = (state: RootState) => state.creations.list;

export const creationsLoadingSelector = (state: RootState) =>
  state.creations.loading;

export const creationsErrorSelector = (state: RootState) =>
  state.creations.error;

export const creationsVisitsDictSelector = (state: RootState) =>
  state.creations.visitsDictionary;
