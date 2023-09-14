import classes from "./classes.module.scss";
type ArticleProps = {
  title: string;
  src: string;
  date: string;
};
export const Article: React.FC<ArticleProps> = ({ title, date, src }) => {
  return (
    <div className={classes.Article}>
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
};
