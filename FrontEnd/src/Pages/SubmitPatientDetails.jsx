import DoctorExaminationDataSubmission from "../components/DoctorExaminationDataSubmission";
import PatientClinicalDataSubmission from "../components/PatientClinicalDataSubmission";

export default function SubmitPatientDetails() {
  return (
    <div>
      <PatientDetailsSubmit />
      <PatientClinicalDataSubmission />
      <DoctorExaminationDataSubmission />
    </div>
  );
}
