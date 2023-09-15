import classes from "./classes.module.scss";

export const MainScreen = () => {
  return (
    <div className={[classes.MainScreen, "main-screen"].join(" ")}>
      <h2 className="title-l">Explore the world with a smile</h2>
      {/* <Search /> */}
    </div>
  );
};
