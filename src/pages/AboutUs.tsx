import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import photoPrevSrc from "../assets/img/PhotoPrev/about-us.webp";
import { Main } from "../components/AboutUs/Main/Main";
export const AboutUs = () => {
  return (
    <>
      <PhotoPrev photoPrevSrc={photoPrevSrc} text="About Us" />
      <Main />
    </>
  );
};
