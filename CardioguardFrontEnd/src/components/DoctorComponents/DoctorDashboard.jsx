
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDashboard = () => {
  const { id } = useParams(); // Extracts doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/admin/doctor/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching doctor data');
        }
        const data = await response.json();
        setDoctor(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [id]);

  if (loading) return <p>Loading doctor details...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!doctor) return <p>No doctor data available.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Doctor"
            className="rounded-full w-16 h-16"
          />
          <div className="ml-4">
            <p className="font-semibold">{doctor.surname} {doctor.lastName}</p>
            <p>Doctor ID: {doctor.doctorId}</p>
            <p>NIC: {doctor.nic}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold">Contact Info</h4>
            <p>Phone: {doctor.phone || 'Not Available'}</p>
            <p>Email: {doctor.email || 'Not Available'}</p>
            <p>Address: {doctor.address || 'Not Available'}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold">Medical Info</h4>
            <p>Height: {doctor.height || 'Not Available'}</p>
            <p>Weight: {doctor.weight || 'Not Available'}</p>
            <p>Blood Pressure: {doctor.bloodPressure || 'Not Available'}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold">Registered Patients</h4>
            {doctor.registeredPatientsForDoctor.length > 0 ? (
              <ul>
                {doctor.registeredPatientsForDoctor.map((patient, index) => (
                  <li key={index}>
                    {patient.firstName} {patient.lastName} - {patient.email}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No registered patients.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

