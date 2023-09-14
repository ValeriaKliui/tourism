import classes from "./classes.module.scss";

type SortOptionProps = {
  option: string;
};
export const SortOption: React.FC<SortOptionProps> = ({ option }) => {
  return <div className={classes.Option}>{option}</div>;
};
