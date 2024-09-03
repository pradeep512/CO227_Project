import AppBarGeneral from "../components/AppBarGeneral";
import PredictionButton from "../components/PredictionButton";
import PatientSymptomsSubmit from "./PatientSymptomsSubmit";
import PatientClinicalDataSubmission from "./PatientClinicalDataSubmission";
import DoctorExaminationDataSubmission from "./DoctorExaminationDataSubmission";
import PatientData from "./PatientData";
import DoctorDataById from "../components/GetDoctorById";
import FetchAllDoctors from "../components/GetAllDoctors";
import FetchAllPatients from "../components/GetAllPatients";
import UpdatePatient from "../components/UpdatePatient";
import DeletePatient from "../components/DeletePatient";
import MachineLearningData from "../components/MachineLearningData";
import DeleteDoctor from "../components/DeleteDoctor";
import UpdateDoctor from "../components/UpdateDoctor";
import DoctorPatients from "../components/GetRegisteredPatientsForDoctor";
import SearchDoctors from "../components/SearchDoctors";
import SearchPatients from "../components/SearchPatients";
import RegisterPatientToDoctor from "../components/RegisterPatientsForDoctor";
import PredictionResult from "../components/PredictionResult";

export default function HomePage() {
  return (
    <div>
      <AppBarGeneral />
      <PatientSymptomsSubmit />
      <PatientClinicalDataSubmission />
      <DoctorExaminationDataSubmission />
      <PatientData />
      <DoctorDataById />
      <FetchAllDoctors />
      <FetchAllPatients />
      <UpdatePatient />
      <UpdateDoctor />
      <DeletePatient />
      <DeleteDoctor />
      <DoctorPatients />
      <SearchDoctors />
      <SearchPatients />
      <RegisterPatientToDoctor />

      <hr />
      <MachineLearningData />
      <hr />
      <PredictionResult />
    </div>
  );
}
