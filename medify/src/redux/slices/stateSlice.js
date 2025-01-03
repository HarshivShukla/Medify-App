import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStates = createAsyncThunk("state/fetchStates", async () => {
  const response = await axios.get("https://meddata-backend.onrender.com/states");
  return response.data;
});

const stateSlice = createSlice({
  name: "state",
  initialState: { states: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default stateSlice.reducer;