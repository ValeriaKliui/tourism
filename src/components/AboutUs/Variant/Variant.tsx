import classes from "./classes.module.scss";
type VariantProps = { title: string; src: string };

export const Variant: React.FC<VariantProps> = ({ title, src }) => {
  return (
    <div className={classes.Variant}>
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};
