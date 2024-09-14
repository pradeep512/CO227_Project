import { NavLink, useLocation, useParams } from "react-router-dom";
import { FiGrid, FiUser, FiUsers } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation(); // Get the current path
  const { id } = useParams(); // Get the current doctor ID from URL

  return (
    <div className="w-64 bg-gray-100 h-screen p-6 shadow-lg flex flex-col items-center">
      <img
        src="/src/images/CardioGuard.webp"
        alt="Profile"
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h2 className="text-[#2C3746] text-2xl font-bold mb-16">CardioGuard</h2>
      <nav className="flex flex-col gap-4 w-full">
        <NavLink
          to={`/doctor/${id}`} // Update to include doctor ID
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname === `/doctor/${id}`
                ? "bg-[#A9F0E4] text-[#2C3746]"
                : ""
            }`
          }
        >
          <FiGrid className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to={`/doctor/${id}/patients`} // Update to include doctor ID
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname.startsWith(`/doctor/${id}/patients`)
                ? "bg-[#A9F0E4] text-[#2C3746]"
                : ""
            }`
          }
        >
          <FiUsers className="mr-3" />
          Patients
        </NavLink>
        <NavLink
          to={`/doctor/${id}/doctors`} // Update to include doctor ID
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname.startsWith(`/doctor/${id}/doctors`)
                ? "bg-[#A9F0E4] text-[#2C3746]"
                : ""
            }`
          }
        >
          <FiUser className="mr-3" />
          Doctors
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
