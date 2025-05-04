
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

const EventCard = ({ title, date, time, location, description }) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all hover:shadow-md">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-cpim-gray">{title}</h3>
          <div className="bg-cpim-red text-white text-xs font-semibold py-1 px-3 rounded-full">
            Upcoming
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <CalendarIcon size={16} className="mr-2 text-cpim-red" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon size={16} className="mr-2 text-cpim-red" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon size={16} className="mr-2 text-cpim-red" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex-1 border-cpim-red text-cpim-red hover:bg-cpim-red hover:text-white"
          >
            Details
          </Button>
          <Button className="flex-1 bg-cpim-red hover:bg-cpim-darkred">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: "National Executive Committee Meeting",
      date: "May 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Party Headquarters, New Delhi",
      description: "Meeting of the National Executive Committee to discuss current political situation and plan upcoming activities."
    },
    {
      title: "Workers' Rally Against Privatization",
      date: "May 25, 2023",
      time: "12:00 PM",
      location: "Jantar Mantar, New Delhi",
      description: "Mass rally against the government's privatization policies that are threatening public sector jobs."
    },
    {
      title: "Farmers' Rights Conference",
      date: "June 5, 2023",
      time: "11:00 AM - 5:00 PM",
      location: "Town Hall, Mumbai",
      description: "Conference to discuss issues facing farmers and strategies to protect agricultural rights."
    },
    {
      title: "State Committee Elections",
      date: "June 15, 2023",
      time: "9:00 AM - 6:00 PM",
      location: "Various State Offices",
      description: "Elections for state committee members across different states. Party members are requested to participate."
    }
  ];

  return (
    <section id="events" className="py-16 bg-cpim-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpim-red mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-cpim-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Join us at our upcoming events, rallies, meetings, and protests as we continue our struggle for a more just and equitable society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-cpim-red hover:bg-cpim-darkred">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
