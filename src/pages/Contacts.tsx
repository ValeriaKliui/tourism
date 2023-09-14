import { PhotoPrev } from "../components/Shared/PhotoPrev/PhotoPrev";
import PhotoPrevSrc from "../assets/img/PhotoPrev/contact.jpg";
import { Main } from "../components/ContactsPage/Main/Main";
export const Contacts = () => {
  return (
    <>
      <PhotoPrev photoPrevSrc={PhotoPrevSrc} text="Contacts" />
      <Main />
    </>
  );
};
