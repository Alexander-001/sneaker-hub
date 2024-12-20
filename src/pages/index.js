import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="app-container bg-gray-100 h-full">
      <Header />
      <Carousel />
      <div className="mt-20 md:mt-28 pb-20">
        <div className="flex flex-col w-full justify-center items-center"></div>
      </div>
      <Footer />
    </div>
  );
}
