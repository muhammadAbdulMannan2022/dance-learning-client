import { useEffect, useState } from "react";
import ShowInstructor from "../../components/ShowInstructor";

const Allinstuctor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getinstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  });
  return (
    <div className="flex flex-wrap px-5 py-8 md:px-10 lg:px-20 justify-center gap-3">
      <div className="max-w-[1200px] flex flex-wrap">
        {instructors.map((instructor) => (
          <ShowInstructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Allinstuctor;
