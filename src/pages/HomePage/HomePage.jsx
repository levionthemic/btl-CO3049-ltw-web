import React from "react";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Carousel from "~/components/Carousel/Carousel";

import { TbHandFingerRight } from "react-icons/tb";
import HomepageCard from "~/components/Homepage_cards/HomepageCard.component.jsx";

function HomePage() {
  let slides = ["carousel_1.jpg", "carousel_2.jpg", "carousel_3.jpg"];

  let utilities = [
    {
      imageSrc: "hp_card_1.jpg",
      title: "Gym",
      description: "Dụng cụ tập thể hình",
    },
    {
      imageSrc: "hp_card_2.jpg",
      title: "Beach",
      description: "Bãi biển riêng tư",
    },
    {
      imageSrc: "hp_card_3.jpg",
      title: "Phòng riêng tư",
      description: "Không gian riêng tư, yên tĩnh",
    },
    {
      imageSrc: "hp_card_4.jpg",
      title: "Buffet",
      description: "Buffet sáng miễn phí",
    },
  ];

  return (
    <>
      <Header />
      <Carousel slides={slides} />

      {/* Quick booking section */}
      <section id="quickBooking">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-mainColor1-500">
              Dreaming of warmer days? Your stay starts here.
            </h2>
            <h3 className="text-lg text-gray-500 mt-4">
              {" "}
              Your warm-weather escape is closer than you think. Sun-soaked
              days, poolside views, and unforgettable moments await with iHotel
            </h3>
            <div className="flex text-4xl mt-8 justify-center items-center">
              <TbHandFingerRight />
              <button
                className=" text-2xl ml-4 px-6 py-2 bg-mainColor1-500 text-white 
              rounded hover:bg-mainColor1-600 transition"
              >
                Đặt phòng ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="utilities">
        <div className="flex bg-mainColor1-200 p-4 gap-4 justify-between">
          {utilities.map((util, index) => (
            <HomepageCard
              key={index}
              imageSrc={util.imageSrc}
              title={util.title}
              description={util.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
