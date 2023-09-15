import { fetchTestimonials } from "../../features/testimonials/fetchTestimonials";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useTestimonials = () => {
  const testimonials = useAppSelector(
    (state) => state.testimonials.testimonials
  );
  const error = useAppSelector((state) => state.testimonials.error);
  const loading = useAppSelector((state) => state.testimonials.loading);
  const dispatch = useAppDispatch();
  const setTestimonials = () => dispatch(fetchTestimonials());
  return { testimonials, setTestimonials, error, loading };
};
