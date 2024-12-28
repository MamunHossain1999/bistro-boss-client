import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11.00am to 10.00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="py-3">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-64 object-cover"
            />
            <p className="text-center text-4xl text-white -mt-12">SALADS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-64 object-cover"
            />
            <p className="text-center text-4xl text-white -mt-12">SOUPS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-64 object-cover"
            />
            <p className="text-center text-4xl text-white -mt-12">PIZZAS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-64 object-cover"
            />
            <p className="text-center text-4xl text-white -mt-12">DESSERTS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide5}
              alt="Slide 5"
              className="w-full h-64 object-cover"
            />
            <p className="text-center text-4xl text-white -mt-12">SALAD</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
