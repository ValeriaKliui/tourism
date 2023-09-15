import { fetchArticles } from "../../features/articles/fetchArticles";
import { TypeArticle } from "../types/types";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const loading = useAppSelector((state) => state.articles.loading);
  const error = useAppSelector((state) => state.articles.error);
  const dispatch = useAppDispatch();
  const setArticles = (sort: TypeArticle) => dispatch(fetchArticles(sort));
  return { articles, setArticles, loading, error };
};
