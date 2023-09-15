import { useAppDispatch } from "../../../assets/hooks/hooks";
import { useSort } from "../../../assets/hooks/useSort";
import { TypeArticle } from "../../../assets/types/types";
import { setSort } from "../../../features/articles/articlesSlice";
import classes from "./classes.module.scss";

type SortOptionProps = {
  option: string;
};
export const SortOption: React.FC<SortOptionProps> = ({ option }) => {
  const { setSort, sort } = useSort();
  return (
    <div
      className={[
        classes.Option,
        sort === option.toLowerCase() ? classes.Active : "",
      ].join(" ")}
      onClick={() => setSort(option.toLowerCase() as TypeArticle)}
    >
      {option}
    </div>
  );
};
