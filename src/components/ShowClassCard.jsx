import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ShowClassCard = ({ danceClass }) => {
  const { user, loading } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const {
    _id,
    imageUrl,
    nameOfTheClass,
    availableSeats,
    enrolledStudents,
    info,
    instructorName,
    price,
  } = danceClass;
  const shortInfo = info.slice(0, 50);
  useEffect(() => {
    if (!loading && user) {
      fetch(`http://localhost:5000/role?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserId(data._id);
        });
    }
  }, [loading, user]);
  const handleAddToCart = (clas, userId) => {
    const { _id, nameOfTheClass, instructorName, instructorEmail } = clas;
    const dataToSave = {
      classId: _id,
      nameOfTheClass,
      instructorName,
      instructorEmail,
      selectedBy: userId,
      isPayed: false,
    };
    fetch(`http://localhost:5000/carts/${_id}/${userId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSave),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.massege) {
          Swal.fire({
            position: "top-end",
            text: data?.massege,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            text: "seclected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto w-[400px] h-[500px] bg-white rounded-lg shadow-lg">
      <img
        style={{ height: "200px", width: "400px" }}
        className="w-full rounded"
        src={imageUrl}
        alt="Product"
      />
      <div className="p-4 text-start">
        <h3 className="text-2xl font-bold">{nameOfTheClass}</h3>
        <h3 className="text-xl font-bold">By {instructorName}</h3>

        <p>Available Seats: {availableSeats}</p>
        <p>Enrolled Students: {enrolledStudents}</p>
        <p className="text-gray-700 mt-2">{shortInfo}...</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-800 font-bold">${price}</span>
          <button
            onClick={() => {
              if (user) {
                handleAddToCart(danceClass, userId);
              } else {
                navigate("/login");
              }
            }}
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowClassCard;
