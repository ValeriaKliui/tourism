import classes from "./classes.module.scss";
type MemberProps = { title: string; src: string; text: string };
export const Member: React.FC<MemberProps> = ({ title, src, text }) => {
  return (
    <div className={classes.Member}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
