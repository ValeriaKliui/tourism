import { Search } from "../Search/Search";
import classes from "./classes.module.scss";

export const MainScreen = () => {
  return (
    <div className={[classes.MainScreen, "main-screen"].join(" ")}>
      <h2 className="title-l">Explore the world with a smile</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo,
      </p>
      <Search />
    </div>
  );
};
