// eslint-disable-next-line react/prop-types
const ShowInstructor = ({ instructor }) => {
  const { name, email, classesTakenByHim, studentNumber, photo, experience } =
    instructor;
  return (
    <div className="max-w-md mx-auto h-[400px] bg-white rounded-lg shadow-lg">
      <img
        style={{ height: "200px" }}
        className="w-full"
        src={photo}
        alt="Product"
      />
      <div className="p-4 text-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <h3 className="text-sm">
          <span className="font-bold">email :</span> {email}
        </h3>

        <p>
          <span className="font-bold">Classes taken by him:</span>{" "}
          {classesTakenByHim.length} class
        </p>
        <p>
          <span className="font-bold">number of students:</span> {studentNumber}
        </p>
        <p className="text-gray-700 mt-2">{experience}</p>
        <div className="flex items-center mt-4">
          <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowInstructor;
