import AppBarGeneral from "../components/AppBarGeneral";
import PredictionButton from "../components/PredictionButton";
import PatientDetailsSubmit from "./PatientDetailsSubmit";
import PatientClinicalDataSubmission from "./PatientClinicalDataSubmission";
import DoctorExaminationDataSubmission from "./DoctorExaminationDataSubmission"
import PatientData from "./PatientData";

export default function HomePage(){
    return(
        <div>
            <AppBarGeneral/>
            <PatientDetailsSubmit/>
            <PatientClinicalDataSubmission/>
            <DoctorExaminationDataSubmission/>
            <PatientData/>
        </div>
    )
}