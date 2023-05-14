import Head from "next/head";
import NavbarLanding from "@/components/navbarLanding";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import LogoLebihdari from "../images/logo-lebihdari.svg";
import LogoFrom from "../images/logo-from.svg";
import LogoBtnRight from "../images/logo-btn-right.svg";
import LogoDestination from "../images/logo-destinationblue.svg";
import LogoOneway from "../images/logo-oneway-white.svg";
import LogoRoadTrip from "../images/logo-roadtrip.svg";
import ImgTop10 from "../images/img-top10.svg";
import LogoNext from "../images/logo-btn-next-landing.svg";
import LogoBack from "../images/logo-btn-back-landing.svg";
import LogoLanding from "../images/logo-bg-landing-topten.svg";
import BGLanding from "../images/bg-landingnew.svg";
import ImgJapan from "../images/img-japan.svg";
import LogoBgBlue from "../images/bg-landing-biru.svg";
const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};
if (typeof window !== "undefined") {
  const observer = new IntersectionObserver(callback);
  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
}
export default function Home() {
  return (
    <div className="mx-auto w-full  h-screen bg-white">
      <div className="flex flex-col h-screen w-full">
        <Head>
          <title>Landing Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <NavbarLanding />
          {/* boddy */}
          <div className="w-full mx-auto" style={{ backgroundColor: "white" }}>
            {/* filter menu */}
            {/* where you whant to go */}
            <div className="container mt-10 js-show-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-8 p-4 mr-10 ms-10">
                {/* left */}
                <div className="container col-span-4 p-2">
                  <div className="flex flex-col mt-10">
                    <p className="text-5xl font-extrabold text-black ">
                      Find your <span className="text-blue-500">Flight</span>
                    </p>
                    <p className="text-gray-400 mt-5">
                      And explore the world with us
                    </p>
                  </div>
                  <div className="-ms-40 mt-48">
                    <Image
                      className="rounded-2xl mt-16 hidden xl:block"
                      src={BGLanding}
                      width={800}
                      height={550}
                      alt="japan"
                    />
                  </div>
                </div>
                {/* right */}
                <div className="col-span-2 p-2">
                  <div className="flex-row">
                    <div className="xl:-me-96 xl:ms-96 hidden lg:block lg:ms-48 md:hidden">
                      <Image
                        className="rounded-2xl hidden lg:block"
                        src={BGLanding}
                        alt="japan"
                      />
                    </div>
                    <div className="flex flex-col xl:-mt-80 lg:mt-20">
                      <div className="flex flex-col bg-white rounded-lg shadow-md js-show-on-scroll">
                        <div className="flex flex-col p-10">
                          <p>Hey,</p>
                          <p className="font-bold">Where you want to go?</p>
                          <div className="flex flex-row justify-between font-bold text-blue-500">
                            <p>Recently Searched</p>
                            <p>
                              <Image
                                className="w-auto"
                                src={LogoLebihdari}
                                alt="logo-lebihdari"
                              />
                            </p>
                          </div>
                          <div className="flex flex-col bg-white-100 rounded-lg border-2 border-gray-200 mt-5 p-5">
                            <div className="flex flex-row justify-between text-sm text-gray-500">
                              <p>From</p>
                              <p>To</p>
                            </div>
                            <div className="flex flex-row justify-between text-black font-bold mt-1">
                              <p>Indonesia</p>
                              <Image
                                className="w-auto text-black w-98"
                                src={LogoDestination}
                                alt="LogoDestination"
                              />
                              <p>Japan</p>
                            </div>
                            <div className="flex flex-row justify-between text-sm mt-1">
                              <p>Indonesia</p>
                              <p>Japan</p>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between bg-white rounded-lg border-gray-400 text-lg mt-5">
                            <button className="flex flex-row justify-center text-white bg-blue-500 w-2/4 rounded-lg p-2">
                              <Image
                                className="mt-1"
                                src={LogoOneway}
                                alt="logo-oneway-white"
                              />
                              <span className="ms-3">One way</span>
                            </button>
                            <button className="flex flex-row justify-center text-gray-500 bg-gray-00 w-2/4 rounded-lg p-2 ms-5">
                              <Image
                                className="mt-1 me-3"
                                src={LogoRoadTrip}
                                alt="logo-roadtrip"
                              />

                              <span>Round trip</span>
                            </button>
                          </div>
                          <div className="mt-5">
                            <p>Departure</p>
                          </div>
                          <div className="flex flex-row text-black rounded-lg border-2 border-gray-200 mt-2">
                            <select
                              id="countries"
                              className="bg-white-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-white p-3"
                            >
                              <option selected value="Mr.">
                                Monday, 20 July 2020
                              </option>
                              <option value="Mrs.">Monday, 20 July 2021</option>
                              <option value="Ms.">Monday, 20 July 2022</option>
                            </select>
                          </div>
                          <div className="mt-5">
                            <p>How many person?</p>
                          </div>
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row w-full text-black rounded-lg border-2 border-gray-200 mt-2 me-5">
                              <select
                                id="countries"
                                className="bg-white-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-white p-3"
                              >
                                <option selected value="Mr.">
                                  2 Child
                                </option>
                                <option value="Mrs.">3 Child</option>
                                <option value="Ms.">4 Child</option>
                              </select>
                            </div>
                            <div className="flex flex-row w-full text-black rounded-lg border-2 border-gray-200 mt-2 ms-5">
                              <select
                                id="countries"
                                className="bg-white-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-white p-3"
                              >
                                <option selected value="Mr.">
                                  2 Adult
                                </option>
                                <option selected value="Mr.">
                                  3 Adult
                                </option>
                                <option selected value="Mr.">
                                  4 Adult
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-5">
                            <p>Which class do you want?</p>
                          </div>
                          <div className="mt-2">
                            <fieldset className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                              <div className="">
                                <input
                                  id="draft"
                                  className="peer/draft"
                                  type="radio"
                                  name="status"
                                  checked
                                />
                                <label
                                  // for="draft"
                                  className="peer-checked/draft:text-sky-500 font-bold ms-5"
                                >
                                  Economy
                                </label>
                              </div>
                              <div className="">
                                <input
                                  id="published"
                                  className="peer/published"
                                  type="radio"
                                  name="status"
                                />
                                <label
                                  // for="published"
                                  className="peer-checked/published:text-sky-500 font-bold ms-5"
                                >
                                  Business
                                </label>
                              </div>
                              <div className="">
                                <input
                                  id="published"
                                  className="peer/published"
                                  type="radio"
                                  name="status"
                                />
                                <label
                                  // for="published"
                                  className="peer-checked/published:text-sky-500 font-bold ms-5"
                                >
                                  First Class
                                </label>
                              </div>
                            </fieldset>
                          </div>
                          <div className="mt-5">
                            <button className="flex flex-row justify-between text-white font-bold bg-blue-500 w-full rounded-lg p-3">
                              <Link href={"/main/home"}>
                                <div className="flex flex-row justify-between">
                                  <p className="ms-5 me-32">SEARCH FLIGHT</p>
                                  <Image
                                    className="w-auto p-2 me-5"
                                    src={LogoBtnRight}
                                    alt="logo-from"
                                  />
                                </div>
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto -me-96 ms-80 xl:-mt-72 lg:block lg:w-48 md:hidden">
                      <Image
                        className="rounded-2xl mt-16 hidden lg:block"
                        src={LogoBgBlue}
                        width={300}
                        height={250}
                        alt="japan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TRENDING */}
            <div className="container mx-auto mt-10">
              <div className="flex flex-col js-show-on-scroll">
                <div className="">
                  <span className="text-cyan-500 text-lg font-bold">
                    TRENDING
                  </span>
                </div>
                <div className="flex flex-row justify-between mt-3">
                  <span className="text-xl font-bold">
                    Trending destinations
                  </span>
                  <span className="text-xl text-cyan-500">View all</span>
                </div>
                <div className="mt-5 mb-5">
                  <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap:10 text-black justify-items-center">
                    <div
                      className="flex flex-col h-64 w-48 md:mt-3 justify-end p-4 font-bold text-white rounded-lg shadow-xl"
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundImage: `url(${ImgJapan.src})`,
                      }}
                    >
                      <span>Tokyo,</span>
                      <span className="text-2xl">Japan</span>
                    </div>
                    <div
                      className="flex flex-col h-64 w-48 md:mt-3 justify-end p-4 font-bold text-white rounded-lg shadow-xl"
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundImage: `url(${ImgJapan.src})`,
                      }}
                    >
                      <span>Tokyo,</span>
                      <span className="text-2xl">Japan</span>
                    </div>
                    <div
                      className="flex flex-col h-64 w-48 md:mt-3 justify-end p-4 font-bold text-white rounded-lg shadow-xl"
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundImage: `url(${ImgJapan.src})`,
                      }}
                    >
                      <span>Tokyo,</span>
                      <span className="text-2xl">Japan</span>
                    </div>
                    <div
                      className="flex flex-col h-64 w-48 md:mt-3 justify-end p-4 font-bold text-white rounded-lg shadow-xl"
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundImage: `url(${ImgJapan.src})`,
                      }}
                    >
                      <span>Tokyo,</span>
                      <span className="text-2xl">Japan</span>
                    </div>
                    <div
                      className="flex flex-col h-64 w-48 md:mt-3 justify-end p-4 font-bold text-white rounded-lg shadow-xl"
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundImage: `url(${ImgJapan.src})`,
                      }}
                    >
                      <span>Tokyo,</span>
                      <span className="text-2xl">Japan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TOP 10 */}
            <div
              className="container mx-auto mt-10 p-10 bg-blue-500 rounded-3xl shadow-md bg-left-bottom js-show-on-scroll"
              style={{
                backgroundImage: `url(${LogoLanding.src})`,
                backgroundRepeat: `no-repeat`,
              }}
            >
              <div className="flex flex-col p-20">
                <div className="flex justify-center">
                  <span className="font-bold text-white">TOP 10</span>
                </div>
                <div className="flex text-2xl font-bold text-white justify-center mt-5">
                  <span>Top 10 destinations</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 justify-center mt-10">
                  {/* list top ten */}
                  <div className="flex flex-col p-10">
                    <div className="rounded-full border-4 border-white p-2">
                      <Image
                        className="w-auto rounded-full"
                        src={ImgTop10}
                        width="182.624"
                        height="121.429"
                        alt="img-top10"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-white">PARIS</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-10">
                    <div className="rounded-full border-4 border-white p-2">
                      <Image
                        className="w-auto rounded-full"
                        src={ImgTop10}
                        width="182.624"
                        height="121.429"
                        alt="img-top10"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-white">PARIS</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-10">
                    <div className="rounded-full border-4 border-white p-2">
                      <Image
                        className="w-auto rounded-full"
                        src={ImgTop10}
                        width="182.624"
                        height="121.429"
                        alt="img-top10"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-white">PARIS</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-10">
                    <div className="rounded-full border-4 border-white p-2">
                      <Image
                        className="w-auto rounded-full"
                        src={ImgTop10}
                        width="182.624"
                        height="121.429"
                        alt="img-top10"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-white">PARIS</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-10">
                    <div className="rounded-full border-4 border-white p-2">
                      <Image
                        className="w-auto rounded-full"
                        src={ImgTop10}
                        width="182.624"
                        height="121.429"
                        alt="img-top10"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-white">PARIS</span>
                    </div>
                  </div>
                </div>
                {/* btn pagination */}
                <div className="flex justify-center mx-auto mt-5">
                  <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-3 px-4 border border-cyan-400 hover:border-transparent rounded">
                    <Image
                      className="mt-1"
                      src={LogoBack}
                      alt="logo-btn-back-landing"
                    />
                  </button>
                  <button className="bg-transparent ms-10 hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-3 px-4 border border-cyan-400 hover:border-transparent rounded">
                    <Image
                      className="mt-1"
                      src={LogoNext}
                      alt="logo-btn-next-landing"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="w-full bg-white">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
