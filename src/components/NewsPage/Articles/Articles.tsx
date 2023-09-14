import { useArticles } from "../../../assets/hooks/useArticles";
import { Article } from "../Article/Article";
import classes from "./classes.module.scss";
export const Articles = () => {
  const { articles } = useArticles();
  console.log(articles);
  return (
    <div className={[classes.Articles, "wrapper"].join(" ")}>
      {articles.map(({ title, date, src, id }) => (
        <Article title={title} date={date} src={src} key={id} />
      ))}
    </div>
  );
};
