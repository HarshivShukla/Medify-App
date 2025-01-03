import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { bookings: [] },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
