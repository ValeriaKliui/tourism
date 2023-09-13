import classes from "./classes.module.scss";
import "../../../assets/img/icons/majesticons_image-photography-line.svg";
import { MyButton } from "../../Shared/MyButton/MyButton";
type CardServiceProps = { title: string; text: string; src: string };
export const CardService: React.FC<CardServiceProps> = ({
  title,
  text,
  src,
}) => {
  return (
    <div className={classes.ServiceCard}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <MyButton text="Read More" />
    </div>
  );
};
