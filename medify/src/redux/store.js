import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slices/stateSlice";
import citySlice from "./slices/citySlice";
import bookingsSlice from "./slices/bookingsSlice";

const store = configureStore({
  reducer: {
    state: stateSlice,
    city: citySlice,
    bookings: bookingsSlice,
  },
});

export default store;
