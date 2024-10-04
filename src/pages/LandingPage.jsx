import React from "react";
import NavBar from "@/elements/NavBar";

function LandingPage() {
  return (
    <>
      <div className="relative  text-gray-900">
        <NavBar />

        {/* HERO */}
        <div className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-y-12 lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-x-8">
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="max-w-md text-3xl font-bold leading-tight sm:text-4xl sm:leading-snug">
                    Get Your Dream Job <br className="block sm:hidden" />
                    with <br className="hidden sm:block" />
                    <span className="rounded-xl bg-blue-600 px-2 pb-2 text-white">
                      Elevate Hire
                    </span>
                  </h1>
                  
                  <p className="mt-4 text-base sm:text-lg text-gray-600 sm:mt-8">
                    By employing the best practices and innovative tech, Elevate
                    Hire boosts your chances of landing a better job.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 lg:justify-start">
                    <button className="relative mt-4 w-full sm:w-auto rounded-full border-2 border-blue-600 bg-blue-600 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                      <div className="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-blue-600 md:inline-flex">
                        <svg
                          viewBox="0 0 82 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      Try for free
                    </button>
                    <button className="mt-4 w-full sm:w-auto flex items-center rounded-full border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 transition hover:translate-y-1 hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch the demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative bg-transparent">
                <img
                  className="relative w-full h-auto"
                  src="/hero.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div class="mx-auto flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row">
          <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
            <div class="mb-5 text-4xl font-bold text-blue-600">
              Analytics App With a an Edge. Innovation.
            </div>
            <div class="mb-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              modi, magni repellat doloremque autem tempore facere adipisci nam
              ratione vitae quibusdam earum optio laudantium ipsum aliquid harum
              nulla.
            </div>
            <div class="">
              <p class="font-bold text-blue-600">JAMES EDWARD</p>
              <p class="text-gray-500">CEO, Analytica</p>
            </div>
          </div>
          <div class="mr-10 mb-6 lg:mb-0">
            <img
              src="/images/Rs9HCLrp_0y7g8Zp8h8p9.png"
              class="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg"
            />
            <div class="p-4">
              <p class="mb-1 font-medium uppercase text-blue-600">Who we are</p>
              <h5 class="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
                temporibus!
              </h5>
              <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="">
            <img
              src="/images/aaFKzowNcgxqSdxMw11na.png"
              class="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg"
            />
            <div class="p-4">
              <p class="mb-1 font-medium uppercase text-blue-600">
                Our Practices
              </p>
              <h5 class="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
                temporibus!
              </h5>
              <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* STATS */}
        <section class="py-6 text-blue-900 sm:py-16">
          <div class="mx-auto max-w-lg lg:max-w-screen-xl px-4 sm:px-6 ">
            <div class="relative flex flex-col lg:flex-row">
              <div class="pointer-events-none absolute -bottom-10 left-12 hidden h-24 w-24 rounded-full opacity-60 lg:block">
                <svg
                  id="patternId"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="b"
                      patternUnits="userSpaceOnUse"
                      width="40"
                      height="40"
                      patternTransform="scale(0.5) rotate(0)"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                      />
                      <path
                        d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                        stroke-width="1"
                        stroke="none"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="800%"
                    height="800%"
                    transform="translate(0,0)"
                    fill="url(#b)"
                  />
                </svg>
              </div>

              <div class="my-10 text-center sm:mt-20 lg:text-left">
                <p class="text-lg font-medium text-blue-600"></p>
                <h2 class="text-3xl font-bold text-blue-900 sm:text-4xl">
                  This Year's Growth
                </h2>
                <div class="mt-8">
                  <button class="rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>

              <div class="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:mr-0">
                <div class="px-6 py-10">
                  <div class="flex items-center">
                    <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                      <span class="relative">328</span>
                    </h3>
                    <span class="ml-3 text-base font-medium capitalize">
                      Great Achievements
                    </span>
                  </div>
                </div>

                <div class="px-6 py-10">
                  <div class="flex items-center">
                    <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                      <span class="relative">16</span>
                    </h3>
                    <span class="ml-3 text-base font-medium capitalize">
                      Graduations sponsored
                    </span>
                  </div>
                </div>

                <div class="px-6 py-10">
                  <div class="flex items-center">
                    <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                      <span class="relative">41+</span>
                    </h3>
                    <span class="ml-3 text-base font-medium capitalize">
                      jobs created
                    </span>
                  </div>
                </div>

                <div class="px-6 py-10">
                  <div class="flex items-center">
                    <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                      <span class="relative">99%</span>
                    </h3>
                    <span class="ml-3 text-base font-medium capitalize">
                      Happy Customers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        <section class="py-6 text-blue-900 sm:py-16 ">
          <div class="mx-auto max-w-lg lg:max-w-screen-xl px-4 sm:px-6 ">
            <div class="flex flex-col lg:flex-row">
              <div class="relative  mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
                <img
                  class="absolute top-0 h-full w-full object-cover opacity-10"
                  src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                  alt=""
                />
                <div class="relative mt-auto w-full">
                  <div class="flex flex-col p-6 lg:px-7 lg:py-8">
                    <div class="">
                      <blockquote class="">
                        <p class="text-3xl font-bold text-white sm:text-5xl">
                          "I cannot overstate how much this has helped our
                          startup"
                        </p>
                      </blockquote>
                    </div>

                    <div class="mt-10 flex items-center">
                      <img
                        class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                        alt=""
                      />
                      <div class="ml-4 text-white">
                        <p class="text-base font-bold">Jacob Jones</p>
                        <p class="text-blue-90 mt-0.5 text-sm">
                          Youtube Personality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
                <div class="flex flex-col bg-white">
                  <div class="">
                    <blockquote class="">
                      <p class="text-lg leading-relaxed">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolores facere repellendus, velit quis
                        fugiat."
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                      alt=""
                    />
                    <div class="ml-4">
                      <p class="text-base font-bold">James Khawalski</p>
                      <p class="mt-0.5 text-sm">CEO, Mavoline</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col bg-white">
                  <div class="">
                    <blockquote class="">
                      <p class="text-lg leading-relaxed">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolores facere repellendus, velit quis
                        fugiat."
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/images/Ju6-1negUEjTnBKw_ZP4r.png"
                      alt=""
                    />
                    <div class="ml-4">
                      <p class="text-base font-bold">Jacob Jones</p>
                      <p class="text-blue-90 mt-0.5 text-sm">
                        Youtube Personality
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col bg-white">
                  <div class="">
                    <blockquote class="">
                      <p class="text-lg leading-relaxed">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolores facere repellendus, velit quis
                        fugiat."
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/images/fR71TFZIDTv2jhvKsOMhC.png"
                      alt=""
                    />
                    <div class="ml-4">
                      <p class="text-base font-bold">Jenny Wilson</p>
                      <p class="text-blue-90 mt-0.5 text-sm">
                        Esports Commentator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
