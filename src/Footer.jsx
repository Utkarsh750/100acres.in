const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white py-14 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Text in the center */}
          <p className="text-lg font-semibold">
            Get in Touch with us: 9811750130
          </p>

          {/* Input fields and Submit button in the same row */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Message"
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <button className="px-7 py-1 bg-red-500 text-white rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-white py-4 text-center">
        <p className="text-sm">
          © 2024 | All Rights Reserved with Signature Global
        </p>
      </div>
    </>
  );
};

export default Footer;
