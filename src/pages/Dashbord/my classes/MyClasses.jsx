import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyClasses = ({ email }) => {
  const [classesData, setClassesData] = useState([]);
  useEffect(() => {
    fetch(
      `https://hello-summer-server.vercel.app/instructorclass?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
      });
  }, [email]);
  const showReview = (review) => {
    Swal.fire({
      title: "admin review",
      text: `${review}`,
    });
  };
  return (
    <div className="flex flex-col">
      {console.log(email)}
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
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
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Seats
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    review
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classesData.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.nameOfTheClass}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col gap-[4px]">
                      <span className="px-2 text-center rounded text-xs  bg-green-100 text-green-900">
                        {item.availableSeats}
                      </span>
                      <span className="px-2 text-center rounded text-xs  bg-green-100 text-green-900">
                        {item.enrolledStudents}
                      </span>
                    </td>
                    {item.review ? (
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => showReview(item.review)}
                          className="bg-yellow-100 text-yellow-700 rounded p-[4px]"
                        >
                          see review
                        </button>
                      </td>
                    ) : (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="bg-yellow-100 text-yellow-700 rounded p-[4px]">
                          no review
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
