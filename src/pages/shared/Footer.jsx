import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content shadow mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-bold">Classes</span>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">
            Contemporary Fusion
          </a>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">Design</a>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">
            Hip Hop Grooves
          </a>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">
            Ballet Basics
          </a>
        </div>
        <div>
          <span className="font-bold">Company</span>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">
            About us
          </a>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">
            Contact
          </a>
          <a className="block mt-2 text-blue-500 hover:text-blue-700">Jobs</a>
        </div>
        <div>
          <span className="font-bold">Social</span>
          <div className="flex gap-4 mt-2">
            <a>
              <FaFacebook className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            </a>
            <a>
              <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            </a>
            <a>
              <FaInstagram className="w-6 h-6 hover:text-red-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
