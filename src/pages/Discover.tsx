import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import PhotoPrevSrc from "../assets/img/PhotoPrev/discover.jfif";
import { Main } from "../components/DestinationPage/Main/Main";
export const Discover = () => {
  return (
    <>
      <PhotoPrev photoPrevSrc={PhotoPrevSrc} text="Discover" />
      <Main />
    </>
  );
};
