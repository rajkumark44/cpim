
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const NewsCard = ({ title, date, summary, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="inline-block bg-cpim-red text-white text-xs px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm ml-3">
            <CalendarIcon size={14} className="mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-cpim-red transition-colors duration-300">
          <a href="#">{title}</a>
        </h3>
        <p className="text-gray-600 text-sm mb-4">{summary}</p>
        <Button variant="outline" className="w-full border-cpim-red text-cpim-red hover:bg-cpim-red hover:text-white">
          Read More
        </Button>
      </div>
    </div>
  );
};

const News = () => {
  const newsItems = [
    {
      title: "CPIM Calls for Nationwide Protests Against Rising Fuel Prices",
      date: "April 12, 2023",
      summary: "The Communist Party of India (Marxist) has called for nationwide protests against the continuous rise in fuel prices that is impacting the common people.",
      image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Protests"
    },
    {
      title: "Kerala Government Launches New Healthcare Initiative",
      date: "March 28, 2023",
      summary: "The CPIM-led Kerala government has launched an innovative healthcare initiative aimed at providing free treatment to all residents.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
      category: "Policy"
    },
    {
      title: "CPIM Condemns Union Government's Labor Code Changes",
      date: "February 15, 2023",
      summary: "The party has issued a strong statement condemning the recent changes to labor laws, which it says undermine workers' rights and favor corporate interests.",
      image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Statement"
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cpim-red mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-cpim-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Stay updated with the latest activities, statements, and initiatives of the Communist Party of India (Marxist).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard 
              key={index}
              title={news.title}
              date={news.date}
              summary={news.summary}
              image={news.image}
              category={news.category}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-cpim-red hover:bg-cpim-darkred">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
