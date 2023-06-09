import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const image_token = import.meta.env.VITE_apiKey_imgbb;
const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const {
      className,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      info,
    } = from;
    // console.log(
    //   className,
    //   classImage,
    //   instructorName,
    //   instructorEmail,
    //   availableSeats,
    //   price,
    //   info
    // );

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${image_token}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data.data.url);
          // Handle the response data here
          try {
            const theClass = {
              imageUrl: data.data.url,
              nameOfTheClass: className.value,
              availableSeats: availableSeats.value,
              price: price.value,
              info: info.value,
              instructorName: instructorName.value,
              enrolledStudents: 0,
              instructorEmail: instructorEmail.value,
              status: "panding",
            };

            const res = await fetch(`http://localhost:5000/classes`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(theClass),
            });
            const returnData = await res.json();
            console.log(returnData);
          } catch (error) {
            console.log(error);
          }
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle any errors here
      }
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="w-full md:w-1/2 mx-auto mt-5 h-[800px] bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-bold mb-1">
            Class Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="className"
            name="className"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block font-bold mb-1">
            Class Image<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="classImage"
            name="classImage"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block font-bold mb-1">
            Instructor Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={user.displayName}
            id="instructorName"
            name="instructorName"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block font-bold mb-1">
            Instructor Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            value={user.email}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block font-bold mb-1">
            Available Seats<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="info" className="block font-bold mb-1">
            info about class<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="info"
            name="info"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-bold mb-1">
            Price<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
