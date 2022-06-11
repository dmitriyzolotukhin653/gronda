import { combineReducers } from "@reduxjs/toolkit";
import storage from "@react-native-async-storage/async-storage";

import { creationsReducer } from "./slices/creations";
import { masterClassesReducer } from "./slices/masterClasses";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
  creations: persistReducer(
    {
      key: "creations",
      storage,
      whitelist: ["visitsDictionary"],
    },
    creationsReducer
  ),
  masterClasses: masterClassesReducer,
});
