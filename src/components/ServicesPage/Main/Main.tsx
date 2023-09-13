import { CardService } from "../CardService/CardService";
import classes from "./classes.module.scss";
import servicesInfo from "./servicesCard.json";
import postInfo from "./postCard.json";
import facilitiesInfo from "./facilities.json";
import { CardPost } from "../CardPost/CardPost";
import { MyButton } from "../../Shared/MyButton/MyButton";
import { Facility } from "../Facility/Facility";
export const Main = () => {
  return (
    <main>
      <div className={classes.Main}>
        <div className={[classes.CardServices, "wrapper"].join(" ")}>
          {servicesInfo.map(({ title, text, src, id }) => (
            <CardService key={id} title={title} text={text} src={src} />
          ))}
        </div>
        <div className={[classes.CardPosts, "wrapper"].join(" ")}>
          {postInfo.map(({ src, id }) => (
            <CardPost key={id} src={src} />
          ))}
        </div>
        <div className={classes.Facilities}>
          <div className={["wrapper", classes.FacilitiesGrid].join(" ")}>
            <div className={classes.FacilitiesText}>
              <h2 className="title-l">Facilities</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non
                eni
              </p>
              <MyButton text="Read More" />
            </div>
            <div className={classes.FacilitiesBlocks}>
              {facilitiesInfo.map(({ id, title, text, src }) => (
                <Facility key={id} title={title} text={text} src={src} />
              ))}
            </div>
          </div>
        </div>
        <div className={[classes.Benefits, "wrapper"].join(" ")}>
          <p>BENEFITS</p>
          <h2 className="title-m">OUR SERVICE</h2>
        </div>
      </div>
    </main>
  );
};
