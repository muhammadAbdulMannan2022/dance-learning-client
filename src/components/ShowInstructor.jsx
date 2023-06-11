// eslint-disable-next-line react/prop-types
const ShowInstructor = ({ instructor }) => {
  const {
    name,
    email,
    classesTakenByHim,
    studentNumber,
    photoURL,
    experience,
  } = instructor;
  return (
    <div className="mx-auto w-[350px] max-h-[500px] bg-white rounded-lg shadow-lg">
      <img
        style={{ maxHeight: "250px" }}
        className="w-full"
        src={photoURL}
        alt="user photo not found"
      />
      <div className="p-4 text-start flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <h3 className="text-sm">
            <span className="font-bold">email :</span> {email}
          </h3>
          {/* <p>
            <span className="font-bold">number of students:</span>{" "}
            {studentNumber}
          </p> */}
        </div>
        <div className="flex items-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowInstructor;
