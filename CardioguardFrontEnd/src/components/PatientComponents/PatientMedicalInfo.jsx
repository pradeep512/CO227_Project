import PatientClinicalData from '../AdminComponents/PatientClinicalData';
import PatientExaminationData from '../AdminComponents/PatientExaminationData';
import PatientSymptomDataById from '../AdminComponents/PatientSymptomsData';
import PatientProgressGraph from './PatientProgressGraph';

const PatientMedicalInfo = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
            {/* Top left - Clinical Data */}
            <div className="row-span-1 col-span-1">
                <PatientClinicalData />
            </div>

            {/* Top right - Symptoms Data */}
            <div className="row-span-1 col-span-1">
                <PatientSymptomDataById />
            </div>

            {/* Bottom left - Examination Data */}
            <div className="row-span-1 col-span-1">
                <PatientExaminationData />
            </div>

            {/* Bottom right - Patient Progress Graph */}
            <div className="row-span-1 col-span-1">
                <PatientProgressGraph />
            </div>
        </div>
    );
};

export default PatientMedicalInfo;
