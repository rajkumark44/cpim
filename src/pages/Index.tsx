
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import News from "@/components/News";
import Events from "@/components/Events";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Leadership />
        <News />
        <Events />
        <Join />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
