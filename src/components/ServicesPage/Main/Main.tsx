import { CardService } from "../CardService/CardService";
import classes from "./classes.module.scss";
import servicesInfo from "./servicesCard.json";
import postInfo from "./postCard.json";
import facilitiesInfo from "./facilities.json";
import benefitsInfo from "./benefits.json";
import { CardPost } from "../CardPost/CardPost";
import { MyButton } from "../../Shared/MyButton/MyButton";
import { Facility } from "../Facility/Facility";
import { Benefit } from "../Benefit/Benefit";
import { Link } from "react-router-dom";
export const Main = () => {
  return (
    <main>
      <div className={[classes.Main, "padding_page"].join(" ")}>
        <div className={[classes.CardServices, "wrapper"].join(" ")}>
          {servicesInfo.map(({ title, text, src, id }) => (
            <Link to="title" key={id}>
              <CardService title={title} text={text} src={src} />
            </Link>
          ))}
        </div>
        <div className={[classes.CardPosts, "wrapper"].join(" ")}>
          {postInfo.map(({ src, id }) => (
            <Link to="title" key={id} target="_blank">
              <CardPost src={src} />{" "}
            </Link>
          ))}
        </div>
        <div className={classes.Facilities}>
          <div className={["wrapper", classes.FacilitiesGrid].join(" ")}>
            <div className={classes.FacilitiesText}>
              <h2 className="title-l">Facilities</h2>
              <p className="light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non
                eni
              </p>
              <Link to="Facilities" target="_blank">
                <MyButton text="Read More" />
              </Link>
            </div>
            <div className={classes.FacilitiesBlocks}>
              {facilitiesInfo.map(({ id, title, text, src }) => (
                <Facility key={id} title={title} text={text} src={src} />
              ))}
            </div>
          </div>
        </div>
        <div className={[classes.Benefits, "wrapper"].join(" ")}>
          <div className="centered-title">
            <p>BENEFITS</p>
            <h2 className="title-m">OUR SERVICE</h2>
          </div>
          <div className={classes.BenefitsGrid}>
            {benefitsInfo.map(({ id, title, src, text }) => (
              <Benefit key={id} title={title} src={src} text={text} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
