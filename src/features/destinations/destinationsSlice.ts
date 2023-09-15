import { createSlice } from "@reduxjs/toolkit";
import { Destination } from "../../assets/types/types";
import { fetchDestinations } from "./fetchDestinations";

interface DestinationsState {
  destinations: Destination[];
  error: null | true;
  loading: true | false;
}

const initialState: DestinationsState = {
  destinations: [],
  error: null,
  loading: false,
};

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.destinations = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default destinationsSlice.reducer;
