import classes from "./classes.module.scss";
export const Main = () => {
  return (
    <main className={[classes.Main, "wrapper"].join(" ")}>
      <div className="centered-title">
        <h2>Oops!</h2>
        <p>Wrong page</p>
      </div>
    </main>
  );
};
