import { MyButton } from "../../Shared/MyButton/MyButton";
import classes from "./classes.module.scss";
export const OtherDestination = () => {
  return (
    <div className={classes.Container}>
      <h3>Wakatobi Beach Is A Paradise For Coral Reets In Indonesia</h3>
      <p className="subtext">Yogyakarta, Indonesia</p>
      <MyButton text="View More" />
    </div>
  );
};
