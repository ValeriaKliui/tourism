import React from "react";
import classes from "./classes.module.scss";

type MyButtonProps = {
  text: string;
  picLink?: string;
  isTransparent?: false | true;
};
export const MyButton: React.FC<MyButtonProps> = ({
  text,
  picLink,
  isTransparent,
}) => {
  return (
    <button
      className={[
        classes.MyButton,
        isTransparent ? classes.isTransparent : "",
      ].join(" ")}
    >
      {text}
      {picLink && <img src={picLink} alt="" />}
    </button>
  );
};
