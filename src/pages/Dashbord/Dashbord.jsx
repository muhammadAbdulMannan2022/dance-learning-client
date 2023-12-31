import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import MyClasses from "./my classes/MyClasses";

const Dashbord = () => {
  const { user, loading, userFdb } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [currentEmail, setCuttrntEmail] = useState("");
  const [rol, setRol] = useState("");
  const [selectedClass, setSelectedClass] = useState([]);
  const roleOptions = ["student", "admin", "instructor"];
  const [selectedRoles, setSelectedRoles] = useState(
    users.reduce((acc, user) => {
      acc[user.id] = user.rol;
      return acc;
    }, {})
  );
  useEffect(() => {
    fetch("https://hello-summer-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
    // console.log(loading);
    if (!loading) {
      fetch(`https://hello-summer-server.vercel.app/role/?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCuttrntEmail(data.email);
          setRol(data.rol);
        });
      fetch(
        `https://hello-summer-server.vercel.app/cart/${userFdb._id}/:${false}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log(userFdb._id);
          setSelectedClass(data);
        });
    }
  }, [loading, userFdb]);
  const handleRoleChange = (userId, event, name) => {
    const newRole = event.target.value;
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [userId]: newRole,
    }));
    console.log(newRole);
    Swal.fire({
      title: "Are you sure?",
      text: `you want to make ${name} as ${newRole}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const newUserRol = { rol: newRole };
        fetch(
          `https://hello-summer-server.vercel.app/makeinstructor/${userId}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUserRol),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire(
              `${newRole}!`,
              `this user is now an ${newRole}.`,
              "success"
            );
          });
      }
    });
  };
  const copyId = (id) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };
  return (
    <div className="w-full md:w-3/4">
      {console.log(user, userFdb)}
      <div className="w-full overflow-x-auto">
        {loading ? (
          ""
        ) : rol === "admin" ? (
          <table className="min-w-full border bg-white border-gray-300">
            <thead>
              <tr>
                {/* <th className="py-2 px-4 border-b">ID</th> */}
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  {/* <td className="py-2 px-4 border-b">{user.id}</td> */}
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      defaultValue={user.rol}
                      onChange={(e) => handleRoleChange(user._id, e, user.name)}
                      className="block w-full py-1 px-2 border border-gray-300 rounded-md"
                    >
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : // TODO: add cart data
        rol === "student" ? (
          <div className="flex flex-col">
            <div className="overflow-x-auto ">
              <div className="align-middle inline-block min-w-full ">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Class Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Instructor
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedClass.map((item) => (
                        <tr key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {console.log("items is ", item)}
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item?.nameOfTheClass}
                                </div>
                                <div className="flex">
                                  id :
                                  <div
                                    onClick={() => copyId(item?.classId)}
                                    className="text-sm cursor-pointer font-medium text-gray-900 bg-slate-300 rounded px-1"
                                  >
                                    {item?.classId}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.instructorName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.instructorEmail}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              ${item.price}
                            </span>
                          </td>
                          <td className="px-6 py-4 flex flex-col gap-[10px] whitespace-nowrap text-sm text-gray-500">
                            <button className="px-2 text-center inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              remove
                            </button>
                            <Link
                              state={{ id: item?.classId, price: item.price }}
                              to="/dashbord/payment"
                            >
                              <button className="px-2 py-1 flex items-center justify-center text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                pay
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          rol === "instructor" && <MyClasses email={currentEmail} />
        )}
      </div>
    </div>
  );
};

export default Dashbord;
