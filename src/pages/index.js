import { Inter } from "next/font/google";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Homepage/Hero";
import Mission from "@/components/Homepage/Mission";
import Collaborator from "@/components/Homepage/Collaborator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ResponsiveLayout>
      <Header />
      <Hero />
      <Mission />
      <Collaborator />
      <Footer />
    </ResponsiveLayout>
  );
}
