import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCities = createAsyncThunk("city/fetchCities", async (stateName) => {
  const response = await axios.get(`https://meddata-backend.onrender.com/cities/${stateName}`);
  return response.data;
});

const citySlice = createSlice({
  name: "city",
  initialState: { cities: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default citySlice.reducer;