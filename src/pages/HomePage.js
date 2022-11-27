import React from "react";
import '../components/Jumbotron';
import Jumbotron from "../components/Jumbotron";

function HomePage() {
  return (
    <>
      <Jumbotron />
      <div className='container'>
        <h2 classname='text-uppercase text-center'>Home</h2>
      </div>
    </>
  );
}

export default HomePage;