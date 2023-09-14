import { MainScreen } from "../components/HomePage/MainScreen/MainScreen";
import { TravelersPoint } from "../components/HomePage/TravelersPoint/TravelersPoint";
import { TopDestinations } from "../components/HomePage/TopDestinations/TopDestinations";
import { Testimonials } from "../components/HomePage/Testimonials/Testimonials";
import { useTestimonials } from "../assets/hooks/useTestimonials";
import { useEffect } from "react";
import { useDestinations } from "../assets/hooks/useDestinations";

export const Home = () => {
  const { setTestimonials } = useTestimonials();
  const { setDestinations } = useDestinations();
  useEffect(() => {
    setTestimonials();
    setDestinations();
  }, []);

  return (
    <>
      <MainScreen />
      <TravelersPoint />
      <TopDestinations />
      <Testimonials />
    </>
  );
};
