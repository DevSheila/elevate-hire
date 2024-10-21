import React from "react";
import { SignIn as ClerkSignIn, useUser } from "@clerk/clerk-react";
import SpinLoader from "@/elements/Loaders/SpinLoader";

function SignIn() {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return <SpinLoader />;
  }

  return (
    <>
      {/* <ClerkSignIn /> */}

      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div class="hidden lg:relative lg:block lg:p-12">
              <a class="block text-white" href="#">
                <span class="sr-only">Home</span>
              </a>

              <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Elevate Hire.
              </h2>

              <p class="mt-4 leading-relaxed text-white/90">
                Get Your Dream Job with Elevate Hire By employing the best
                practices and innovative tech, we boost your chances of landing
                a better job.
              </p>
            </div>
          </section>

          <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
              <div class="relative -mt-16 block lg:hidden">
                <a
                  class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span class="sr-only">Home</span>

                  <svg
                    id="logo-39"
                    width="50"
                    height="40"
                    viewBox="0 0 50 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
                      fill="#A5B4FC"
                      class="ccompli2"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
                      fill="#4F46E5"
                      class="ccustom"
                    ></path>
                    <path
                      d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
                      fill="#A5B4FC"
                      class="ccompli2"
                      fill-opacity="0.3"
                    ></path>
                  </svg>
                </a>

                <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Elevate Hire.
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                  Get Your Dream Job with Elevate Hire By employing the best
                  practices and innovative tech, we boost your chances of
                  landing a better job.
                </p>
              </div>

              <ClerkSignIn />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default SignIn;
