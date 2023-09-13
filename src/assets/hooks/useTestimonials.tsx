import { fetchTestimonials } from "../../features/testimonials/fetchTestimonials";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useTestimonials = () => {
  const testimonials = useAppSelector(
    (state) => state.testimonials.testimonials
  );
  const dispatch = useAppDispatch();
  const setTestimonials = () => dispatch(fetchTestimonials());
  return { testimonials, setTestimonials };
};
