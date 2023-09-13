import classes from "./classes.module.scss";
import locationPic from "../../../assets/img/icons/carbon_location-current.svg";

type DestinationProps = {
  src: string;
  location: string;
  info: string;
  days: string;
};

export const Destination: React.FC<DestinationProps> = ({
  src,
  location,
  info,
  days,
}) => {
  return (
    <div className={classes.Destination}>
      <img src={src} alt={location} className={classes.DestinationPic} />
      <h3> {location}</h3>
      <div className={classes.SubInfo}>
        <h4>{info}</h4>
        <div className={classes.DaysInfo}>
          <img src={locationPic} alt="" />
          <p>{days} days for trips</p>
        </div>
      </div>
    </div>
  );
};
