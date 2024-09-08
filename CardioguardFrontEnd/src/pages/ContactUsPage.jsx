import NavBar from "../components/NavBar";

export default function ContactUsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    console.log({ name, email, message });
  };

  return (
    <div>
      <NavBar />
      <div className="contact-us-body">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border border-white bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-white bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 border border-white bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-4">
                Contact Information
              </h3>
              <p className="text-white mb-2">
                Email:{" "}
                <a
                  href="mailto:info@yourwebsite.com"
                  className="text-blue-400 hover:underline"
                >
                  info@yourwebsite.com
                </a>
              </p>
              <p className="text-white mb-2">Phone: (123) 456-7890</p>
              <p className="text-white">
                Address: 123 Main Street, Anytown, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
