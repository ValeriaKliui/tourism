import classes from "./classes.module.scss";

export const ErrorComponent = () => {
  return (
    <div
      className={["wrapper", classes.ErrorComponent, "centered-title"].join(
        " "
      )}
    >
      <h2>Something went wrong</h2>
    </div>
  );
};
