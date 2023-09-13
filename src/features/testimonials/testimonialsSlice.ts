import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Testimonial } from "../../assets/types/types";
import { fetchTestimonials } from "./fetchTestimonials";

interface TestimonialsState {
  testimonials: Testimonial[];
  error: null | true;
  loading: true | false;
}

const initialState: TestimonialsState = {
  testimonials: [],
  error: null,
  loading: false,
};

export const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default testimonialSlice.reducer;
