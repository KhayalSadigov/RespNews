import { Outlet } from "react-router-dom";
import SideBar from "../Layout/SideBar";

function MainRout() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideBar  />
      <div style={{ width: "100%", height:'100vh',overflowY: "scroll" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainRout;
