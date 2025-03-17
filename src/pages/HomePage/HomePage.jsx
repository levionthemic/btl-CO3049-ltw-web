import React from "react";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Carousel from "~/components/Carousel/Carousel";

function HomePage() {
  let slides = ["carousel_1.jpg", "carousel_2.jpg", "carousel_3.jpg"];

  return (
    <>
      <Header />
      <Carousel slides={slides} />
      <div>Home Page</div>
      <Footer />
    </>
  );
}

export default HomePage;
