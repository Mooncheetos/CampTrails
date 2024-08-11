import { fetchCampers } from "../../api/catalog";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMoreCampers = createAsyncThunk(
  "campers/getMoreCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      return res.data;
    } catch (err) {
      const { response } = err;
      if (response?.status === 404) return [];
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);