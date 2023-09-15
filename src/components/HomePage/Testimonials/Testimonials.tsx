import { ColorRing } from "react-loader-spinner";
import { useTestimonials } from "../../../assets/hooks/useTestimonials";
import { Testimonial } from "../Testimonial/Testimonial";
import classes from "./classes.module.scss";

export const Testimonials = () => {
  const { testimonials, error, loading } = useTestimonials();
  if (error) return <></>;
  return (
    <div className={["wrapper", classes.Testimonials].join(" ")}>
      {loading ? (
        <ColorRing wrapperStyle={{ alignSelf: "center" }} />
      ) : (
        <>
          <div className="centered-title">
            <h4>Testimonials</h4>
            <h2>What they say about us</h2>
          </div>
          <div className={classes.TestimonialsGrid}>
            {testimonials.map(({ name, src, text, id }) => (
              <Testimonial name={name} src={src} text={text} key={id} id={id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
