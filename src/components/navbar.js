import logoNav from "../images/logo-inauth.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

/* dropdown menu */
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Navbar() {
  const [token, setToken] = useState(null);
  const [cookies, removeCookie] = useCookies(["user"]);
  const router = useRouter();

  useEffect(() => {
    if (cookies.token) {
      setToken(jwtDecode(cookies.token));
    }
  }, [cookies]);
  
  const handleRemove = () => {
    // removeCookie("token", { path: "/" });
    removeCookie("token", { path: "/" });
    router.push("/");
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      {token ? (
        <>
          <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 mr-10 ms-10">
            {/* img logo navbar */}
            <Link href={"/main/home"}>
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block h-8 w-auto lg:hidden"
                  src={logoNav}
                  alt="logo-inauth"
                />
                <Image
                  className="hidden h-8 w-auto lg:block"
                  src={logoNav}
                  alt="logo-inauth"
                />
              </div>
            </Link>
            {/* search and button menu */}
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Where you want to go?"
                />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-24 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <div className="flex md:order-2">
                    <div
                      type="button"
                      data-collapse-toggle="navbar-search"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                      className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 mr-1"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </div>
                    <div className="relative hidden md:block w-80">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Where you want to go?"
                      />
                    </div>
                    <div
                      data-collapse-toggle="navbar-search"
                      type="button"
                      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href={"/main/home"}>
                    <div
                      href={"/main/home"}
                      className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Find Ticket
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/profile/my-booking"}>
                    <div className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      My Booking
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            {/*============================= notif, message and profile =================================*/}
            {/* search */}
            <div className="flex md:order-2">
              <div
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <div className="relative">
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button
                          className="h-8 w-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                          variant="contained"
                          {...bindTrigger(popupState)}
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Button>
                        <Menu className="mt-3" {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            <Link href={"/profile/my-profile"}>Profile</Link>
                          </MenuItem>
                          <div onClick={handleRemove}>
                            <MenuItem onClick={popupState.close}>
                              <div onClick={handleRemove}>Logout</div>
                            </MenuItem>
                          </div>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
              </div>
              {/* icon notif, message, profile */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div
                    type="button"
                    className="rounded-full p-1 mr-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.84674576 17.8602756c.19747034.0956834.41909523.1493366.65325152.1493366h15.00000272c.234157 0 .4557825-.0536535.6532533-.1493375l-5.9086286-5.5610622-1.9267711 1.5867526c-.1846279.1520465-.4510793.1520465-.6357072 0l-1.92677107-1.5867526zm-.70365326-.7104533c.0046301-.0047126.00937185-.0093545.01422515-.0139223l5.81988317-5.4775371-5.79505445-4.77239778c-.01263654-.01040657-.02463114-.0213036-.03597893-.03264079-.09369981.19580951-.14617016.41511504-.14617016.64667567v9.0096122c0 .2290153.05132317.4460434.14309522.6402101zm17.7138132-.0000019c.0917715-.1941662.1430943-.4111936.1430943-.6402082v-9.0096122c0-.23155991-.05247-.45086478-.1461693-.64667383-.0113472.01133652-.0233412.02223294-.0359771.03263895l-5.7950544 4.77239778 5.8198831 5.4775371c.0048527.0045672.0095939.0092085.0142234.0139204zm-.7124776-11.00472344c-.1952395-.09302717-.413753-.14509696-.6444281-.14509696h-15.00000272c-.23067439 0-.44918731.05206949-.64442642.14509614l8.14442914 6.70717696zm-15.64443082-1.14509696h15.00000272c1.3807119 0 2.5 1.11928813 2.5 2.5v9.0096122c0 1.3807119-1.1192881 2.5-2.5 2.5h-15.00000272c-1.38071187 0-2.5-1.1192881-2.5-2.5v-9.0096122c0-1.38071187 1.11928813-2.5 2.5-2.5z"
                      />
                    </svg>
                  </div>
                  <div
                    type="button"
                    className="rounded-full p-1 mr-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Button
                            className="h-8 w-8 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                            variant="contained"
                            {...bindTrigger(popupState)}
                          >
                            <img
                              className="h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Button>
                          <Menu className="mt-3" {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                              <Link href={"/profile/my-profile"}>Profile</Link>
                            </MenuItem>
                            <div onClick={handleRemove}>
                              <MenuItem onClick={popupState.close}>
                                <div onClick={handleRemove}>Logout</div>
                              </MenuItem>
                            </div>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </div>
                </div>
              </div>
              {/* icon mobile button */}
              <div
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Where you want to go?"
                />
              </div>
              <div className="">
                <a
                  href={"/main/home"}
                  className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                  aria-current="page"
                >
                  Find Ticket
                </a>
              </div>
              <div className="">
                <a
                  href={"/profile/my-booking"}
                  className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Booking
                </a>
              </div>
              <div className="ms-2">
                <div
                  type="button"
                  className="rounded-full p-1 mr-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.84674576 17.8602756c.19747034.0956834.41909523.1493366.65325152.1493366h15.00000272c.234157 0 .4557825-.0536535.6532533-.1493375l-5.9086286-5.5610622-1.9267711 1.5867526c-.1846279.1520465-.4510793.1520465-.6357072 0l-1.92677107-1.5867526zm-.70365326-.7104533c.0046301-.0047126.00937185-.0093545.01422515-.0139223l5.81988317-5.4775371-5.79505445-4.77239778c-.01263654-.01040657-.02463114-.0213036-.03597893-.03264079-.09369981.19580951-.14617016.41511504-.14617016.64667567v9.0096122c0 .2290153.05132317.4460434.14309522.6402101zm17.7138132-.0000019c.0917715-.1941662.1430943-.4111936.1430943-.6402082v-9.0096122c0-.23155991-.05247-.45086478-.1461693-.64667383-.0113472.01133652-.0233412.02223294-.0359771.03263895l-5.7950544 4.77239778 5.8198831 5.4775371c.0048527.0045672.0095939.0092085.0142234.0139204zm-.7124776-11.00472344c-.1952395-.09302717-.413753-.14509696-.6444281-.14509696h-15.00000272c-.23067439 0-.44918731.05206949-.64442642.14509614l8.14442914 6.70717696zm-15.64443082-1.14509696h15.00000272c1.3807119 0 2.5 1.11928813 2.5 2.5v9.0096122c0 1.3807119-1.1192881 2.5-2.5 2.5h-15.00000272c-1.38071187 0-2.5-1.1192881-2.5-2.5v-9.0096122c0-1.38071187 1.11928813-2.5 2.5-2.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ms-2">
                <div
                  type="button"
                  className="rounded-full p-1 mr-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto  flex flex-wrap items-center justify-between mx-auto p-4">
            {/* img logo navbar */}
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={logoNav}
                    alt="logo-inauth"
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={logoNav}
                    alt="logo-inauth"
                  />
                </div>
              </Link>
            </div>
            {/* search and button menu */}
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Where you want to go?"
                />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-24 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <div className="flex md:order-2">
                    <button
                      type="button"
                      data-collapse-toggle="navbar-search"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                      className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 mr-1"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block w-80">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Where you want to go?"
                      />
                    </div>
                    <button
                      data-collapse-toggle="navbar-search"
                      type="button"
                      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Find Ticket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    My Booking
                  </a>
                </li>
              </ul>
            </div>
            {/* notif, message and profile */}
            <div className="flex md:order-2">
              <div className="mx-auto w-98">
                <Link className="underline" href={"/auth/register"}>
                  <button className="rounded-lg p-2 text-xl drop-shadow-xl bg-blue-500 text-white">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Where you want to go?"
                />
              </div>
              <div className="">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black text-xl rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Find Ticket
                </a>
              </div>

              <div className="">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Booking
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
