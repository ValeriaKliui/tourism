import classes from "./classes.module.scss";
import discover from "../../../assets/img/images/discover.jfif";
import locationPic from "../../../assets/img/icons/carbon_location-filled.svg";
import mountain from "../../../assets/img/images/mountain.png";
import lake from "../../../assets/img/images/lake.png";
import { OtherDestination } from "../OtherDestination/OtherDestination";

export const Main = () => {
  return (
    <main>
      <div className={[classes.Main, "wrapper"].join(" ")}>
        <section className={classes.Section}>
          <div className={classes.CartText}>
            <div className={classes.CartFirstText}>
              <span className={classes.BigLetter}>D</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
                facilisi.
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.
            </p>
          </div>
          <img
            src={discover}
            alt="Lorem ipsum dolor sit amet"
            className={classes.Photo}
          />
          <div className={classes.TitleText}>
            <h2>Memorable Festivals On Bali Beach</h2>
            <div className={classes.Location}>
              <img src={locationPic} alt="" width="40" />
              <p>Bali, Indonesia</p>
            </div>
          </div>
          <div className={classes.Text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              integer facilisis aliquet erat vitae viverra ornare. Placerat urna
              integer nibh justo. Dictum vulputate odio mauris amet, dictumst
              molestie. Faucibus consectetur mauris tristique dolor ut diam,
              adipiscing et. Semper mi proin malesuada orci phasellus.
              Consectetur posuere iaculis amet sem. Euismod turpis pellentesque
              sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              integer facilisis aliquet erat vitae viverra ornare. Placerat urna
              integer nibh justo. Dictum vulputate odio mauris amet, dictumst
              molestie.{" "}
            </p>
          </div>
          <div className={classes.Photos}>
            <figure>
              <img src={mountain} alt="mountain" />
            </figure>
            <figure>
              <img src={lake} alt="lake" />
            </figure>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            integer facilisis aliquet erat vitae viverra ornare. Placerat urna
            integer nibh justo. Dictum vulputate odio mauris amet, dictumst
            molestie. Faucibus consectetur mauris tristique dolor ut diam,
            adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur
            posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu,
            sagittis nulla. Facilisis urna, mi pharetra sed.
          </p>
        </section>
        <aside className={classes.Aside}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.73747285937!2d-37.066396224001835!3d-10.907545321739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab30d15555555%3A0x94fdad6caafd1cf2!2zSiBMIE9yZ2FuaXphw6fDtWVz!5e0!3m2!1sru!2sby!4v1694591107194!5m2!1sru!2sby"
            width="350"
            height="200"
            loading="lazy"
            frameBorder="0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={classes.AsideTitles}>
            <h3>Other Destinations</h3>
            <p className="bright">See all</p>
          </div>
          <div className={classes.OtherDestinations}>
            {new Array(5).fill(1).map((elem, index) => (
              <OtherDestination key={index} />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};
