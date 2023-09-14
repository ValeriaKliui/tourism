import classes from "./classes.module.scss";
type OfferProps = { title: string; src: string };
export const Offer: React.FC<OfferProps> = ({ title, src }) => {
  return (
    <div className={classes.Offer}>
      <img src={src} alt={title} />
      <h5 className="title-s">{title}</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
};
