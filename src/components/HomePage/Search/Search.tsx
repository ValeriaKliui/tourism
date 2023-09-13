import classes from "./classes.module.scss";
import locationImg from "../../../assets/img/icons/carbon_location-filled.svg";
import searchImg from "../../../assets/img/icons/search.svg";
import { MyButton } from "../../Shared/MyButton/MyButton";

export const Search = () => {
  return (
    <div className={classes.Search}>
      <div className={classes.Location}>
        <img src={locationImg} alt="location_pic" />
        <p>City or Destination</p>
      </div>
      <div className={classes.Date}>
        <p className={classes.Gap}>Date of stay</p>
      </div>
      <div className={classes.Amount}>
        <p className={classes.Gap}>Person</p>
      </div>
      <MyButton text="Find Trip Now" picLink={searchImg} />
    </div>
  );
};
