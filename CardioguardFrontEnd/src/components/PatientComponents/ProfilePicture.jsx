const ProfilePicture = () => {
    const exampleImagePath = '/path/to/example-image.jpg'; // Example image path, replace with the actual path

    return (
        <div className="w-full h-64 bg-gray-200 rounded-lg flex flex-col items-center justify-center">
            {/* Profile Image */}
            <img
                src={exampleImagePath}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-md"
            />

            {/* Update Button */}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Update Picture
            </button>
        </div>
    );
};

export default ProfilePicture;

