import { useTestimonials } from "../../../assets/hooks/useTestimonials";
import { Testimonial } from "../Testimonial/Testimonial";
import classes from "./classes.module.scss";

export const Testimonials = () => {
  const { testimonials } = useTestimonials();
  return (
    <div className={["wrapper", classes.Testimonials].join(" ")}>
      <div className="centered-title">
        <h4>Testimonials</h4>
        <h2>What they say about us</h2>
      </div>
      <div className={classes.TestimonialsGrid}>
        {testimonials.map(({ name, src, text, id }) => (
          <Testimonial name={name} src={src} text={text} key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
