import React from "react";
import GetPatientById from "../components/GetPatientById";
import FetchAllPatients from "../components/GetAllPatients";
import DoctorPatients from "../components/GetRegisteredPatientsForDoctor";
import SearchDoctors from "../components/SearchDoctors";
import SearchPatients from "../components/SearchPatients";
import RegisterPatientToDoctor from "../components/RegisterPatientsForDoctor";

const AdminPatientDetails = () => {
  return (
    <div>
      Patient's Details
      <GetPatientById />
      <FetchAllPatients />
      <DoctorPatients />
      <SearchPatients />
      <RegisterPatientToDoctor />
    </div>
  );
};

export default AdminPatientDetails;
