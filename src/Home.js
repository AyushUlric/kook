// import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedProducts from "./components/FeaturedProducts";

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
      <FeaturedProducts />
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
