const ContactPage2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Right Side - Contact Form */}
        <div className="bg-blue-950 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4 flex">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Left Side - Text */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">
            Signature Deluxe DXP - Sector 37D Gurgaon
          </h1>
          <p className="text-gray-700 mb-4">
            Signature Deluxe DXP Sector 37D Gurgaon is an upcoming luxurious
            residential project developed by the most reputed real estate
            developer in India, Signature Global. The project offers extensive
            amenities with marvellous location benefits. Their prime location
            bang on Dwarka Expressway is in Gurgaon, India, which is rapidly
            growing in the upper stages of real estate. The Dwarka Expressway is
            a major arterial road that connects Gurgaon with Delhi. Signature
            Deluxe DXP is spread over 17.5 acres of land. Signature New Launch
            Highrise Sector 37D residential projects are very lavish and provide
            you with a great opportunity to live a delightful lifestyle. The
            project aims to provide massive amenities with a spacious,
            comfortable interior as well as a high-quality immoderate area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage2;
