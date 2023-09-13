import classes from "./classes.module.scss";
import { Testimonial as TestimType } from "../../../assets/types/types";

export const Testimonial: React.FC<TestimType> = ({ name, src, text, id }) => {
  return (
    <div className={classes.Testimonial}>
      <div className={classes.User}>
        <img src={src} alt="" />
        <h5 className="title-s">{name}</h5>
      </div>
      <p>{text}</p>
    </div>
  );
};
