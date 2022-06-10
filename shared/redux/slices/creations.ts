import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CreationType } from "../../api/types";
import { getCreations } from "../../api";

interface CreationsState {
  list: Array<CreationType>;
  loading: boolean;
  error: string | null;
}

const initialState: CreationsState = {
  list: [],
  loading: false,
  error: null,
};

export const getCreationsList = createAsyncThunk<Array<CreationType>>(
  "creations/getCreationsList",
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getCreations();
    } catch (error) {
      throw error;
    }
  }
);

const creationsSlice = createSlice({
  name: "creations",
  initialState: initialState,
  reducers: {},
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

export const creationsReducer = creationsSlice.reducer;
