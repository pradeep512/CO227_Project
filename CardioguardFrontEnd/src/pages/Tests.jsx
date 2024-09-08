import FetchAllDoctors from "../components/AllDoctors";
import FetchAllPatients from "../components/AllPatients";
import DeleteDoctor from "../components/DeleteDoctor";
import DeletePatient from "../components/DeletePatient";
import DeleteSymptoms from "../components/deleteSymptomsById";
import DoctorExaminationDataSubmission from "../components/DoctorExaminationDataSubmission ";
import DoctorDataById from "../components/GetDoctorById";
import PatientExaminationDataById from "../components/GetDoctorExaminationsById";
import PatientDataById from "../components/GetPatientById";
import PatientSymptomDataById from "../components/GetPatientSymptomsById";
import DoctorPatients from "../components/GetRegisteredPatientsForDoctor";
import PatientSymptomDataByBothId from "../components/GetSymptomsDataByBothIDs";
import MachineLearningData from "../components/MachineLerningDataForm";
import NavBar from "../components/NavBar";
import PatientClinicalDataById from "../components/PatientClinicalDataById";
import PatientClinicalDataSubmission from "../components/PatientClinicalDataSubmission ";
import PatientSymptomsSubmit from "../components/PatientSymptomsSubmit";
import PredictionButton from "../components/PredictionButton";
import RegisterPatientToDoctor from "../components/RegisterPatientsForDoctor";
import SearchDoctors from "../components/SearchDoctors";
import SearchPatients from "../components/SearchPatients";
import SendDeleteButton from "../components/SendDeleteButton";
import UpdateDoctor from "../components/UpdateDoctor ";
import UpdateSymptoms from "../components/UpdateSymptoms";
import UpdateSymptomsByBothIds from "../components/UpdateSymptomsByBothIds";

export default function Tests() {
  return (
    <div>
      <NavBar />
      <MachineLearningData />
      <DeleteDoctor />
      <FetchAllDoctors />
      <DeletePatient />
      <DeleteSymptoms />
      <DoctorExaminationDataSubmission />
      <FetchAllPatients />
      <PatientClinicalDataById />
      <DoctorDataById />
      <PatientExaminationDataById />
      <PatientDataById />
      <PatientSymptomDataById />
      <DoctorPatients />
      <PatientSymptomDataByBothId /> {/*  Something wrong here */}
      <PatientClinicalDataSubmission />
      <PatientSymptomsSubmit />
      <PredictionButton />
      <RegisterPatientToDoctor />
      <SearchDoctors />
      <SearchPatients />
      <SendDeleteButton /> {/* Don't know what is this button use for */}
      <UpdateDoctor />
      <UpdateSymptoms />
      <UpdateSymptomsByBothIds /> {/*same as the UpdateSymptoms for now */}
    </div>
  );
}
