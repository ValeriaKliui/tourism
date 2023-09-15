import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article, TypeArticle } from "../../assets/types/types";
import { fetchArticles } from "./fetchArticles";

interface ArticlesState {
  articles: Article[];
  error: null | true;
  loading: true | false;
  sort: TypeArticle | null;
}

const initialState: ArticlesState = {
  articles: [],
  error: null,
  loading: false,
  sort: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<TypeArticle>) {
      state.sort = action.payload;
    },
  },
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
export const { setSort } = articlesSlice.actions;
export default articlesSlice.reducer;
