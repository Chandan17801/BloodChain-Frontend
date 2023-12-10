import Footer from "@/components/Footer/Footer";
import BloodBank from "@/components/Forms/BloodBank";
import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

function bloodbank() {
  return (
    <ResponsiveLayout>
      <Header />
      <BloodBank />
      <Footer />
    </ResponsiveLayout>
  );
}

export default bloodbank;
