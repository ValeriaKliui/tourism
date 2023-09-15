import "./App.scss";
import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Shared/Header/Header";
import { Footer } from "./components/Shared/Footer/Footer";
import "../firebase";
import { Discover } from "./pages/Discover";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { AboutUs } from "./pages/AboutUs";
import { Contacts } from "./pages/Contacts";
import { WrongPage } from "./pages/WrongPage";

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
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<WrongPage />} />;
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
