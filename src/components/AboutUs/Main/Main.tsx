import { Offer } from "../Offer/Offer";
import classes from "./classes.module.scss";
import offersInfo from "./offers.json";
import teamInfo from "./team.json";
import variantsInfo from "./variants.json";
import girls from "../../../assets/img/images/girls.png";
import { Member } from "../Member/Member";
import { Variant } from "../Variant/Variant";
export const Main = () => {
  return (
    <main className={[classes.Main, "padding_page", "wrapper"].join(" ")}>
      <div className="centered-title">
        <h2>Why Choose Us ?</h2>
        <p>These popular destinations have a lot to offer</p>
      </div>
      <div className={classes.Offers}>
        {offersInfo.map(({ title, src, id }) => (
          <Offer key={id} title={title} src={src} />
        ))}
      </div>
      <div className={classes.AboutBlock}>
        <div className={classes.AboutBlockText}>
          <h2>About Travelaja.com</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum
            et in feugiat. Platea in diam, est congue. Posuere sapien morbi
            augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus
            nibh. Egestas semper massa viverra massa proin in morbi placerat.
            Pharetra nec, est non integer nisi, ut faucibus. Non, in nam
            sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit
            pellentesque id cras lobortis tortor, blandit.
          </p>
          <p>
            Id ac non, semper turpis maecenas. Convallis tempor fringilla
            quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
            Malesuada velit, at mattis adipiscing quisque tristique id magna.
            Blandit porta sit nam magna sit. Turpis vestibulum facilisis
            placerat habitant gravida eget. Lacus pretium, arcu non adipiscing
            sed faucibus semper eget tempor.
          </p>
        </div>
        <img
          className={classes.AboutPhoto}
          src={girls}
          alt="About Travelaja.com"
        />
      </div>
      <div className={classes.Teams}>
        <div className="gapped-title">
          <h2>Our Teams</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className={classes.Team}>
          {teamInfo.map(({ title, src, text, id }) => (
            <Member title={title} src={src} text={text} key={id} />
          ))}
        </div>
      </div>
      <div className={classes.Variants}>
        {variantsInfo.map(({ title, src, id }) => (
          <Variant title={title} src={src} key={id} />
        ))}
      </div>
    </main>
  );
};
