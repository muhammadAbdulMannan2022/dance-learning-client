import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import ShowClassCard from "../../components/ShowClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionTitle title={"all classes"} />
      <div className="flex flex-wrap max-w-[1400px] gap-3">
        {classes.map((classe) => {
          return <ShowClassCard key={classe._id} danceClass={classe} />;
        })}
      </div>
    </div>
  );
};

export default Classes;
