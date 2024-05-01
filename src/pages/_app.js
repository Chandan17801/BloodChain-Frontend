import { Montserrat, Merriweather_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import CustomNavBar from "@/components/Header/CustomNavbar";
import Head from "next/head";
import Script from "next/script";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5100");

const merri = Merriweather_Sans({
  weight: "500",
  subsets: ["latin"],
});

const mont = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      socket.on("test", (msg) => {
        console.log("Hello", msg);
      })
    );

    socket.on("disconnect", () => {
      console.log(socket.id);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <Fragment>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      ></Script>
      <style jsx global>
        {`
          .merri {
            font-family: ${merri.style.fontFamily};
          }
          .mont {
            font-family: ${mont.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <CustomNavBar />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
