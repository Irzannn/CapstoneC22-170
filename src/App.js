import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Preloader from "./components/Preloader";
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import ProdukPage from "./pages/ProdukPage";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Preloader/> */}
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/produk" element={<ProdukPage/>} />
            <Route path="/features" element={<FeaturePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;
