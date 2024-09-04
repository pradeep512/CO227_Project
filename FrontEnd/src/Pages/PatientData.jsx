import React from 'react'
import GetPatientById from '../components/GetPatientById'
import FetchAllPatients from '../components/GetAllPatients'
import DoctorPatients from '../components/GetRegisteredPatientsForDoctor'
import SearchDoctors from '../components/SearchDoctors'
import SearchPatients from '../components/SearchPatients'

const PatientData = () => {
  return (
    <div>
      Patient's Details
      <GetPatientById/>
      <FetchAllPatients />
      <DoctorPatients />
      <SearchDoctors />
      <SearchPatients />
    </div>
  )
}

export default PatientData
