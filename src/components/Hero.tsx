
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-cpim-red text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cpim-darkred to-cpim-red opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580130774865-ccb57ff37ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Communist Party of India (Marxist)
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Fighting for the rights of workers, farmers, and all marginalized communities. 
            Join us in the struggle for equality, justice, and a socialist future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-cpim-red hover:bg-gray-200">
              <a href="#join" className="px-6 py-2">Join the Party</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-cpim-darkred">
              <a href="#about" className="px-6 py-2">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
