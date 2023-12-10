import Footer from "@/components/Footer/Footer";
import Hospital from "@/components/Forms/Hospital";
import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";

function hospital() {
  return (
    <ResponsiveLayout>
      <Header />
      <Hospital />
      <Footer />
    </ResponsiveLayout>
  );
}

export default hospital;
