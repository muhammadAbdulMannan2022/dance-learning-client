import SectionTitle from "../../shared/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ShowClassCard from "../../../components/ShowClassCard";
const PopularClass = () => {
  // TODO: replace the object with real data
  const danceClasses = [
    {
      _id: 1,
      imageUrl: "https://i.ibb.co/TwrPLk9/contemporary-fusion.jpg",
      nameOfTheClass: "Contemporary Fusion",
      availableSeats: 12,
      price: 49.99,
      info: "Experience the fluidity of contemporary dance with a fusion of various styles. This class is open to all levels and focuses on creative expression and storytelling through movement.",
      instructorName: "Sarah Johnson",
    },
    {
      _id: 2,
      imageUrl: "https://i.ibb.co/XZm0PDP/hip-hop.jpg",
      nameOfTheClass: "Hip Hop Grooves",
      availableSeats: 8,
      price: 39.99,
      info: "Get your groove on with our energetic Hip Hop class. Learn popular dance moves, master dynamic choreography, and improve your freestyle skills. Join us to unleash your inner dancer!",
      instructorName: "Mike Thompson",
    },
    {
      _id: 3,
      imageUrl: "https://i.ibb.co/F0CynxD/ballet-basics.jpg",
      nameOfTheClass: "Ballet Basics",
      availableSeats: 10,
      price: 59.99,
      info: "Discover the grace and elegance of classical ballet. Perfect for beginners, this class focuses on proper technique, body alignment, and musicality. Start your ballet journey with us!",
      instructorName: "Emily Davis",
    },
    {
      _id: 4,
      imageUrl: "https://i.ibb.co/6yBkMPj/Latin-Rhythms.webp",
      nameOfTheClass: "Latin Rhythms",
      availableSeats: 15,
      price: 44.99,
      info: "Experience the vibrant beats of Latin dance styles. Our Latin Rhythms class combines various Latin dances like Salsa, Bachata, and Merengue. Join us to spice up your dance moves!",
      instructorName: "Carlos Rodriguez",
    },
  ];

  return (
    <div>
      <SectionTitle title={"Popular Classes"} />
      <div className="my-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <ShowClassCard />
          </SwiperSlide> */}
          {danceClasses.map((danceClass) => (
            <SwiperSlide key={danceClass?._id}>
              <ShowClassCard danceClass={danceClass} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularClass;
