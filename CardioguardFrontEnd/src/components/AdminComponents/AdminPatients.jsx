// Patients.jsx
const AdminPatients = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Patients</h1>

      {/* Example of Patient Info (You can map through your list of patients) */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Patient"
            className="rounded-full w-16 h-16"
          />
          <div className="ml-4">
            <p className="font-semibold">Caren G. Simpson</p>
            <p>Patient ID: 301</p>
          </div>
        </div>

        {/* Patient Information */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold">Contact Info</h4>
            <p>Phone: +1 555-123-4567</p>
            <p>Email: caren.simpson@example.com</p>
            <p>Address: 123 Maple Street</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold">Medical Info</h4>
            <p>Height: 5 ft 1.5 in</p>
            <p>Weight: 140 lbs</p>
            <p>Blood Pressure: 120/80 mmHg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPatients;
