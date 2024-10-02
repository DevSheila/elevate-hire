import React, { useState } from "react";
import {
  BsEnvelopeFill,
  BsLink45Deg,
  BsTwitter,
  BsFillPhoneFill,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col items-start mb-8"
      >
        {/* Change justify-between to flex-col and items-start */}
        <h1 className="text-3xl font-bold">Sheila Sharon.</h1>
        <h2 className="text-lg font-semibold ">Full Stack Engineer</h2>
        <p className="text-gray-600">Short pitch about yourself</p>
      </div>
      <div onClick={handleProfileClick} className="flex justify-between mb-8 p-10 bg-gray-800 text-white">
        <ul className="list-none flex flex-col gap-4">
          <li className="flex items-center">
            <BsEnvelopeFill className="mr-2" />
            <a
              href="mailto:sheilaSharon10@gmail.com"
              className="text-white hover:underline"
            >
              sheilaSharon10@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <BsLink45Deg className="mr-2" />
            <a
              href="https://devsheila.github.io/sheilaSite/"
              className="text-white hover:underline"
            >
              devsheila.github.io/sheilaSite/
            </a>
          </li>
          <li className="flex items-center">
            <BsTwitter className="mr-2" />
            <a
              href="https://twitter.com/SheilaWambui0"
              className="text-white hover:underline"
            >
              twitter.com/SheilaWambui0
            </a>
          </li>
        </ul>
        <ul className="list-none flex flex-col gap-4">
          <li className="flex items-center">
            <BsFillPhoneFill className="mr-2" />
            <a href="tel:+254710617776" className="text-white hover:underline">
              +254710617776
            </a>
          </li>
          <li className="flex items-center">
            <BsLinkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/SheilaSharonWambui"
              className="text-white hover:underline"
            >
              linkedin.com/in/SheilaSharonWambui
            </a>
          </li>
          <li className="flex items-center">
            <BsGithub className="mr-2" />
            <a
              href="https://github.com/DevSheila"
              className="text-white hover:underline"
            >
              github.com/DevSheila
            </a>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Edit Profile</h2>
              <button onClick={handleModalClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between mb-8 p-10 bg-gray-800 text-white">
              <ul className="list-none flex flex-col gap-4">
                <li className="flex items-center">
                  <BsEnvelopeFill className="mr-2" />
                  <a
                    href="mailto:sheilaSharon10@gmail.com"
                    className="text-white hover:underline"
                  >
                    sheilaSharon10@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <BsLink45Deg className="mr-2" />
                  <a
                    href="https://devsheila.github.io/sheilaSite/"
                    className="text-white hover:underline"
                  >
                    devsheila.github.io/sheilaSite/
                  </a>
                </li>
                <li className="flex items-center">
                  <BsTwitter className="mr-2" />
                  <a
                    href="https://twitter.com/SheilaWambui0"
                    className="text-white hover:underline"
                  >
                    twitter.com/SheilaWambui0
                  </a>
                </li>
              </ul>
              <ul className="list-none flex flex-col gap-4">
                <li className="flex items-center">
                  <BsFillPhoneFill className="mr-2" />
                  <a
                    href="tel:+254710617776"
                    className="text-white hover:underline"
                  >
                    +254710617776
                  </a>
                </li>
                <li className="flex items-center">
                  <BsLinkedin className="mr-2" />
                  <a
                    href="https://www.linkedin.com/in/SheilaSharonWambui"
                    className="text-white hover:underline"
                  >
                    linkedin.com/in/SheilaSharonWambui
                  </a>
                </li>
                <li className="flex items-center">
                  <BsGithub className="mr-2" />
                  <a
                    href="https://github.com/DevSheila"
                    className="text-white hover:underline"
                  >
                    github.com/DevSheila
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSection;
