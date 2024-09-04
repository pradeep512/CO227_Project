import React from 'react'
import GetPatientById from '../components/GetPatientById'
import FetchAllPatients from '../components/GetAllPatients'
import DoctorPatients from '../components/GetRegisteredPatientsForDoctor'
import SearchDoctors from '../components/SearchDoctors'
import SearchPatients from '../components/SearchPatients'

const ViewOwnRecords = () => {
  return (
    <div>
      Patient's Details
      <GetPatientById/>
      <FetchAllPatients />
      <SearchPatients />
    </div>
  )
}

export default ViewOwnRecords