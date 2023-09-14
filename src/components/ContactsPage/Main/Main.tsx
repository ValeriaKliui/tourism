import { MyButton } from "../../Shared/MyButton/MyButton";
import classes from "./classes.module.scss";
export const Main = () => {
  return (
    <main className={["wrapper", classes.Main, "padding_page"].join(" ")}>
      <div className={classes.InTouch}>
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <form action="#" className={classes.Form}>
          <label htmlFor="name">
            <p>Name:</p>
            <input type="text" name="name" placeholder="Input your name" />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input type="text" name="email" placeholder="Email" />
          </label>
          <label htmlFor="message">
            <p>Message:</p>
            <textarea
              name="message"
              rows={10}
              cols={50}
              style={{ resize: "none" }}
            />
          </label>
          <MyButton text="Send" />
        </form>
      </div>
      <div className={classes.Contacts}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.73747285937!2d-37.066396224001835!3d-10.907545321739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab30d15555555%3A0x94fdad6caafd1cf2!2zSiBMIE9yZ2FuaXphw6fDtWVz!5e0!3m2!1sru!2sby!4v1694591107194!5m2!1sru!2sby"
          height="350"
          loading="lazy"
          frameBorder="0"
          style={{ overflow: "hidden", width: "100%" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={classes.Info}>
          <div className={classes.Point}>
            <p className={classes.Label}>Address :</p>
            <p>JL.Cindelaras No.205A</p>
          </div>
          <div className={classes.Point}>
            <p className={classes.Label}>Phone :</p>
            <p>+62 1234 432 567</p>
          </div>
          <div className={classes.Point}>
            <p className={classes.Label}>City :</p>
            <p>Yogyakarta, Indonesia</p>
          </div>
          <div className={classes.Point}>
            <p className={classes.Label}>Email :</p>
            <p>info@travelaja.com</p>
          </div>
          <div className={classes.Point}>
            <p className={classes.Label}> Open :</p>
            <p>At 8AM</p>
          </div>
          <div className={classes.Point}>
            <p className={classes.Label}>Close :</p>
            <p>At 8PM</p>
          </div>
          <div className={classes.Point}>
            <p>AVAILABLE AT 9AM - 10PM</p>
          </div>
        </div>
        <p className="big-letter">+124 4537 9756</p>
      </div>
    </main>
  );
};
