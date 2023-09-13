import TravelersPointPic from "../../../assets/img/images/TravelersPoint.svg";
import classes from "./classes.module.scss";

export const TravelersPoint = () => {
  return (
    <div className={[classes.TravelersPoint, "wrapper"].join(" ")}>
      <img
        className={classes.TravelersPointMedia}
        src={TravelersPointPic}
        alt="We help to find your dream place"
      />
      <div className={classes.TravelersPointText}>
        <h4>Travelers Point</h4>
        <h2>We help to find your dream place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
        <div className={classes.Points}>
          <div className={classes.Point}>
            <span className={["bold", "bright_secondary"].join(" ")}>100+</span>
            <p>Holiday Package</p>
          </div>
          <div className={classes.Point}>
            <span className={["bold", "bright_secondary"].join(" ")}>172</span>
            <p>Hotels</p>
          </div>
          <div className={classes.Point}>
            <span className={["bold", "bright_secondary"].join(" ")}>68</span>
            <p>Elite Transportation</p>
          </div>
          <div className={classes.Point}>
            <span className={["bold", "bright_secondary"].join(" ")}>32M+</span>
            <p>We help to find your dream place</p>
          </div>
        </div>
      </div>
    </div>
  );
};
