import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Shared/Header/Header";
import { Footer } from "./components/Shared/Footer/Footer";
import "../firebase";
import { useEffect } from "react";
import { useDestinations } from "./assets/hooks/useDestinations";
import { useTestimonials } from "./assets/hooks/useTestimonials";
import { Discover } from "./pages/Discover";
import { Services } from "./pages/Services";

function App() {
  const { setDestinations } = useDestinations();
  const { setTestimonials } = useTestimonials();

  useEffect(() => {
    setDestinations();
    setTestimonials();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
