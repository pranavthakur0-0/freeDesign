import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./react-carousel.scss";
import { Pagination, Navigation } from "swiper";
import { RiDoubleQuotesL } from "react-icons/ri";
export default function App() {
  return (
    <>
      <div className="coarusel-top">
        <h1>Testimonials</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="frame">
            <div className="img"></div>
            <div className="text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                velit hic porro.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis dolore repudiandae laborum sunt itaque temporibus
                veniam, dolorem, voluptatibus magnam tenetur? A delectus
                sapiente ab molestiae necessitatibus recusandae modi? Sint!
              </p>
              <div className="card">
                <div className="card-inner">
                  <h1>
                    <RiDoubleQuotesL />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br /> Adipisci eligendi quam fugit animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="frame">
            <div className="img"></div>
            <div className="text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                velit hic porro.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis dolore repudiandae laborum sunt itaque temporibus
                veniam, dolorem, voluptatibus magnam tenetur? A delectus
                sapiente ab molestiae necessitatibus recusandae modi? Sint!
              </p>
              <div className="card">
                <div className="card-inner">
                  <h1>
                    <RiDoubleQuotesL />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br /> Adipisci eligendi quam fugit animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="frame">
            <div className="img"></div>
            <div className="text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                velit hic porro.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis dolore repudiandae laborum sunt itaque temporibus
                veniam, dolorem, voluptatibus magnam tenetur? A delectus
                sapiente ab molestiae necessitatibus recusandae modi? Sint!
              </p>
              <div className="card">
                <div className="card-inner">
                  <h1>
                    <RiDoubleQuotesL />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br /> Adipisci eligendi quam fugit animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="frame">
            <div className="img"></div>
            <div className="text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                velit hic porro.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                perferendis dolore repudiandae laborum sunt itaque temporibus
                veniam, dolorem, voluptatibus magnam tenetur? A delectus
                sapiente ab molestiae necessitatibus recusandae modi? Sint!
              </p>
              <div className="card">
                <div className="card-inner">
                  <h1>
                    <RiDoubleQuotesL />
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br /> Adipisci eligendi quam fugit animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
