// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
// https://i.ibb.co/M27RRn5/315656-1600x1030-how-start-dance-team.jpg
// https://i.ibb.co/yS8qFwG/Depositphotos-104115466-s-2019.jpg
// https://i.ibb.co/z7MyGDv/jumping-dancers-scaled.jpg
export default function Header() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className={`bg-banner-bg bg-cover bg-center w-full h-[600px] flex items-center bg-[url('https://i.ibb.co/M27RRn5/315656-1600x1030-how-start-dance-team.jpg')]`}
          >
            <div className="w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">
                  Unleash Your Passion for Dance
                </h1>
                <p className="text-sm text-white mt-4">
                  Discover the joy of dancing at our premier dance academy. Our
                  experienced instructors will guide you through various dance
                  styles and help you unlock your full potential. Join us today
                  and embark on an exciting dance journey.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`bg-banner-bg bg-cover bg-center w-full h-[600px] flex items-center bg-[url('https://i.ibb.co/yS8qFwG/Depositphotos-104115466-s-2019.jpg')]`}
          >
            <div className="w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">
                  Experience the Rhythm of Dance
                </h1>
                <p className="text-sm text-white mt-4">
                  Immerse yourself in the enchanting world of dance. From
                  classical ballet to contemporary moves, our dance academy
                  offers a diverse range of classes suitable for all ages and
                  skill levels. Step onto the dance floor and let the music
                  ignite your soul.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`bg-banner-bg bg-cover bg-center w-full h-[600px] flex items-center bg-[url('https://i.ibb.co/z7MyGDv/jumping-dancers-scaled.jpg')]`}
          >
            <div className="w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white">
                  Elevate Your Dance Skills
                </h1>
                <p className="text-sm text-white mt-4">
                  Take your dance skills to new heights with our professional
                  training programs. Our academy is renowned for its rigorous
                  curriculum, supportive environment, and opportunities to
                  perform on prestigious stages. Unleash your creativity and
                  become the dancer you aspire to be.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
