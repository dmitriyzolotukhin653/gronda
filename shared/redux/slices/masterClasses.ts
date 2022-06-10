import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IMasterClass } from "../../api/types";
import { getMasterClasses } from "../../api";

interface CreationsState {
  list: Array<IMasterClass>;
  loading: boolean;
  error: string | null;
}

const initialState: CreationsState = {
  list: [],
  loading: false,
  error: null,
};

export const getMasterClassesList = createAsyncThunk<Array<IMasterClass>>(
  "masterClasses/getMasterClassesList",
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getMasterClasses();
    } catch (error) {
      throw error;
    }
  }
);

const masterClassesSlice = createSlice({
  name: "masterClasses",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMasterClassesList.pending, (state) => {
      state.list = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMasterClassesList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getMasterClassesList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something gone wrong";
    });
  },
});

export const masterClassesReducer = masterClassesSlice.reducer;
