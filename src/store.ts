import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "./features/destinations/destinationsSlice";
import testimonialsReducer from "./features/testimonials/testimonialsSlice";
import articlesReducer from "./features/articles/articlesSlice";
export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    testimonials: testimonialsReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
