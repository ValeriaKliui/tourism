import classes from "./classes.module.scss";
type PhotoPrevProps = {
  photoPrevSrc: string;
  text: string;
};

export const PhotoPrev: React.FC<PhotoPrevProps> = ({ photoPrevSrc, text }) => {
  return (
    <div
      className={classes.PhotoPrev}
      style={{
        background: `linear-gradient(0deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.2) 100%),
            url(${photoPrevSrc}),
            lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrapper">
        <h2 className={["title-m", classes.Title].join(" ")}>{text}</h2>
      </div>
    </div>
  );
};
