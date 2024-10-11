import { saveUserToFirestore } from "@/database/firebase/service";
import {  useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import NavBar from "@/elements/NavBar";

function LandingPage() {
  const { isLoaded, user } = useUser();

  useEffect(() => {
    const handleUserSave = async () => {
      if (isLoaded && user) {
        await saveUserToFirestore(user); // Wait for the save operation to complete
      }
    };

    handleUserSave();
  }, [isLoaded, user]);

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
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
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
                  src="/landing/hero.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section class="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
          <div class="max-w-md pr-20 lg:pt-28">
            <img
              src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png"
              alt="AI-driven hiring process illustration"
            />
          </div>
          <div class="">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
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
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                />
              </svg>
            </div>
            <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              What we offer
            </h2>
            <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2">
              <div>
                <p class="mb-6 border-l-4 border-blue-600 pl-4 text-2xl leading-10">
                  AI Resume Builder
                </p>
                <p class="text-lg text-gray-800">
                  ElevateHire's AI analyzes your experience and crafts a resume
                  that stands out, optimizing for keywords and tailoring to
                  specific industries. No more generic templates—just impactful,
                  personalized resumes.
                </p>
              </div>

              <div>
                <p class="mb-6 border-l-4 border-blue-600 pl-4 text-2xl leading-10">
                  Mock Interviews with AI
                </p>
                <p class="text-lg text-gray-800">
                  Simulate real interview scenarios with our AI-powered mock
                  interviews. Practice answering industry-specific questions and
                  get instant feedback to refine your responses and improve
                  confidence.
                </p>
              </div>

              <div>
                <p class="mb-6 border-l-4 border-blue-600 pl-4 text-2xl leading-10">
                  AI-Generated Cover Letters
                </p>
                <p class="text-lg text-gray-800">
                  Craft the perfect cover letter with ease. Our AI generates
                  personalized letters that align with your resume and target
                  job descriptions, ensuring you make the right first
                  impression.
                </p>
              </div>

              <div>
                <p class="mb-6 border-l-4 border-blue-600 pl-4 text-2xl leading-10">
                  Skills Gap Analysis
                </p>
                <p class="text-lg text-gray-800">
                  Identify skill gaps in your resume and receive actionable
                  recommendations on courses or certifications to boost your
                  career prospects. ElevateHire helps you stay competitive in a
                  dynamic job market.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  <button class="rounded-full border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
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
                      Career Transformations
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
                      Successful Job Placements
                    </span>
                  </div>
                </div>

                <div class="px-6 py-10">
                  <div class="flex items-center">
                    <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span class="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                      <span class="relative">75+</span>
                    </h3>
                    <span class="ml-3 text-base font-medium capitalize">
                      Successful Career Pivots
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
        <section class="py-6 text-blue-900 sm:py-16">
          <div class="mx-auto max-w-lg lg:max-w-screen-xl px-4 sm:px-6">
            <div class="flex flex-col lg:flex-row">
              <div class="relative mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
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
                          "ElevateHire completely transformed the way I prepare
                          for job interviews!"
                        </p>
                      </blockquote>
                    </div>

                    <div class="mt-10 flex items-center">
                      <img
                        class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src="/landing/user4.avif"
                        alt=""
                      />
                      <div class="ml-4 text-white">
                        <p class="text-base font-bold">John Mitchell</p>
                        <p class="text-blue-90 mt-0.5 text-sm">
                          Software Engineer, TechNova
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
                        "The AI-powered resume builder helped me create a resume
                        that landed me my dream job!"
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/landing/user1.avif"
                      alt=""
                    />
                    <div class="ml-4">
                      <p class="text-base font-bold">Sarah Thompson</p>
                      <p class="mt-0.5 text-sm">HR Manager, NexaCorp</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col bg-white">
                  <div class="">
                    <blockquote class="">
                      <p class="text-lg leading-relaxed">
                        "ElevateHire's AI mock interviews gave me the confidence
                        I needed for real interviews. A must-have!"
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/landing/user2.avif"
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
                        "From cover letters to personalized interview prep,
                        ElevateHire has been an invaluable tool for my career!"
                      </p>
                    </blockquote>
                  </div>

                  <div class="mt-4 flex items-center">
                    <img
                      class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      src="/landing/user3.avif"
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

        {/* Footer  */}
        <footer class="bg-gray-50">
          <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
            <div class="max-w-sm">
              <div class="mb-6 flex h-12 items-center space-x-2">
                <span class="text-2xl font-bold">
                  Elevate <span class="text-blue-600">Hire</span>.
                </span>
              </div>
              <div class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                ad a officia ea expedita!
              </div>
            </div>
            <div class="">
              <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
              <div class="text-gray-500">
                35 Remida Heights, <br />
                45 Street, <br />
                South Caroline, US
              </div>
            </div>
            <div class="">
              <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
              <nav aria-label="Footer Navigation" class="text-gray-500">
                <ul class="space-y-3">
                  <li>
                    <a class="hover:text-blue-600 hover:underline" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a class="hover:text-blue-600 hover:underline" href="#">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a class="hover:text-blue-600 hover:underline" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a class="hover:text-blue-600 hover:underline" href="#">
                      Support Hub
                    </a>
                  </li>
                  <li>
                    <a class="hover:text-blue-600 hover:underline" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="">
              <div class="mt-4 mb-2 font-medium xl:mb-4">
                Subscribe to our Newsletter
              </div>
              <div class="flex flex-col">
                <div class="mb-4">
                  <input
                    type="email"
                    class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Enter your email"
                  />
                  <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-100">
            <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
              <div class="">© 2022 ElevateHire | All Rights Reserved</div>
              <div class="">
                <a class="" href="#">
                  Privacy Policy
                </a>
                <span>|</span>
                <a class="" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
