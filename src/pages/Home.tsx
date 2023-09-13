import { MainScreen } from "../components/HomePage/MainScreen/MainScreen";
import { TravelersPoint } from "../components/HomePage/TravelersPoint/TravelersPoint";
import { TopDestinations } from "../components/HomePage/TopDestinations/TopDestinations";
import { Testimonials } from "../components/HomePage/Testimonials/Testimonials";

export const Home = () => {
  return (
    <>
      <MainScreen />
      <TravelersPoint />
      <TopDestinations />
      <Testimonials />
    </>
  );
};
