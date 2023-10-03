import { Outlet } from "react-router-dom";
import Navbar from "../commons/Navbar";

function GlobalLayout() {
  return (
    <div>
      <div>{<Navbar />}</div>
      <div className="content">
        {/* The Outlet component is used to render nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default GlobalLayout;
