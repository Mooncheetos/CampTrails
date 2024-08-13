import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getMoreCampers } from "./operations.js";
import { CATALOG_INITIAL_STATE } from "./initialState.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: CATALOG_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getMoreCampers.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
      })
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoreCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getMoreCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;
