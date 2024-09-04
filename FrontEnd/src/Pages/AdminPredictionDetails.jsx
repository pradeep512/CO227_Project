import React from 'react'
import GetPatientById from '../components/GetPatientById'
import FetchAllPatients from '../components/GetAllPatients'
import DoctorPatients from '../components/GetRegisteredPatientsForDoctor'
import SearchDoctors from '../components/SearchDoctors'
import SearchPatients from '../components/SearchPatients'

const AdminPredictionDetails = () => {
  return (
    <div>
      <DoctorPatients />
    </div>
  )
}

export default AdminPredictionDetails