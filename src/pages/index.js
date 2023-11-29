import { Inter } from "next/font/google";
import ResponsiveLayout from "@/components/layout.jsx/ResponsiveLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ResponsiveLayout>
      <div>Homepage</div>;
    </ResponsiveLayout>
  );
}
