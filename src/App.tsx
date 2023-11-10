import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingMinHeight100 from "./components/common/LoadingMinHeight100";
import Empty from "./components/common/Empty";

import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

const Menu = lazy(() => import("./pages/menu/Menu"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="refresh" element={<Empty />} />

        <Route
          path="/menu"
          element={
            <Suspense fallback={<LoadingMinHeight100 />}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingMinHeight100 />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
