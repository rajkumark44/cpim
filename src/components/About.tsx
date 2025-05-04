
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpim-red mb-4">About CPIM</h2>
          <div className="w-24 h-1 bg-cpim-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our History</h3>
            <p className="text-gray-700 mb-4">
              Founded in 1964, the Communist Party of India (Marxist) emerged as a political force committed to the principles 
              of Marxism-Leninism and the goal of establishing a socialist society in India. The party was formed following 
              ideological differences within the Communist movement in India.
            </p>
            <p className="text-gray-700 mb-6">
              Over decades, CPIM has been at the forefront of various social movements, fighting for the rights of workers, 
              farmers, and marginalized communities. The party has a strong presence in states like Kerala, West Bengal, 
              and Tripura, where it has formed governments committed to progressive policies.
            </p>
            <Button className="bg-cpim-red hover:bg-cpim-darkred">
              <a href="#" className="px-4 py-2">Read Full History</a>
            </Button>
          </div>
          
          <div>
            <div className="bg-cpim-lightgray p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">Economic justice and elimination of exploitation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">Democratic rights and civil liberties for all citizens</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">Anti-imperialism and national sovereignty</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">Secular governance and communal harmony</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">Social equality and elimination of discrimination</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cpim-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-700">People's democracy as a path to socialism</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
