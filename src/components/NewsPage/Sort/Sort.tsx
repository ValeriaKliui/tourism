import { SortOption } from "../SortOption/SortOption";
import classes from "./classes.module.scss";
export const Sort = () => {
  const sortOptions = [
    "Adventure Travel",
    "Beach",
    "Explore World",
    "Family Holidays",
    "Art and culture",
  ];
  return (
    <div className={[classes.Sort, "bold"].join(" ")}>
      {sortOptions.map((option) => (
        <SortOption option={option} key={option} sortOptions={sortOptions} />
      ))}
    </div>
  );
};
