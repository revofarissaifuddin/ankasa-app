import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import logoAnkasa from "../../images/logo-ankasa-section.svg";
import LogoMaskapai from "../../images/garuda-indonesia-logo.svg";
import LogoWhite from "../../images/logo-white.svg";
import LogoSort from "../../images/logo-sort.svg";
import LogoFlight from "../../images/logo-flight.svg";
import LogoKoper from "../../images/logo-koper.svg";
import LogoFood from "../../images/logo-food.svg";
import LogoWifi from "../../images/logo-wifi.svg";
import LogoFrom from "../../images/logo-from.svg";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const url = process.env.NEXT_PUBLIC_BASE_API;
/* animasi */
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

function valuetext(value) {
  return `${value}`;
}

/* export async function getStaticProps() {
  const resp = await fetch(url + `/tickets/show-all/`);

  return {
    props: {
      data: await resp.json(),
    },
  };
} */
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([0, 300]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* get data */

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(url + `/tickets/show-all/`)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <Navbar />
          <div
            className="w-full h-48 rounded-br-3xl rounded-bl-3xl"
            style={{ backgroundColor: "#2395FF" }}
          >
            <div className="">
              <Image
                className="w-auto mt-5"
                src={logoAnkasa}
                alt="logo-ankasa-section"
              />
            </div>
            <div className="container mx-auto -mt-24">
              <div className="flex flex-row">
                <div className="">
                  <Image className="w-auto" src={LogoWhite} alt="logo-white" />
                </div>
                <div className="flex flex-col ms-5 w-80">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-white">From</h1>
                    <h1 className="text-white">To</h1>
                  </div>
                  <div className="flex flex-row justify-between mx-auto w-80">
                    <div className="">
                      <h1 className="font-bold text-white">Medan (IDN)</h1>
                    </div>
                    <div className="">
                      <Image
                        className="w-auto"
                        src={LogoFrom}
                        alt="logo-from"
                      />
                    </div>
                    <div className="">
                      <h1 className="font-bold text-white">Tokyo (JPN)</h1>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 mx-auto me-0">
                  <h1 className="font-bold text-white">Change Search</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-4 mr-10 ms-10">
            {/* left menu */}
            <div className="col-span-1 p-2 js-show-on-scroll">
              <div className="text-xl flex flex-row justify-between">
                <h1 className="font-bold">Filter</h1>
                <h1 className="text-sky-500 font-bold">Reset</h1>
              </div>
              <div className="flex flex-col bg-white border-stone-500 rounded-lg mt-5 p-5 shadow-md">
                {/*  */}
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="font-bold">Transit</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <fieldset className="">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Direct
                          </label>
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            /* value="Direct" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Transit
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="Transit" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Transit 2+
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="Transit 2+" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </fieldset>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className="font-bold">Facilities</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <fieldset className="">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Luggage
                          </label>
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            /* value="Luggage" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            In-Flight Meal
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="In-Flight Meal" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Wi-fi
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="Wi-fi" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </fieldset>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography className="font-bold">
                        Departure Time
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <fieldset className="">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            00:00 - 06:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="00:00 - 06:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            06:00 - 12:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="06:00 - 12:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            12:00 - 18:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="12:00 - 18:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            18:00 - 24:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="18:00 - 24:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </fieldset>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <Typography className="font-bold">
                        Time Arrived
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <fieldset className="">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            00:00 - 06:00
                          </label>
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            /* value="00:00 - 06:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            06:00 - 12:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="06:00 - 12:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            12:00 - 18:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="12:00 - 18:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            18:00 - 24:00
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="18:00 - 24:00" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </fieldset>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <Typography className="font-bold">Airlines</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <fieldset className="">
                        <legend className="sr-only">Checkbox variants</legend>
                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Garuda Indonesia
                          </label>
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            /*  value="Garuda Indonesia" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Air Asia
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /*  value="Air Asia" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Lion Air
                          </label>
                          <input
                            id="checkbox-2"
                            type="checkbox"
                            /* value="Lion Air" */
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </fieldset>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6a-content"
                      id="panel6a-header"
                    >
                      <Typography className="font-bold">
                        Ticket Price
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col">
                        <div className="text-sm flex flex-row justify-between text-gray-500 ">
                          <h1 className="font-bold">Lowest</h1>
                          <h1 className="font-bold">Highest</h1>
                        </div>
                        <div className="">
                          <Box>
                            <Slider
                              getAriaLabel={() => "range"}
                              value={value}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                            />
                          </Box>
                        </div>
                        <div className="text-sm flex flex-row justify-between text-sky-500 ">
                          <h1 className="font-bold">$ {value}</h1>
                          <h1 className="font-bold">$ {value}</h1>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            {/* right menu */}
            <div className="col-span-3 p-2 js-show-on-scroll">
              <div className="text-xl flex flex-row justify-between">
                <div className="flex flex-row">
                  <h1 className="font-bold">Select Tiket</h1>
                  <h1 className="text-sm ms-2 mt-1">(6 flight found)</h1>
                </div>
                <div className="flex flex-row">
                  <div className="font-bold">
                    <h1 className="">Sort by</h1>
                  </div>
                  <div className="ms-2 mt-2">
                    <Image className="w-auto" src={LogoSort} alt="logo-sort" />
                  </div>
                </div>
              </div>
              {loading ? (
                <div className="min-h-screen flex justify-center items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    <div className="loader bg-white rounded-full flex space-x-3">
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>

                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                    </div>
                    <div className="text-blue-500 mx-auto justify-center items-center">
                      <Link href={"/auth/login"}>Login Users Now</Link>
                    </div>
                    <div className="loader bg-white rounded-full flex space-x-3">
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>

                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-2 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col bg-white rounded-lg mt-5 shadow-md js-show-on-scroll"
                    >
                      <div className="p-5">
                        {/* layout merek */}
                        <div className="flex flex-col">
                          <div className="flex flex-row">
                            <div className="w-20">
                              <img
                                className="w-auto"
                                src={item.airlines_logo}
                                alt=""
                                style={{ width: "100", height: "57" }}
                              />
                            </div>
                            <div className="w-auto ms-10 mt-2">
                              <h1 className="">{item.airlines_name}</h1>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-items-start w-full mt-2">
                            <div className="flex flex-row mt-5 mx-auto md:justify-center">
                              <div className="flex-auto mx-auto w-20">
                                <h1 className="font-bold">
                                  {item.origin_code}
                                </h1>
                                <h1 className="text-sm">{item.takeoff}</h1>
                              </div>
                              <div className="flex-none mx-auto w-20">
                                <Image
                                  className="w-auto"
                                  src={LogoFlight}
                                  alt="logo-flight"
                                />
                              </div>
                              <div className="flex-auto mx-auto w-20">
                                <h1 className="font-bold">
                                  {item.destination_code}
                                </h1>
                                <h1 className="text-sm">{item.landing}</h1>
                              </div>
                            </div>

                            <div className="flex flex-col mx-auto mt-5">
                              <div className="flex-auto mx-auto justify-center">
                                <h1 className="font-sm">{item.duration}</h1>
                              </div>
                              <div className="flex-auto mx-auto justify-center ">
                                <h1 className="font-bold text-sm text-gray-500">
                                  (1 transit)
                                </h1>
                              </div>
                            </div>

                            <div className="flex flex-row mx-auto mt-5">
                              <div className="flex-auto mx-auto justify-center">
                                <Image
                                  className="w-auto"
                                  src={LogoKoper}
                                  alt="logo-koper"
                                />
                              </div>
                              <div className="flex-auto mx-auto justify-center ms-3">
                                <Image
                                  className="w-auto"
                                  src={LogoFood}
                                  alt="logo-food"
                                />
                              </div>
                              <div className="flex-auto mx-auto justify-center ms-3">
                                <Image
                                  className="w-auto"
                                  src={LogoWifi}
                                  alt="logo-wifi"
                                />
                              </div>
                            </div>

                            <div className="flex flex-row mx-auto mt-5">
                              <div className="flex-auto mx-auto justify-center me-2">
                                <h1 className="font-bold text-blue-400">
                                  ${item.price}
                                </h1>
                              </div>
                              <div className="flex-auto mx-auto justify-center ">
                                <h1 className="font-bold text-gray-500">
                                  /pcs
                                </h1>
                              </div>
                            </div>

                            <div className="flex flex-col mx-auto w-full mt-5">
                              <Link
                                href={`/booking/${item.id}`}
                                className="flex flex-col mx-auto w-full"
                              >
                                <button
                                  className="rounded-lg p-2 text-xl drop-shadow-xl"
                                  style={{
                                    backgroundColor: "#2395FF",
                                    color: "white",
                                  }}
                                >
                                  Select
                                </button>
                              </Link>
                            </div>
                          </div>

                          <div className="flex flex-col">
                            <select
                              id="countries"
                              className="bg-white-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 bg-white p-2.5 text-blue-400 font-bold"
                            >
                              <option /*  value="" */>View Details</option>
                              <option /*  value="" */> View Details 2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* list */}
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
