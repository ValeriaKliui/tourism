import { Articles } from "../Articles/Articles";
import { Sort } from "../Sort/Sort";
import classes from "./classes.module.scss";
export const Main = () => {
  return (
    <main className={["wrapper", classes.Main].join(" ")}>
      <div className="centered-title">
        <h2>Travelaja Articles</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
      </div>
      <Sort />
      <Articles />
    </main>
  );
};
