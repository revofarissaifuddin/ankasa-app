import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import LogoFlight from "../../images/logo-flight.svg";
import LogoLocation from "../../images/logo-location.svg";
import LogoUsers from "../../images/logo-user.svg";
import BtnBack from "../../images/btn-right.svg";
import LogoStar from "../../images/logo-start.svg";
import LogoSetting from "../../images/logo-setting.svg";
import LogoLogout from "../../images/logo-logout.svg";

export default function MyBooking() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const token = cookies.token;

  /* get data users */
  useEffect(() => {
    getDataUsers();
  }, []);

  const getDataUsers = async () => {
    await axios
      .get(url + `/users/show-users/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setDataUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  /* get data ticket */
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(url + `/bookings/my-booking`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
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

  /* logout */
  const handleRemove = () => {
    removeCookie("token", { path: "/" });
    router.push("/");
  };
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>My Booking</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <Navbar />
          {token ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-4 mr-10 ms-10">
                {/* left menu */}
                <div className="col-span-1 p-2">
                  {dataUser?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="flex flex-col bg-white shadow-md mt-5 p-10 rounded-lg"
                      >
                        <div className="flex justify-center mx-auto w-40 justify-center rounded-full border-4 border-cyan-400">
                          <img
                            className="w-auto rounded-full border-cyan-400"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center mx-auto mt-5">
                          <button class="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                            Select Photo
                          </button>
                        </div>
                        <div className="flex justify-center mx-auto font-bold text-lg mt-5">
                          <h1>{item.fullname}</h1>
                        </div>
                        <div className="flex flex-row justify-center mx-auto text-lg mt-3">
                          <Image src={LogoLocation} alt="logo-location" />
                          <h1 className="ms-2">
                            {item.address}, {item.city}
                          </h1>
                        </div>
                        <div className="flex flex-row justify-between mt-5 font-bold">
                          <h1>Cards</h1>
                          <h1 className="text-cyan-400">+ Add</h1>
                        </div>
                        <div className="flex flex-col text-lg bg-blue-500 p-5 mt-5 rounded-lg">
                          <div className="ms-2 me-2">
                            <h1 className="text-white">4441 1235 5512 5551</h1>
                          </div>
                          <div className="flex flex-row justify-between ms-2 me-2">
                            <h1 className="text-cyan-300">X Card</h1>
                            <h1 className="text-cyan-300">$ 1,440.2</h1>
                          </div>
                        </div>
                        <div className="flex flex-col p-5 font-bold">
                          <div className="flex flex-row justify-between">
                            <Link href={"/profile/my-profile"}>
                              <div className="flex flex-row">
                                <Image src={LogoUsers} alt="logo-user" />
                                <h1 className="text-cyan-400 ms-10">Profile</h1>
                              </div>
                            </Link>
                            <div className="">
                              <Image src={BtnBack} alt="btnback" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between mt-5">
                            <div className="flex flex-row">
                              <Image src={LogoStar} alt="logo-start" />
                              <h1 className="text-black-400 ms-10">
                                My Review
                              </h1>
                            </div>
                            <div className="">
                              <Image src={BtnBack} alt="btnback" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between mt-5">
                            <div className="flex flex-row">
                              <Image src={LogoSetting} alt="logo-start" />
                              <h1 className="text-black-400 ms-10">Setting</h1>
                            </div>
                            <div className="">
                              <Image src={BtnBack} alt="btnback" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between mt-5">
                            <Link href={""} onClick={handleRemove}>
                              <div className="flex flex-row">
                                <Image src={LogoLogout} alt="logo-start" />
                                <h1 className="text-red-400 ms-10">Logout</h1>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                {/* right menu */}
                <div className="col-span-3 p-2">
                  {/* list  */}
                  <div className="flex flex-col bg-white shadow-md rounded-lg mt-5">
                    <div className="p-5">
                      {/* layout merek */}
                      <div className="flex flex-col">
                        <div className="text-blue-400 text-md">
                          <h1>MY BOOKING</h1>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="font-bold text-xl">
                            <h1>My Booking</h1>
                          </div>
                          <div className="w-auto ms-10 mt-2">
                            <h1 className="text-lg text-blue-400 font-bold">
                              Order History
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {data?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="flex flex-col bg-white rounded-lg shadow-md mt-5"
                      >
                        <div className="p-5 flex flex-col border-b-4 border-neutral-200">
                          <div className="flex flex-col">
                            <h1>Monday, 20 July 20-12:33</h1>
                          </div>
                          <div className="flex flex-row mt-5">
                            <div className="w-10">
                              <h1 className="font-bold">{item.origin_code}</h1>
                            </div>
                            <div className="w-10 ms-3">
                              <Image
                                className="w-auto"
                                src={LogoFlight}
                                alt="logo-flight"
                              />
                            </div>
                            <div className="w-10 ms-3">
                              <h1 className="font-bold">
                                {item.destination_code}
                              </h1>
                            </div>
                          </div>
                          <div className="flex flex-col mt-3">
                            <h1 className="text-neutral-500">
                              {item.airline_name}, {item.gate} - {item.terminal}
                            </h1>
                          </div>
                        </div>
                        {item.is_paid == 0 ? (
                          <>
                            <div className="p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                              <div className="flex flex-row">
                                <div className="text-lg text-neutral-500 w-32">
                                  <h1>Status</h1>
                                </div>
                                <div className="mx-auto w-64">
                                  <Link href={`/payment/${item.id}`}>
                                    <button className="rounded-lg p-2 text-xl drop-shadow-xl bg-orange-400 text-white">
                                      Waiting for payment
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="" />
                              <div className="mx-auto w-full mt-2">
                                <h1 className="text-lg text-blue-400 font-bold text-right">
                                  View Details
                                </h1>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                              <div className="flex flex-row">
                                <div className="text-lg text-neutral-500 w-32">
                                  <h1>Status</h1>
                                </div>
                                <div className="mx-auto w-64">
                                  <Link href={`/ticket/${item.id}`}>
                                    <button className="rounded-lg p-2 text-xl drop-shadow-xl bg-green-400 text-white">
                                      Eticket issued
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="" />
                              <div className="mx-auto w-full mt-2">
                                <h1 className="text-lg text-blue-400 font-bold text-right">
                                  View Details
                                </h1>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* footer */}
          <div className="w-full bg-white">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
