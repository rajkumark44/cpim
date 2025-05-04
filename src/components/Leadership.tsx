
import { Button } from "@/components/ui/button";

const LeaderCard = ({ name, position, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <div className="mb-4 rounded-full overflow-hidden border-4 border-cpim-red w-32 h-32">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-cpim-red font-medium text-sm mb-3">{position}</p>
        <Button 
          variant="outline"
          size="sm" 
          className="border-cpim-red text-cpim-red hover:bg-cpim-red hover:text-white"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

const Leadership = () => {
  const leaders = [
    {
      name: "Sitaram Yechury",
      position: "General Secretary",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Pinarayi Vijayan",
      position: "Politburo Member",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Brinda Karat",
      position: "Politburo Member",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Prakash Karat",
      position: "Former General Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <section id="leadership" className="py-16 bg-cpim-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpim-red mb-4">Party Leadership</h2>
          <div className="w-24 h-1 bg-cpim-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our party is guided by experienced leaders committed to the principles of Marxism-Leninism
            and dedicated to fighting for the rights of the working class and all oppressed people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <LeaderCard 
              key={index}
              name={leader.name}
              position={leader.position}
              image={leader.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-cpim-red hover:bg-cpim-darkred">
            View All Party Leaders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
