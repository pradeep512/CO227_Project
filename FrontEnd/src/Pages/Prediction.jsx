import MachineLearningData from "../components/MachineLearningData";
import PredictionButton from "../components/PredictionButton";
import PredictionResult from "../components/PredictionResult";

export default function Prediction() {
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
        
        <PredictionButton/>
        <MachineLearningData/>
        <PredictionResult/>
      
      </div>
    );
  }
  