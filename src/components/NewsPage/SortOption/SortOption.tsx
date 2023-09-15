import { useSort } from "../../../assets/hooks/useSort";
import { TypeArticle } from "../../../assets/types/types";
import classes from "./classes.module.scss";

type SortOptionProps = {
  option: string;
  sortOptions: string[];
};
export const SortOption: React.FC<SortOptionProps> = ({
  option,
  sortOptions,
}) => {
  const { setSort, sort } = useSort();
  const activeOption = () => {
    let result = false;
    if (option.toLowerCase() === sortOptions[0].toLowerCase() && !sort)
      result = true;
    if (option.toLowerCase() === sort) result = true;
    return result;
  };
  return (
    <div
      className={[classes.Option, activeOption() ? classes.Active : ""].join(
        " "
      )}
      onClick={() => setSort(option.toLowerCase() as TypeArticle)}
    >
      {option}
    </div>
  );
};
