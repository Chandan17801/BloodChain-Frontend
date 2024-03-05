import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Homepage/Hero";
import Mission from "@/components/Homepage/Mission";
import Navigator from "@/components/Homepage/Navigator";
import Testimonials from "@/components/Homepage/Testimonials";
import AboutUs from "@/components/Homepage/AboutUs";
import Creative from "@/components/Homepage/Creative";
import WhyDonation from "@/components/Homepage/WhyDonation";
import HomepageRealTimeData from "@/components/Homepage/HomepageRealTimeData";
import HowDonationWorks from "@/components/Homepage/HowDonationWorks";
import { Fragment } from "react";
import Head from "next/head";
import CustomNavBar from "@/components/Header/CustomNavbar";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>BloodChain: Empowering Lifesavers with BlockChain</title>
      </Head>
      <ResponsiveLayout>
        {/* <Header className="absolute top-0 left-0" /> */}
        <Hero />
        <HomepageRealTimeData />
        <Mission />
        <Navigator />
        <AboutUs />
        <Creative />
        <WhyDonation />
        <HowDonationWorks />
        <Testimonials />
        <Footer />
      </ResponsiveLayout>
    </Fragment>
  );
}
