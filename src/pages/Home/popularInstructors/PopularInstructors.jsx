import SectionTitle from "../../shared/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ShowInstructor from "../../../components/ShowInstructor";
import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    fetch("https://hello-summer-server.vercel.app/getinstructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data.slice(0, 6));
      });
  }, []);
  // TODO: remove the object and add data from DB
  // const dancingSchoolInstructors = [
  //   {
  //     _id: "1",
  //     name: "John Smith",
  //     email: "john@example.com",
  //     classesTakenByHim: ["Contemporary Fusion", "Hip Hop Grooves"],
  //     studentNumber: 25,
  //     experience: "10 years of teaching experience in various dance styles.",
  //     bio: "John is a passionate dancer and instructor who believes in the power of dance to inspire and transform. He brings his expertise in contemporary fusion and hip hop to create dynamic and engaging dance classes.",
  //     photo: "john-smith.jpg",
  //   },
  //   {
  //     _id: "2",
  //     name: "Emily Johnson",
  //     email: "emily@example.com",
  //     classesTakenByHim: ["Ballet Basics", "Modern Dance"],
  //     studentNumber: 20,
  //     experience: "15 years of ballet training and teaching experience.",
  //     bio: "Emily is a classically trained ballet dancer with a strong foundation in technique and artistry. Her ballet basics classes focus on building strong fundamentals and nurturing a love for ballet in her students.",
  //     photo: "emily-johnson.jpg",
  //   },
  //   {
  //     _id: "3",
  //     name: "Michael Brown",
  //     email: "michael@example.com",
  //     classesTakenByHim: ["Latin Rhythms", "Salsa Mastery"],
  //     studentNumber: 30,
  //     experience:
  //       "Specializes in Latin dance styles and has performed internationally.",
  //     bio: "Michael is a charismatic instructor known for his energetic and passionate approach to teaching Latin dance. With a wealth of experience in salsa and other Latin rhythms, he creates a vibrant and fun learning environment for his students.",
  //     photo: "michael-brown.jpg",
  //   },
  // ];

  return (
    <div className="my-20">
      <SectionTitle title={"Popular Instrucktors"} />
      <div className="my-5 py-5 flex justify-center items-center">
        {/* {console.log(slidesPerView)} */}
        <div className="max-w-[1200px]">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* {console.log(instructors[0])} */}
            {instructors.map((instructor) => (
              <SwiperSlide className="md:w-[200px]" key={instructor?._id}>
                <ShowInstructor instructor={instructor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
