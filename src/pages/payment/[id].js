import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LogoPaypal from "../../images/logo-paypal.svg";
import LogoMastercard from "../../images/logo-mastercard-logo.svg";
import LogoStripe from "../../images/logo-stripe.svg";
import LogoVisa from "../../images/logo-visa.svg";
import { SyncOutlined } from "@mui/icons-material"
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function BookingPayment() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const router = useRouter();
  const { id } = router.query;
  const token = cookies.token;
  const [loading, setLoading] = useState(false);
  const formData = {
    id: parseInt(id),
    is_paid: 1,
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.put(
        url+`/bookings/is_paid/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("PAYMENT SUCCESS");
      router.push("/profile/my-booking");
      setLoading(false);
    } catch (error) {
      console.log("PAYMENT FAILD");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto">
      <Head>
        <title>Detail Selected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-full flex flex-col w-full bg-white">
        {/* navbar */}
        <Navbar />
        <div className="w-full mx-auto" style={{ backgroundColor: "#2395FF" }}>
          <div className="container mx-auto bg-white shadow-2xl mt-20 mb-20 ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-20">
              {/* left menu */}
              <div className="col-span-1">
                <div className="">
                  <h1>Payment Menthod</h1>
                </div>
                <div className="ms-3 mt-5">
                  <div className="flex flex-row justify-between">
                    <div className="">
                      <h1>Paypal</h1>
                    </div>
                    <div className="">
                      <Image
                        className="w-auto"
                        src={LogoPaypal}
                        alt="logo-paypal"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-5">
                    <div className="">
                      <h1>Credit Card</h1>
                    </div>
                    <div className="flex flex-row">
                      <Image
                        className="w-auto"
                        src={LogoVisa}
                        alt="logo-visa"
                      />
                      <Image
                        className="w-auto"
                        src={LogoStripe}
                        alt="logo-stripe"
                      />
                      <Image
                        className="w-auto"
                        src={LogoMastercard}
                        alt="logo-mastercard"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="mb-1">Card Number</label>
                    <input
                      type="text"
                      className="w-auto h-10 p-5 border-2 border-500 bg-white"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex flex-row grid grid-cols-2 mt-5">
                    <div className="flex flex-col me-2">
                      <label className="mb-1">Expiry Date</label>
                      <input
                        type="text"
                        className="w-auto h-10 p-5 border-2 border-500 bg-white"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex flex-col ms-2">
                      <label className="mb-1">CVC/CVV</label>
                      <input
                        type="text"
                        className="w-auto h-10 p-5 border-2 border-500 bg-white"
                        placeholder="000"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-5">
                    <h1>icon kunci</h1>
                    <h1>Your transaction is scured with ssl sertificate</h1>
                  </div>
                </div>
              </div>
              {/* right menu */}
              <div className="col-span-1">
                <div className="">
                  <h1>Summary</h1>
                </div>
                <div className="ms-3 mt-5">
                  <div className="flex flex-row justify-between">
                    <div className="">
                      <select
                        id="countries"
                        className="bg-white-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 bg-white p-2.5"
                      >
                        <option selected value="">
                          Pro(Biled Monthly)
                        </option>
                        <option value="">Pro(Biled Weekly)</option>
                      </select>
                      <p className="ms-3 text-sm text-blue-400 -mt-2 border-b-2 border-blue-200">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <p className="text-2xl">$9.99</p>
                      <p className="text-sm mt-2 ms-2">/Month</p>
                    </div>
                  </div>
                  <div className="flex flex-col ms-3 mt-5">
                    <div className="flex flex-row justify-between">
                      <p>Refferal Bonouses</p>
                      <p>-$2.00</p>
                    </div>
                    <div className="flex flex-row justify-between mt-1">
                      <p>Vat</p>
                      <p>-20%</p>
                    </div>
                  </div>
                  <div className="flex flex-col ms-3 mt-5">
                    <div className="flex flex-row justify-between">
                      <p>Today you pay(US Dollars)</p>
                      <p>$0</p>
                    </div>
                    <div className="flex flex-col mt-1">
                      <p>After 30 days $9.59</p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5">
                    <Link
                      href={"/profile/my-booking"}
                      className="flex flex-col mt-5"
                    >
                      <button
                        onClick={handlePayment}
                        className="rounded-lg shadow-lg w-auto p-2 text-xl drop-shadow-xl bg-blue-500 text-white text-sm"
                      >
                        {loading ? (
                          <SyncOutlined spin />
                        ) : (
                          " Try it free for 30 Days"
                        )}
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link className="underline text-blue-400 " href={""}>
                      Have a promo code?
                    </Link>
                  </div>
                </div>
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
  );
}
