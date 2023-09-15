import { useAppDispatch, useAppSelector } from "./hooks";
import { setSort as setSortRed } from "../../features/articles/articlesSlice";
import { TypeArticle } from "../types/types";
export const useSort = () => {
  const sort = useAppSelector((state) => state.articles.sort);
  const dispatch = useAppDispatch();
  const setSort = (type: TypeArticle) =>
    dispatch(
      setSortRed(TypeArticle[type.split(" ").join("_")] ? type : ("all" as any))
    );
  return { sort, setSort };
};
