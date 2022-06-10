import { RootState } from "../index";

export const masterClassesListSelector = (state: RootState) =>
  state.masterClasses.list;

export const masterClassesLoadingSelector = (state: RootState) =>
  state.masterClasses.loading;

export const masterClassesErrorSelector = (state: RootState) =>
  state.masterClasses.error;
