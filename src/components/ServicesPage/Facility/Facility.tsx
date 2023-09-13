import classes from "./classes.module.scss";
type FacilitiesProps = {
  title: string;
  src: string;
  text: string;
};
export const Facility: React.FC<FacilitiesProps> = ({ title, src, text }) => {
  return (
    <div className={classes.Facility}>
      <img src={src} alt="title-m" />
      <h3 className="title-m">{title}</h3>
      <p className={classes.FacilityText}>{text}</p>
    </div>
  );
};
