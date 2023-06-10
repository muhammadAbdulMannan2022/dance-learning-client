import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const EnrolledClass = () => {
  const { loading, userFdb } = useContext(AuthContext);
  const [enrolledClass, setEnrolledClass] = useState([]);
  useEffect(() => {
    if (!loading) {
      fetch(`http://localhost:5000/cart/${userFdb._id}/:${true}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEnrolledClass(data);
        });
    }
  }, [loading, userFdb]);
  return (
    <div className="flex flex-col w-full">
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {enrolledClass.length === 0 ? (
                  <tr className="text-center">
                    <td className="row-span-3 col-span-3 py-6 text-xl">
                      you do not have enrolled in any class
                    </td>
                  </tr>
                ) : (
                  <>
                    {enrolledClass.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item?.nameOfTheClass}
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
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
