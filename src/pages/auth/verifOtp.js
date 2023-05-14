import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import imgAuth from "../../images/logo-auth.png";
import logoAnkasa from "../../images/logo-ankasa-auth.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SyncOutlined } from "@mui/icons-material";

export default function VerifOtp() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  // const notify = () => toast("Loading......................");
  const formData = {
    email: email,
    otp: otp,
  };
  
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.get(url + "/auth/verif-otp", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const payload = result.data.data;
      console.log("VERIF RESPOSNE", payload);
      toast.success("Verif Success", { position: toast.POSITION.TOP_RIGHT });
      router.push("/auth/resetPassword");
      setLoading(false);
    } catch (error) {
      console.log("Verif FAILD");
      toast.error("Verif Faild", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Verifikasi Otp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-white">
        <div className="rounded-2xl shadow-2xl flex w-full h-full">
          <div
            className="xl:w-3/5 justify-center hidden md:block"
            style={{ backgroundColor: "#2395FF" }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <Image src={imgAuth} alt="" style={{ maxWidth: "50%" }} />
            </div>
          </div>
          {/* right */}
          <div
            className="xl:w-2/5 mx-auto md:bg-white"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {/* notif */}
            <ToastContainer />
            <div className="flex flex-col items-center justify-center min-h-screen">
              <form onSubmit={handleOtp}>
                <div className="flex flex-col justify-start text-3xl font-bold mb-2 text-left">
                  <div className="flex justify-start -mt-64">
                    <a
                      href="#!"
                      className="mr-6 text-black-600 dark:text-black-200"
                    >
                      <Image
                        className="w-auto"
                        src={logoAnkasa}
                        alt="logo-ankasa-auth"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-start text-3xl font-bold mb-2 text-left ">
                  <h1 style={{ color: "black" }}>Verifikasi OTP</h1>
                </div>
                <div className="flex flex-col mt-10">
                  <label className="block">
                    <input
                      type="email"
                      className="w-auto xl:w-96 h-10 p-5 border-b-2 border-500 bg-white"
                      placeholder="Email"
                      style={{ borderColor: "#D2C2FF" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      className="w-auto xl:w-96 h-10 p-5 border-b-2 border-500 bg-white"
                      placeholder="OTP"
                      style={{ borderColor: "#D2C2FF" }}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-5">
                  {/* <Link className="underline" href={"/main/home"}> */}
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                    style={{ backgroundColor: "#2395FF", color: "white" }}
                    disabled={!email || !otp || loading}
                    // onClick={notify}
                  >
                    {loading ? <SyncOutlined spin /> : "Send"}
                  </button>
                  {/* </Link> */}
                </div>
              </form>
              <div className="flex flex-col mt-10">
                <h5 style={{ color: "black" }}>
                  You’ll get message soon on your email
                </h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
