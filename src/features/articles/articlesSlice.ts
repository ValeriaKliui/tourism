import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../../assets/types/types";
import { fetchArticles } from "./fetchArticles";

interface ArticlesState {
  articles: Article[];
  error: null | true;
  loading: true | false;
}

const initialState: ArticlesState = {
  articles: [],
  error: null,
  loading: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export default articlesSlice.reducer;
