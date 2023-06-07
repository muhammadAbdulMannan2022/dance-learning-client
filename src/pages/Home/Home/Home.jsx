import Header from "../Header";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import PopularClass from "../popularclasses/PopularClass";

const Home = () => {
  return (
    <>
      <Header />
      <PopularClass />
      <PopularInstructors />
    </>
  );
};

export default Home;
