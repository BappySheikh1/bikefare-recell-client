import React from 'react';

const Feature = () => {
    return (
      <>
        <div className="px-4 mb-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative uppercase font-mono">
                  The Featured
                </span>
              </span>
            </h2>
          </div>

          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
            {/* featured 1 */}
            <div
              className="max-w-md sm:mx-auto sm:text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">Rare Gems</h6>
              <p className="mb-3 text-sm font-semibold text-justify text-gray-900">
                Explore bikes that are truly one-of-a-kind. These rare finds are
                sought after by collectors and offer a glimpse into the rich
                history of cycling.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>

            {/* featured 2 */}
            <div
              className="max-w-md sm:mx-auto sm:text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Iconic Models
              </h6>
              <p className="mb-3 text-sm font-semibold text-justify text-gray-900">
                Get acquainted with the iconic bikes that have left a lasting
                mark on the cycling world. From legendary road racers to iconic
                cruisers, these models are celebrated for their design and
                performance.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>

            {/* featured 3 */}
            <div
              className="max-w-md sm:mx-auto sm:text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-3 text-xl  font-bold leading-5">
                Restored Classics
              </h6>
              <p className="mb-3 text-sm font-semibold text-justify text-gray-900">
                Witness the transformation of vintage bikes through meticulous
                restoration. These bikes have been lovingly brought back to
                life, combining the charm of yesteryear with modern
                functionality.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>

            {/* featured 4 */}
            <div
              className="max-w-md sm:mx-auto sm:text-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Limited Editions
              </h6>
              <p className="mb-3 text-sm font-semibold text-justify text-gray-900">
                Experience the exclusivity of limited-edition vintage bikes.
                These rare editions showcase unique features, commemorative
                designs, and limited production runs, making them highly coveted
                by collectors.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default Feature;