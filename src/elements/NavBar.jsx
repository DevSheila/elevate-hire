import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

function NavBar() {
  const { user, isSignedIn } = useUser();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <header className="relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
        <a
          href="#"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 w-8">
            <img src="/logo.svg" alt="" />
          </span>
          <span class="text-2xl font-bold">
            Elevate <span class="text-blue-600">Hire</span>.
          </span>
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          for="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">

            <Link to={"/resumebuilder"}>
              <li
                className={`hover:text-blue-600  transition-all md:mr-12 cursor-pointer   ${
                  path == "/resumebuilder" && "text-blue-600 font-bold"
                }`}
              >
                Resume Builder
              </li>
            </Link>

            <Link to={"/mockinterview"}>
              <li
                className={`hover:text-blue-600  transition-all md:mr-12 cursor-pointer   ${
                  path == "/mockinterview" && "text-blue-600 font-bold"
                }`}
              >
                Mock Interview
              </li>
            </Link>

            <Link to={"/templates"}>
              <li
                className={`hover:text-blue-600  transition-all md:mr-12 cursor-pointer   ${
                  path == "/templates" && "text-blue-600 font-bold"
                }`}
              >
                Templates
              </li>
            </Link>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className=" sm:flex">
                  {isSignedIn ? (
                    <div>
                      <UserButton />
                    </div>
                  ) : (
                    <Link to={"/sign-in"}>
                      <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-800 hover:text-white">
                        Get Started
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </ul>
        </nav>


      </header>
    </>
  );
}

export default NavBar;
