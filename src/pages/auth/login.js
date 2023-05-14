import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import imgAuth from "../../images/logo-auth.png";
import logoAnkasa from "../../images/logo-ankasa-auth.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncOutlined } from "@mui/icons-material";

export default function Login() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = () => toast("Loading......................");
  const formData = {
    email: email,
    password: password,
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(process.env.NEXT_PUBLIC_BASE_API + "/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success("Login Success", { position: toast.POSITION.TOP_RIGHT });
        setLoading(false);
        setCookie("token", res.data.data.token, {
          path: "/",
        });
        setCookie("email", res.data.data.email, {
          path: "/",
        });
        setCookie("id", res.data.data.id, {
          path: "/",
        });
        router.push("/main/home");
      })
      .catch((err) => {
        console.log(err);
        console.log("LOGIN FAILD");
        toast.error("LOGIN FILED", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Login</title>
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
              <form onSubmit={handleLogin}>
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
                  <h1 style={{ color: "black" }}>Login</h1>
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
                  <label className="block mt-2">
                    <input
                      type="password"
                      className="w-auto xl:w-96 h-10 p-5 border-b-2 border-500 bg-white"
                      placeholder="Password"
                      style={{ borderColor: "#D2C2FF" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col mt-5">
                  {/* <Link className="underline" href={"/main/home"}> */}
                  <button
                    className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl animate-pulse"
                    style={{ backgroundColor: "#2395FF", color: "white" }}
                    disabled={!email || !password || loading}
                    onClick={notify}
                  >
                    {loading ? <SyncOutlined spin /> : " Sign In"}
                  </button>
                  {/* </Link> */}
                </div>
              </form>
              <div className="flex flex-col mt-10">
                <h5 style={{ color: "black" }}>
                  Did you forgot your password?
                </h5>
              </div>
              <div className="flex flex-col mt-2" style={{ color: "blue" }}>
                <Link className="underline" href={"/auth/forgotPassword"}>
                  Tap here for reset
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
