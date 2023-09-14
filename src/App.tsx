import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Shared/Header/Header";
import { Footer } from "./components/Shared/Footer/Footer";
import "../firebase";
import { Discover } from "./pages/Discover";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
