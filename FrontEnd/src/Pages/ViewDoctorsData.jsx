import React from 'react'
import GetPatientById from '../components/GetPatientById'
import FetchAllPatients from '../components/GetAllPatients'
import DoctorPatients from '../components/GetRegisteredPatientsForDoctor'
import SearchDoctors from '../components/SearchDoctors'
import SearchPatients from '../components/SearchPatients'

const ViewDoctorsData = () => {
  return (
    <div>
      Patient's Details

 
      <DoctorPatients />
      <SearchDoctors />
  
    </div>
  )
}

export default ViewDoctorsData
