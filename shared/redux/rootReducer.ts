import { combineReducers } from "@reduxjs/toolkit";

import { creationsReducer } from "./slices/creations";
import { masterClassesReducer } from "./slices/masterClasses";

export const rootReducer = combineReducers({
  creations: creationsReducer,
  masterClasses: masterClassesReducer,
});
