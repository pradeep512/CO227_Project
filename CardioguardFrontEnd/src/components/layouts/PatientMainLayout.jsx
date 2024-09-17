import SideBar from "../PatientComponents/SideBar"; // Import the SideBar component
import TopBar from "../PatientComponents/TopBar"; // Import the TopBar component
//import PatientDashboard from "./PatientDashboard"; // Import the PatientDashboard component
import { Outlet } from "react-router-dom";

const PatientMainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main content section */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar />

        {/* PatientDashboard */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PatientMainLayout;
