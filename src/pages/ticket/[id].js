import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import LogoMaskapai from "../../images/garuda-indonesia-logo.svg";
import LogoFlight from "../../images/logo-flight.svg";
import Barcode from "react-barcode";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";


export default function Tiket() {
  const url = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [bar, setBar] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const token = cookies.token;
  const { id } = router.query;

  function handleBarcode(e) {
    setBar(e.target.value);
  }
  /* get data ticket booking */
  useEffect(() => {
    getDataTicketBook();
  }, []);

  const getDataTicketBook = async () => {
    await axios
      .get(url + `/bookings/booking/${id}`, {
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

  return (
    <div className="mx-auto">
      <Head>
        <title>Booking Pass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-full flex flex-col w-full bg-white">
        {/* navbar */}
        <Navbar />
        <div className="w-full mx-auto" style={{ backgroundColor: "#2395FF" }}>
          <div className="container mx-auto w-2/3 rounded-lg bg-white mt-20 mb-20 p-40 md:p-10 ">
            <div className="text-2xl flex flex-row justify-between text-black">
              <h1 className="font-bold">Booking Pass</h1>
              <h1 className="text-md">:</h1>
            </div>
            {data?.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex xl:flex-row md:flex-col sm:flex-col"
                >
                  <div className="xl:w-3/4 text-2xl flex flex-col justify-between text-black bg-white-100 p-10 mt-10 rounded-lg border-solid border-2 border-gray-200">
                    {/* departure */}
                    <div className="flex flex-row mt-5">
                      <div className="w-32">
                        <img
                          className="w-auto"
                          src={item.photo}
                          alt=""
                          style={{ width: "100", height: "57" }}
                        />
                      </div>
                      <div className="flex flex-row mt-2 ms-10">
                        <div className="w-10">
                          <h1 className="font-bold">{item.origin_code}</h1>
                        </div>
                        <div className="w-10 ms-10 mt-2">
                          <Image
                            className="w-auto"
                            src={LogoFlight}
                            alt="logo-flight"
                          />
                        </div>
                        <div className="w-10 ms-3">
                          <h1 className="font-bold">{item.destination_code}</h1>
                        </div>
                      </div>
                    </div>
                    {/* code and class */}
                    <div className="flex flex-row mt-5">
                      <div className="flex flex-col">
                        <div className="">
                          <h1 className="text-sm text-gray-400">Code</h1>
                        </div>
                        <div className="">
                          <h1 className="text-sm ">
                            {item.gate}-{item.terminal}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col ms-32">
                        <div className="">
                          <h1 className="text-sm text-gray-400">Class</h1>
                        </div>
                        <div className="">
                          <h1 className="text-sm ">{item.flight_class}</h1>
                        </div>
                      </div>
                    </div>
                    {/* code and class */}
                    <div className="flex flex-row mt-5">
                      <div className="flex flex-col">
                        <div className="">
                          <h1 className="text-sm text-gray-400">Terminal</h1>
                        </div>
                        <div className="">
                          <h1 className="text-sm ">{item.terminal}</h1>
                        </div>
                      </div>
                      <div className="flex flex-col ms-32">
                        <div className="">
                          <h1 className="text-sm text-gray-400">Gate</h1>
                        </div>
                        <div className="">
                          <h1 className="text-sm ">{item.gate}</h1>
                        </div>
                      </div>
                    </div>
                    {/* departure data */}
                    <div className="flex flex-col mt-5">
                      <div className="">
                        <h1 className="text-sm text-gray-400">Departure</h1>
                      </div>
                      <div className="">
                        <h1 className="text-sm ">
                          Monday, 20 July ‘20 - {item.takeoff}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/4 text-2xl justify-center text-black bg-white-100 mt-10 rounded-lg border-solid border-2 border-gray-200">
                    <div className="xl:-rotate-90 xl:mt-48 xl:w-40 justify-center xl:ms-10 md:rotate-0 md:mt-10 md:w-20 md:ms-32 sm:ms-10">
                      <Barcode
                        value={
                          bar
                            ? bar
                            : `${item.id}${item.tickets_id}${item.airline_id} ${item.transit}${item.price}${item.terminal} ${item.gate}${item.is_paid}`
                        }
                        lineColor="black"
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
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
