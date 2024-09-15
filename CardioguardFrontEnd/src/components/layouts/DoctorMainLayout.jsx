import Sidebar from "../DoctorComponents/SideBar";
import TopBar from "../DoctorComponents/TopBar";
import { Outlet } from "react-router-dom";

const DoctorMainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar will remain fixed to the left */}
      <div className="w-64 fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area, with margin to make space for the sidebar */}
      <div className="flex flex-col w-full ml-64">
        {/* TopBar will be static at the top */}
        <TopBar />

        {/* This Outlet will load the corresponding page component */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorMainLayout;
