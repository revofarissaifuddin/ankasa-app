import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LogoLocation from "../../images/logo-location.svg";
import LogoUsers from "../../images/logo-user.svg";
import BtnBack from "../../images/btn-right.svg";
import LogoStar from "../../images/logo-start.svg";
import LogoSetting from "../../images/logo-setting.svg";
import LogoLogout from "../../images/logo-logout.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncOutlined } from "@mui/icons-material";

export default function MyProfile() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const token = cookies.token;

  /* get data */
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  const formData = {
    email: email,
    fullname: fullname,
    phone: phone,
    city: city,
    address: address,
    postcode: postcode,
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = cookies.token;
      const result = await axios.put(url + "/users/update-users/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const updateProfile = result.data.data;
      toast.success("Update Profile Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("UPDATE RESPOSNE", updateProfile);
      setLoading(false);
      // router.push("/profile/my-profile");
    } catch (error) {
      console.log("UPDATE FAILD");
      toast.error("Update Profile Faild", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      toast(error.response.data);
      setLoading(false);
    }
  };
  /* logout */
  const handleRemove = () => {
    // removeCookie("token", { path: "/" });
    removeCookie("token", { path: "/" });
    router.push("/");
  };
  return (
    <div className="mx-auto  h-screen bg-white">
      <div className="flex flex-col h-screen">
        <Head>
          <title>My Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="max-w-full flex flex-col w-full bg-white"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* navbar */}
          <Navbar />
          {/* notif */}
          <ToastContainer />
          {token ? (
            <>
              {" "}
              {data.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-4 mr-10 ms-10"
                  >
                    {/* left menu */}
                    <div className="col-span-1 p-2">
                      <div className="flex flex-col bg-white mt-5 p-10 rounded-lg shadow-md">
                        <div className="flex justify-center mx-auto w-40 justify-center rounded-full border-4 border-cyan-400">
                          <img
                            className="w-auto rounded-full border-cyan-400"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center mx-auto mt-5">
                          <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
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
                        <div className="flex flex-col text-lg bg-blue-500 p-5 mt-5 rounded-lg shadow-xl">
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
                    </div>
                    {/* right menu */}
                    <div className="col-span-3 p-2">
                      {/* list  */}
                      <div className="flex flex-col bg-white rounded-lg shadow-md mt-5">
                        <form onSubmit={handleUpdateProfile}>
                          <div className="p-5">
                            {/* layout merek */}
                            <div className="flex flex-col">
                              <div className="text-blue-400 text-sm">
                                <h1>PROFILE</h1>
                              </div>
                              <div className="">
                                <h1 className="text-lg font-bold">Profile</h1>
                              </div>

                              <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4"
                              >
                                <div className="mt-5">
                                  <h1 className="font-bold">Contact</h1>
                                  <div className="flex flex-col p-5">
                                    <h1 className="ms-5">Email</h1>
                                    <input
                                      type="email"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.email}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={email ? email : item.email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      required
                                    />
                                    <h1 className="mt-5 ms-5">Phone Number</h1>
                                    <input
                                      type="text"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.phone}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={phone ? phone : item.phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="mt-5">
                                  <h1 className="font-bold">Biodata</h1>
                                  <div className="flex flex-col p-5">
                                    <h1 className="ms-5">Fullname</h1>
                                    <input
                                      type="text"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.fullname}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={
                                        fullname ? fullname : item.fullname
                                      }
                                      onChange={(e) =>
                                        setFullname(e.target.value)
                                      }
                                      required
                                    />
                                    <h1 className="mt-5 ms-5">City</h1>
                                    <input
                                      type="text"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.city}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={city ? city : item.city}
                                      onChange={(e) => setCity(e.target.value)}
                                      required
                                    />
                                    <h1 className="mt-5 ms-5">Address</h1>
                                    <input
                                      type="text"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.address}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={address ? address : item.address}
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                      required
                                    />
                                    <h1 className="mt-5 ms-5">Post Code</h1>
                                    <input
                                      type="text"
                                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                                      placeholder={item.postcode}
                                      style={{ borderColor: "#D2C2FF" }}
                                      value={
                                        postcode ? postcode : item.postcode
                                      }
                                      onChange={(e) =>
                                        setPostcode(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                  <div className="flex justify-end mx-auto me-5">
                                    <button
                                      className="w-32 font-semibold hover:text-white py-2 px-4 border rounded"
                                      style={{
                                        backgroundColor: "#2395FF",
                                        color: "white",
                                      }}
                                    >
                                      {loading ? (
                                        <SyncOutlined spin />
                                      ) : (
                                        " Save"
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              ))}
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
