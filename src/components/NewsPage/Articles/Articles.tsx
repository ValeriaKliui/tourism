import { Link } from "react-router-dom";
import { useArticles } from "../../../assets/hooks/useArticles";
import { Article } from "../Article/Article";
import classes from "./classes.module.scss";
export const Articles = () => {
  const { articles } = useArticles();
  return (
    <div className={[classes.Articles, "wrapper"].join(" ")}>
      {articles.map(({ title, date, src, id }) => (
        <Link to={title} target="_blank" key={id}>
          <Article title={title} date={date} src={src} />
        </Link>
      ))}
    </div>
  );
};
