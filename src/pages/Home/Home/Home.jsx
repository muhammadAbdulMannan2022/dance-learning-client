import Header from "../Header";
import Contactus from "../contactus/Contactus";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import PopularClass from "../popularclasses/PopularClass";

const Home = () => {
  return (
    <>
      <Header />
      <PopularClass />
      <PopularInstructors />
      <Contactus />
    </>
  );
};

export default Home;
