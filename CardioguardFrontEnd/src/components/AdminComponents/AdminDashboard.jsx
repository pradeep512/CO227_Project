import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client"; // Updated path for axiosClient
import PatientOverviewChart from "../AdminComponents/PatientOverviewChart";
import RevenueChart from "../AdminComponents/RevenueChart";
import FetchAllPatients from "../AllPatients"; // Import the FetchAllPatients component

const AdminDashboard = () => {
  const [data, setData] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    appointments: 0,
    totalInvoice: 0,
  });

  useEffect(() => {
    axiosClient
      .get("/api/dashboard")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow-lg rounded">
          <p>Total Patients</p>
          <h3 className="text-2xl">{data.totalPatients}</h3>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <p>Total Doctors</p>
          <h3 className="text-2xl">{data.totalDoctors}</h3>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <p>Appointments</p>
          <h3 className="text-2xl">{data.appointments}</h3>
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <p>Total Invoice</p>
          <h3 className="text-2xl">{data.totalInvoice}</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded">
          <PatientOverviewChart />
        </div>
        <div className="bg-white p-6 shadow-lg rounded">
          <RevenueChart />
        </div>
      </div>
      <div className="bg-white p-6 shadow-lg rounded">
        <FetchAllPatients />
      </div>
    </div>
  );
};

export default AdminDashboard;
