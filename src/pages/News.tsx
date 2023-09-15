import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import PhotoPrevSrc from "../assets/img/PhotoPrev/maldives.jpg";
import { Main } from "../components/NewsPage/Main/Main";
import { useArticles } from "../assets/hooks/useArticles";
import { useEffect } from "react";
import { useSort } from "../assets/hooks/useSort";
export const News = () => {
  const { setArticles } = useArticles();
  const { sort } = useSort();
  useEffect(() => {
    setArticles(sort);
  }, [sort]);
  return (
    <>
      <PhotoPrev photoPrevSrc={PhotoPrevSrc} text="Our News" />
      <Main />
    </>
  );
};
