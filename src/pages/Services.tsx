import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import PhotoPrevSrc from "../assets/img/PhotoPrev/winter.jpg";
import { Main } from "../components/ServicesPage/Main/Main";
export const Services = () => {
  return (
    <div>
      <PhotoPrev photoPrevSrc={PhotoPrevSrc} text="Services" />
      <Main />
    </div>
  );
};
