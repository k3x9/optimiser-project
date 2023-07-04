import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Forward({ fwdPath }) {
  return (
    <div className="fixed top-1/2 right-3">
      <NavLink to={fwdPath} className="">
        <BsFillArrowRightCircleFill 
        size={40}
        color="red"/>
      </NavLink>
    </div>
  );
}
