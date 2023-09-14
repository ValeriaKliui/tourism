import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import PhotoPrevSrc from "../assets/img/PhotoPrev/maldives.jpg";
import { Main } from "../components/NewsPage/Main/Main";
import { useArticles } from "../assets/hooks/useArticles";
import { useEffect } from "react";
export const News = () => {
  const { setArticles } = useArticles();
  useEffect(() => {
    setArticles();
  }, []);
  return (
    <div>
      <PhotoPrev photoPrevSrc={PhotoPrevSrc} text="Our News" />
      <Main />
    </div>
  );
};
