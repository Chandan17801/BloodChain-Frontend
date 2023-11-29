import { Inter } from "next/font/google";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Homepage/Hero";
import Mission from "@/components/Homepage/Mission";
import Navigator from "@/components/Homepage/Navigator";
import Testimonials from "@/components/Homepage/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ResponsiveLayout>
      <Header />
      <Hero />
      <Mission />
      <Navigator />
      <Testimonials />
      <Footer />
    </ResponsiveLayout>
  );
}
