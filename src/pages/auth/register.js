import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import imgAuth from "../../images/logo-auth.png";
import logoAnkasa from "../../images/logo-ankasa-auth.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncOutlined } from "@mui/icons-material";

export default function Register() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("Accept terms and condition");
  };
  const formData = {
    email: email,
    name: name,
    password: password,
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post(url + "/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userRegister = result.data.data;
      toast.success("Register Success", { position: toast.POSITION.TOP_RIGHT });
      console.log("REGISTER RESPOSNE",userRegister);
      router.push("/auth/login");
      setLoading(false);
    } catch (error) {
      console.log("REGISTER FAILD");
      toast.error("Your email has been registered, please login", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      toast(error.response.data);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-white">
        <div className="rounded-2xl shadow-2xl flex w-full h-full">
          <div
            className="w-3/5 justify-center hidden md:block"
            style={{ backgroundColor: "#2395FF" }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <Image src={imgAuth} alt="" style={{ maxWidth: "50%" }} />
            </div>
          </div>
          <div
            className="w-2/5 mx-auto md:bg-white"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {/* notif */}
            <ToastContainer />
            <div className="flex flex-col items-center justify-center min-h-screen">
              <form onSubmit={handleRegister}>
                <div className="flex flex-col justify-start text-3xl font-bold mb-2 text-left">
                  <div className="flex justify-start -mt-40">
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
                <div className="flex justify-start text-3xl font-bold mb-2 text-left -mt-20">
                  <h1 style={{ color: "black" }}>Register</h1>
                </div>
                <div className="flex flex-col mt-5">
                  <label className="block">
                    <input
                      type="text"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Fullname"
                      style={{ borderColor: "#D2C2FF" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="block">
                    <input
                      type="email"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Email"
                      style={{ borderColor: "#D2C2FF" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="block">
                    <input
                      type="password"
                      className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white"
                      placeholder="Password"
                      style={{ borderColor: "#D2C2FF" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-10">
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                    style={{ backgroundColor: "#2395FF", color: "white" }}
                    disabled={!name || !email || !password || !agree || loading}
                    onClick={btnHandler}
                  >
                    {loading ? <SyncOutlined spin /> : " Sign Up"}
                  </button>
                </div>
                <div className="flex justify-start mt-2 p-2">
                  <label style={{ color: "black" }}>
                    <input
                      type="checkbox"
                      className="me-3 bg-white"
                      onChange={checkboxHandler}
                    />
                    Accept terms and condition
                  </label>
                </div>
              </form>
              <div className="flex flex-col mt-10 border-2 w-64" />
              <div className="flex flex-col mt-10" style={{ color: "black" }}>
                <h5>Already have an account?</h5>
              </div>
              <div className="flex flex-col mt-5" style={{ color: "blue" }}>
                <Link href={"/auth/login"}>
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl border-2"
                    style={{ borderColor: "#2395FF", color: "black" }}
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
