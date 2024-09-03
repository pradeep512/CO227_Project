import AppBarGeneral from "../components/AppBarGeneral";
import PredictionButton from "../components/PredictionButton";
import PatientDetailsSubmit from "./PatientDetailsSubmit";
import PatientClinicalDataSubmission from "./PatientClinicalDataSubmission";
import DoctorExaminationDataSubmission from "./DoctorExaminationDataSubmission";
import PatientData from "./PatientData";
import DoctorDataById from "../components/GetDoctorById";
import FetchAllDoctors from "../components/GetAllDoctors";
import FetchAllPatients from "../components/GetAllPatients";
import UpdatePatient from "../components/UpdatePatient";
import DeletePatient from "../components/DeletePatient";
import MachineLearningData from "../components/MachineLearningData";
import PredictionResult from "../components/PredictionResult";

export default function HomePage() {
  return (
    <div>
      <AppBarGeneral />
      <PatientDetailsSubmit />
      <PatientClinicalDataSubmission />
      <DoctorExaminationDataSubmission />
      <PatientData />
      <DoctorDataById />
      <FetchAllDoctors />
      <FetchAllPatients />
      <UpdatePatient />
      <DeletePatient />
      <hr/>
      <MachineLearningData/>
      <hr/>
      <PredictionResult/>
      
    </div>
  );
}
