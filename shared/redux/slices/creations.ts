import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICreation } from "../../api/types";
import { getCreations } from "../../api";

interface CreationsState {
  list: Array<ICreation>;
  loading: boolean;
  error: string | null;
  visitsDictionary: Record<string, number>;
}

const initialState: CreationsState = {
  list: [],
  loading: false,
  error: null,
  visitsDictionary: {},
};

export const getCreationsList = createAsyncThunk<Array<ICreation>>(
  "creations/getCreationsList",
  () => getCreations()
);

const creationsSlice = createSlice({
  name: "creations",
  initialState: initialState,
  reducers: {
    addVisitToDictionary: (state, action: PayloadAction<{ id: number }>) => {
      if (action.payload.id in state.visitsDictionary) {
        state.visitsDictionary[action.payload.id] += 1;
      } else {
        state.visitsDictionary[action.payload.id] = 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCreationsList.pending, (state) => {
      state.list = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCreationsList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getCreationsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something gone wrong";
    });
  },
});

export const { addVisitToDictionary } = creationsSlice.actions;

export const creationsReducer = creationsSlice.reducer;
