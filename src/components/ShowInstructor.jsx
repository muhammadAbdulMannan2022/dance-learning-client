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
    <div className="max-w-md mx-auto max-h-[500px] bg-white rounded-lg shadow-lg">
      <img
        style={{ height: "200px" }}
        className="w-full"
        src={photoURL}
        alt="user photo not found"
      />
      <div className="h-3/5 p-4 text-start flex flex-col justify-between">
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
        <div className="flex items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowInstructor;
