import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero.jsx";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App() {
  return (
    <>

    <Head>
    <title>gracexnn's Space</title>
    </Head>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </>
  );
}
