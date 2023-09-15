import { useArticles } from "../../../assets/hooks/useArticles";
import { ErrorComponent } from "../../ErrorComponent/ErrorComponent";
import { Articles } from "../Articles/Articles";
import { Sort } from "../Sort/Sort";
import classes from "./classes.module.scss";
export const Main = () => {
  const { error } = useArticles();
  return (
    <main className={["wrapper", classes.Main, "padding_page"].join(" ")}>
      {error ? (
        <ErrorComponent />
      ) : (
        <>
          <div className="centered-title">
            <h2>Travelaja Articles</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
          </div>
          <Sort />
          <Articles />
        </>
      )}
    </main>
  );
};
