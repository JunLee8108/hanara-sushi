import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingMinHeight100 from "./components/common/LoadingMinHeight100";

import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

const Menu = lazy(() => import("./pages/menu/Menu"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <Suspense fallback={<LoadingMinHeight100 />}>
              <Menu />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
