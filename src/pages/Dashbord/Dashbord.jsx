import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Dashbord = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [rol, setRol] = useState("");
  const roleOptions = ["student", "admin", "instructor"];
  const [selectedRoles, setSelectedRoles] = useState(
    users.reduce((acc, user) => {
      acc[user.id] = user.rol;
      return acc;
    }, {})
  );
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
    // console.log(loading);
    if (!loading) {
      fetch(`http://localhost:5000/role/?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRol(data.rol);
        });
    }
  }, [loading]);
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="bg-green-900 w-full md:w-3/4">
      {/* {console.log(user)} */}
      <div className="w-full overflow-x-auto">
        {loading ? (
          ""
        ) : rol === "admin" ? (
          <table className="min-w-full border border-gray-300">
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
          <div>hello</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dashbord;
