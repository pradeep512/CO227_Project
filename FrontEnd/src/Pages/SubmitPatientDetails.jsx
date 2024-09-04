import DoctorExaminationDataSubmission from "../components/DoctorExaminationDataSubmission";
import PatientClinicalDataSubmission from "../components/PatientClinicalDataSubmission";
import PatientDetailsSubmit from "../components/PatientDetailsSubmit";

export default function SubmitPatientDetails() {
    return (
      <div>
        {/* <AppBarGeneral />
        <PatientDetailsSubmit />
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
  
        <hr/>
        <MachineLearningData/>
        <hr/>
        <PredictionResult/> */}

        <PatientDetailsSubmit />
        <PatientClinicalDataSubmission />
        <DoctorExaminationDataSubmission />
      
      </div>
    );
  }
  