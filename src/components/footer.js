import logoNav from "../images/logo-inauth.png";
import appleStore from "../images/apple-app-store.svg";
import playStore from "../images/play-app.svg";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
export default function Footer() {
  return (
    <div className="container mx-auto bg-white">
      <footer className="bg-black-100 text-center text-black-600 dark:bg-black-600 dark:text-black-200 lg:text-left">
        {/* isi footer */}
        <div className="mx-6 py-10 text-center md:text-left mt-10">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Image
                  className="hidden h-8 w-auto md:block"
                  src={logoNav}
                  alt="logo-inauth"
                />
              </h6>
              <p>
                Find your Flight and explore the world with us. We will take
                care of the rest.
              </p>
            </div>
            {/* Features */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
                Features
              </h6>
              <p className="mb-4 flex justify-center">
                <a href="#!" className="text-black-600 dark:text-black-200">
                  Find Ticket
                </a>
              </p>
              <p className="mb-4 flex justify-center">
                <a href="#!" className="text-black-600 dark:text-black-200">
                  My Booking
                </a>
              </p>
              <p className="mb-4 flex justify-center">
                <a href="#!" className="text-black-600 dark:text-black-200">
                  Chat
                </a>
              </p>
              <p className="flex justify-center">
                <a href="#!" className="text-black-600 dark:text-black-200">
                  Notification
                </a>
              </p>
            </div>
            {/* DOWNLOAD ANGKASA APP */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
                Download Angkasa app
              </h6>
              {/* App Store */}
              <div className="flex justify-center mb-4">
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <Image
                    className="w-auto"
                    src={appleStore}
                    alt="apple-app-store"
                  />
                </a>
              </div>
              {/* Play Store */}
              <div className="flex justify-center">
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <Image className="w-auto" src={playStore} alt="play-app" />
                </a>
              </div>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
                Follow Us
              </h6>
              <div className="flex justify-center">
                {/* facebook */}
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* twitter */}
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* instagram */}
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* youtube */}
                <a
                  href="#!"
                  className="mr-6 text-black-600 dark:text-black-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    id="youtube"
                  >
                    <polygon
                      fill="none"
                      points="222.1 313.9 322.3 256 222.1 198.1"
                    ></polygon>
                    <path
                      fill="none"
                      d="M443.2,98.2c-55.9-3.7-146.9-7.1-187.2-7.1s-131.3,3.5-187.2,7.1c-24,1.6-42.8,21.6-42.8,45.7v224.2
                          c0,24,18.8,44.1,42.8,45.7c55.9,3.7,146.9,7.1,187.2,7.1s131.3-3.5,187.2-7.1c24-1.6,42.8-21.6,42.8-45.7V143.9
                          C486,119.9,467.2,99.8,443.2,98.2z M347.3,264.7l-130.2,75.2c-1.5,0.9-3.3,1.3-5,1.3s-3.5-0.4-5-1.3c-3.1-1.8-5-5.1-5-8.7V180.8
                          c0-3.6,1.9-6.9,5-8.7s6.9-1.8,10,0l130.2,75.2c3.1,1.8,5,5.1,5,8.7C352.3,259.6,350.4,262.9,347.3,264.7z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M444.5,78.3c-56.3-3.7-147.9-7.2-188.5-7.2s-132.3,3.5-188.5,7.2C33,80.5,6,109.4,6,143.9v224.2
                        c0,34.5,27,63.4,61.5,65.6c56.3,3.7,147.9,7.2,188.5,7.2s132.3-3.5,188.5-7.2c34.5-2.3,61.5-31.1,61.5-65.6V143.9
                        C506,109.4,479,80.5,444.5,78.3z M486,368.1c0,24-18.8,44.1-42.8,45.7c-55.9,3.7-146.9,7.1-187.2,7.1s-131.3-3.5-187.2-7.1
                        c-24-1.6-42.8-21.6-42.8-45.7V143.9c0-24,18.8-44.1,42.8-45.7c55.9-3.7,146.9-7.1,187.2-7.1s131.3,3.5,187.2,7.1
                        c24,1.6,42.8,21.6,42.8,45.7V368.1z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M347.3,247.3l-130.2-75.2c-3.1-1.8-6.9-1.8-10,0s-5,5.1-5,8.7v150.4c0,3.6,1.9,6.9,5,8.7
                        c1.5,0.9,3.3,1.3,5,1.3s3.5-0.4,5-1.3l130.2-75.2c3.1-1.8,5-5.1,5-8.7C352.3,252.4,350.4,249.1,347.3,247.3z M222.1,313.9V198.1
                        L322.3,256L222.1,313.9z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* creator @ */}
        <div className="flex flex-row justify-between bg-white-200 p-6 text-left dark:bg-black-700">
          <div className="">
            <span>© Ankasa. All Rights Reserved.</span>
          </div>
          <div className="flex flex-row">
            <span className="me-2">
              <SlLocationPin />
            </span>
            <span>Jakarta Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
