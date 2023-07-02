import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Backward({ bwdPath }) {
  return (
    <div className="fixed top-[50%] left-3">
      <NavLink to={bwdPath} className="">
        <BsFillArrowLeftCircleFill />
      </NavLink>
    </div>
  );
}
