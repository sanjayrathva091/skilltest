import { Outlet } from "react-router-dom";
import Navbar from "../commons/Navbar";
import AppFooter from "../commons/AppFooter";

function GlobalLayout() {
  return (
    <>
      {<Navbar />}
      <div className="content">
        {/* The Outlet component is used to render nested routes */}
        <Outlet />
      </div>
      {<AppFooter />}
    </>
  );
}

export default GlobalLayout;
