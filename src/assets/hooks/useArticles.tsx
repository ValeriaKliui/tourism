import { fetchArticles } from "../../features/articles/fetchArticles";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useArticles = () => {
  const articles = useAppSelector((state) => state.articles.articles);
  const dispatch = useAppDispatch();
  const setArticles = () => dispatch(fetchArticles());
  return { articles, setArticles };
};
