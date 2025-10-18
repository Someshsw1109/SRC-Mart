const Track = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-10 md:py-14">
        {/* Top */}
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold mb-5">Our Services</h1>
        </div>
        {/* main */}
        <div className="flex flex-wrap -m-4 text-center">
          {/* Service 1 */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-purple-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <h2 className="title-font font-medium text-lg text-gray-900">
                Fast Delivery
              </h2>
              <p className="leading-relaxed">
                Get your school supplies delivered to your doorstep in no time.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-purple-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <h2 className="title-font font-medium text-lg text-gray-900">
                Quality Products
              </h2>
              <p className="leading-relaxed">
                We offer a wide range of high-quality school supplies.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
              <svg
                className="text-purple-600 w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v-.75A.75.75 0 015.25 4.5h.75M7.5 4.5v.75A.75.75 0 016.75 6h-.75m0 0v-.75A.75.75 0 016.75 4.5h.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75m-6 12v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75m0 0h.75a.75.75 0 00.75-.75v-.75m0 0v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75m2.25-4.5v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75M12 18.75v-.75a.75.75 0 01.75-.75h.75m0 0v.75a.75.75 0 01-.75.75h-.75m-3-6v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75m0 0h.75a.75.75 0 00.75-.75v-.75m0 0v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75M15 12v-.75a.75.75 0 01.75-.75h.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75m-3-6v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75m0 0h.75a.75.75 0 00.75-.75v-.75m0 0v.75a.75.75 0 00.75.75h.75m0 0v-.75a.75.75 0 00-.75-.75h-.75"
                />
              </svg>
              <h2 className="title-font font-medium text-lg text-gray-900">
                Customer Support
              </h2>
              <p className="leading-relaxed">
                Our team is available 24/7 to help you with any queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
