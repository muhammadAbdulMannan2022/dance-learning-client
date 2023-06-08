import { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import Swal from "sweetalert2";
const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the form data to a server or perform any desired actions
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    Swal.fire("success", "email send successful", "success");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <SectionTitle title={"contact us"} />
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded resize-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contactus;
