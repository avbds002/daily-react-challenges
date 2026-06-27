import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <FcGoogle className="m-2" />
        <p>Sign-up with Google</p>
      </div>
      <div className="flex justify-center items-center ">
        <FaFacebook className="m-2" />
        <p>Sign-up with Facebook</p>
      </div>
    </>
  );
}
