import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { AiFillGithub } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const goto = location?.state?.pathname || "/";
  const { logInUserEmailPassword, gitHubLogin } = useContext(AuthContext);
  const handleGithubLogin = () => {
    gitHubLogin()
      .then((res) => {
        console.log(res);
        navigate(goto);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    logInUserEmailPassword(email, password)
      .then(() => {
        Swal.fire("success", "sign in successful");
        setError("");
        setEmail("");
        setPassword("");
        navigate(goto);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {console.log(location.state)}
      <h1 className="text-2xl font-bold mb-5 mt-5">Login now</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full md:w-1/2 ">
        <form onSubmit={handleSubmit} className="">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
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
        <div className="pt-3">
          <span className="text-red-700 block">{error}</span>
          <Link
            className="mt-5 text-slate-600 hover:text-blue-400 text-sm "
            to="/register"
          >
            New to this site? register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
