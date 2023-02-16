// import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="home">
      <Carousel
        className="carousel"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="./assets/feature-1.png" />
        </div>
        <div>
          <img src="./assets/feature-2.png" />
        </div>
        <div>
          <img src="./assets/feature-3.png" />
        </div>
      </Carousel>
      <div className="company-profile w-full bg-black p-10 mt-10">
        <ul className="flex justify-center w-full p-9 items-center">
          <li>
            <img src="./logo.jpg" width={350} alt="" />
          </li>
          <li>
            <ul className="ml-20 flex justify-start items-start flex-col">
              <li className="text-3xl">
                <p className="text-white">Company</p>
                <p className="text-white">Profile</p>
              </li>
              <li className="text-sm mt-5">
                <p className="text-white">Established in 2015, Kook sportswear is a men's garment brand under,</p>
                <p className="text-white">`jitesh fabrics`, manufacturer of sports wear and clothing house </p>
                <p className="text-white">We believe in manufacturing quality products with every piece being inspected</p>
                <p className="text-white">by hand to perfection.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="our-goal w-full bg-gray-900 p-20 mt-10">
        <ul className="flex justify-center w-full p-10 items-center ">
            <li className="mt-5 text-center">
                <p className="text-white text-3xl">"With technological advancements and contemporary material, we have been able to deliver perfect tailor-made clothing to our customers"</p>
                <p className="text-zinc-400 mt-5 text-2xl">-Jitesh Handa, CEO (Jitesh fabrics)</p>
            </li>
        </ul>
      </div>
      <div className="contact-us w-full bg-black p-10 mt-10">
        <ul className="flex justify-start w-full p-9 items-center">
          <li>
            <p className="text-white text-3xl">Reach out to us</p>
            <p className="text-zinc-400 mt-10 text-xl">Email Address</p>
            <p className="text-white mt-2 text-xl">jiteshfabrics@rediffmail.com</p>
            <p className="text-zinc-400 mt-10 text-xl">Phone Number</p>
            <p className="text-white mt-2 text-xl">9888530815</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
