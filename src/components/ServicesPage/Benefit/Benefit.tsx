import { Link } from "react-router-dom";
import { MyButton } from "../../Shared/MyButton/MyButton";
import classes from "./classes.module.scss";
type BenefitProps = {
  title: string;
  src: string;
  text: string;
};
export const Benefit: React.FC<BenefitProps> = ({ title, src, text }) => {
  return (
    <div className={classes.Benefit}>
      <div>
        <img src={src} alt={title} />
      </div>
      <div className={classes.Text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={title} target="_blank">
          <MyButton text="Read More" />
        </Link>
      </div>
    </div>
  );
};
