import React from "react";
import '../components/Jumbotron';
import Jumbotron from "../components/Jumbotron";
import Penjelasan from "../components/Penjelasan";
import HowToOrder from "../components/HowToOrder";
import KritikSaran from "../components/KritikSaran";
import OurPrice from "../components/OurPrice";

function HomePage() {
  return (
    <>
      <Jumbotron />
      <div className='container'>
        <h2 classname='text-uppercase text-center'>Home</h2>
      </div>
      <Penjelasan/>
      <HowToOrder/>
      <OurPrice/>
      <KritikSaran/>
    </>
  );
}

export default HomePage;