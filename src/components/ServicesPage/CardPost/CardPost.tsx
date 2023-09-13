import classes from "./classes.module.scss";
import "../../../assets/img/icons/majesticons_image-photography-line.svg";
import { MyButton } from "../../Shared/MyButton/MyButton";
type CardPostProps = { src: string };
export const CardPost: React.FC<CardPostProps> = ({ src }) => {
  return (
    <div
      className={classes.PostCard}
      style={{
        background: `linear-gradient(0deg, 
          rgba(0, 0, 0, 0.2) 0%, 
          rgba(0, 0, 0, 0.2) 100%),
          url(${src}),
          lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h5 className="title-s">Water City Dreams</h5>
      <p className="bold">September 18, 2022</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>
      <MyButton text="Read More" isTransparent />
    </div>
  );
};
