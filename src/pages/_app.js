import {
  Montserrat,
  Merriweather_Sans,
} from "next/font/google";
import "@/styles/globals.css";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import CustomNavBar from "@/components/Header/CustomNavbar";

const merri = Merriweather_Sans({
  weight: "500",
  subsets: ["latin"],
});

const mont = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
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
        <CustomNavBar/>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
