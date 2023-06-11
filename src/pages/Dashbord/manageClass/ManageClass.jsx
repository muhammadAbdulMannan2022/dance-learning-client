import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [clssses, setClasses] = useState([]);
  useEffect(() => {
    fetch(`https://hello-summer-server.vercel.app/classes/all`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  const roleOptions = ["approv", "reject", "panding"];
  const [selectedRoles, setSelectedRoles] = useState(
    clssses.reduce((acc, user) => {
      acc[user.id] = user.status;
      return acc;
    }, {})
  );

  const handleRoleChange = (classId, event, name) => {
    const newRole = event.target.value;
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [classId]: newRole,
    }));
    console.log(newRole);
    Swal.fire({
      title: "Are you sure?",
      text: `you want to ${newRole} the class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        let newStatus = { status: newRole };
        console.log(newRole);
        if (newRole == "reject") {
          console.log("rejected");
          Swal.fire({
            title: "write a review",
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "submit",
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
              newStatus = { status: newRole, review: login };
              fetch(
                `https://hello-summer-server.vercel.app/classes/status/${classId}`,
                {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(newStatus),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  Swal.fire(
                    `${newRole}!`,
                    `the class is ${newRole}.`,
                    "success"
                  );
                });
            },
          });
        } else {
          fetch(
            `https://hello-summer-server.vercel.app/classes/status/${classId}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newStatus),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Swal.fire(`${newRole}!`, `the class is ${newRole}.`, "success");
            });
        }
      }
    });
  };

  return (
    <div className="w-full md:w-3/4 mt-5">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              {/* <th className="py-2 px-4 border-b">ID</th> */}
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {clssses.map((classe) => (
              <tr key={classe._id}>
                {/* {console.log(classe)} */}
                {/* <td className="py-2 px-4 border-b">{user.id}</td> */}
                <td className="py-2 px-4 border-b">{classe.nameOfTheClass}</td>
                <td className="py-2 px-4 border-b">{classe.instructorEmail}</td>
                <td className="py-2 px-4 border-b">
                  <select
                    defaultValue={classe.status}
                    onChange={(e) =>
                      handleRoleChange(classe._id, e, classe.name)
                    }
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
      </div>
    </div>
  );
};

export default ManageClass;
