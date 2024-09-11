// Patients.jsx
const AdminDoctors = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Doctors</h1>
  
        {/* Example of Doctor Info (You can map through your list of patients) */}
        <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex items-center mb-4">
            <img
                src="https://via.placeholder.com/60"
                alt="Doctor"
                className="rounded-full w-16 h-16"
            />
            <div className="ml-4">
                <p className="font-semibold">Caren G. Simpson</p>
                <p>Doctor ID: 301</p>
            </div>

            {/* Search bar with a button to find respective doctors*/}
            <div className="ml-auto flex items-center">
                <input
                type="text"
                placeholder="Search Doctor by Name..."
                className="border rounded-l-lg p-2 w-64"
                />
                <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2">
                    Search
                </button>
            </div>
        </div>

          {/* Doctor Information */}
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

          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold">Displays doctors as a lsit</h4>
                <p>dr1 | asadas | asdad|</p>
                <p>dr2 | asadas | asdad|</p>
                <p>dr3 | asadas | asdad|</p>
            </div>
          </div>



        </div>
      </div>
    );
  };
  
  export default AdminDoctors;
  