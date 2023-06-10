/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const { user, gitHubLogin, emailPasswordSignup, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGithubLogin = () => {
    gitHubLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   TODO: chack the error handlaing
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const { name, email, password, imageUrl, confirmPassword } = from;
    // console.log(name, email, password, imageUrl, confirmPassword);
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;
    const isPasswordGood = regex.test(password.value);
    if (password.value === confirmPassword.value) {
      if (isPasswordGood) {
        setError("");
        emailPasswordSignup(email.value, password.value)
          .then((res) => {
            updateProfile(res.user, {
              displayName: name.value,
              photoURL: imageUrl.value,
            })
              .then(() => {
                const radyUser = {
                  name: name.value,
                  email: email.value,
                  photoURL: imageUrl.value,
                  rol: "student",
                };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(radyUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  });
                from.reset();
                console.log(user);
                setLoading(false);
                navigate("/");
              })
              .catch((error) => {
                setError(error.massage);
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      } else {
        setError("keep 1 uppercase and 1 special character");
      }
    } else {
      setError("password don't match with confirm password");
    }
  };
  return (
    <div className="flex justify-center items-center mt-5">
      {/* {console.log(user)} */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full md:w-1/2">
        <h1 className="text-2xl text-center mb-10">Signup now</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <PasswordFild name={"password"} />
          <PasswordFild name={"confirm password"} />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageUrl"
              type="text"
              placeholder="Enter the image URL"
              name="imageUrl"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-500 rounded font-bold"
          >
            Sign Up
          </button>
          <span className="text-red-700 block">{error}</span>
        </form>
        <Link
          className="mt-5 text-slate-600 hover:text-blue-400 text-sm "
          to="/login"
        >
          alrady have an account ? login
        </Link>
        <div className="flex items-center justify-center mt-4 flex-col">
          <div className="w-full flex items-center justify-center mb-2">
            <hr className="w-[50px] h-[3px] text-black bg-black rounded" />
            <span className="text-xl mx-2">or</span>
            <hr className="w-[50px] h-[3px] text-black bg-black rounded" />
          </div>
          <button
            className="shadow p-3 rounded-full"
            onClick={handleGithubLogin}
          >
            <AiFillGithub className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PasswordFild = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={`${name == "password" ? "password" : "Confirm Password"}`}
      >
        {name == "password" ? "password" : "Confirm Password"}
      </label>
      <div className="relative">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          id={`${name == "password" ? "password" : "confirmPassword"}`}
          type={showPassword ? "text" : "password"}
          placeholder={`${
            name == "password" ? "password" : "Confirm your password"
          }`}
          name={`${name == "password" ? "password" : "confirmPassword"}`}
          required
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handlePasswordToggle}
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-gray-400" />
          ) : (
            <AiFillEye className="text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
