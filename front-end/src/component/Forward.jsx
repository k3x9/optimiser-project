import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Forward({ fwdPath }) {
  return (
    <div className="fixed top-[50%] right-3">
      <NavLink to={fwdPath} className="">
        <BsFillArrowRightCircleFill />
      </NavLink>
    </div>
  );
}
