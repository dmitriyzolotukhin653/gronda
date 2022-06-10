import { combineReducers } from "@reduxjs/toolkit";

import { creationsReducer } from "./slices/creations";

export const rootReducer = combineReducers({ creations: creationsReducer });
