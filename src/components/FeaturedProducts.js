import Carousel from "react-multi-carousel";

const FeaturedProducts = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
    };

    return ( 
        <div className="featured-products w-full mt-10 ml-1">
            <p className="text-3xl text-black">Featured Products</p>
            <Carousel
                className="featured-carousel mt-5"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={3500}
                autoPlay={true}
                keyBoardControl={true}
                itemClass="carousel-item"
            >
                <div>
                    <img src="./assets/p4.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-4956
                    </p>
                    <p className="text-xs text-center text-green-700">
                        top wear
                    </p>
                </div>
                <div>
                    <img src="./assets/p5.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-915
                    </p>
                    <p className="text-xs text-center text-green-700">
                        top wear
                    </p>
                </div>
                <div>
                    <img src="./assets/p6.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-285
                    </p>
                    <p className="text-xs text-center text-green-700">
                        top wear
                    </p>
                </div>
                <div>
                    <img src="./assets/p7.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-131
                    </p>
                    <p className="text-xs text-center text-green-700">
                        track suit
                    </p>
                </div>
                <div>
                    <img src="./assets/p8.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-129
                    </p>
                    <p className="text-xs text-center text-green-700">
                        track suit
                    </p>
                </div>
                <div>
                    <img src="./assets/p9.jpg" width={200}/>
                    <p className="text-m text-center">
                        KOOK K-125
                    </p>
                    <p className="text-xs text-center text-green-700">
                        track suit
                    </p>
                </div>
            </Carousel>
        </div>
     );
}
 
export default FeaturedProducts;