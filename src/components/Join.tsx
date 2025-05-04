
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckIcon, Users, UserPlus, FileText, Globe } from "lucide-react";

const Join = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="join" className="py-16 bg-cpim-red text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto">
            Be part of the struggle for a better future. Join the Communist Party of India (Marxist) 
            and contribute to the fight for workers' rights, social justice, and socialism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Why Join CPIM?</h3>
            
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-full text-cpim-red mr-4">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Be Part of a Collective Struggle</h4>
                <p className="opacity-90">
                  Join millions of workers, farmers, students, and intellectuals in the fight against exploitation and injustice.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-full text-cpim-red mr-4">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Political Education</h4>
                <p className="opacity-90">
                  Gain access to Marxist theory, political education, and analytical understanding of society and economy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-full text-cpim-red mr-4">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">International Solidarity</h4>
                <p className="opacity-90">
                  Connect with progressive movements around the world working towards similar goals of social and economic justice.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-full text-cpim-red mr-4">
                <UserPlus size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Make a Real Difference</h4>
                <p className="opacity-90">
                  Participate in grassroots organizing, electoral politics, and social movements that create tangible change.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-cpim-gray p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-cpim-red">Membership Inquiry Form</h3>
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-green-500 rounded-full p-3 mb-4">
                  <CheckIcon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p className="text-center text-gray-600">
                  Your inquiry has been submitted successfully. A party representative will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="border-gray-300" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="border-gray-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="border-gray-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">City & State</Label>
                  <Input id="location" required className="border-gray-300" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to join CPIM?</Label>
                  <Textarea id="message" rows={3} className="border-gray-300" />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cpim-red hover:bg-cpim-darkred text-white"
                >
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
