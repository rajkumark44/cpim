
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cpim-gray text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">CPIM</h3>
            <p className="mb-4 text-sm">
              The Communist Party of India (Marxist) works towards the establishment of a socialist state 
              and ultimately, a communist society where all citizens enjoy equal rights and opportunities.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-cpim-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-cpim-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-cpim-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-cpim-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cpim-red transition-colors">Our Constitution</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Party Program</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Party Congress</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">International Relations</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Party History</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cpim-red transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Position Papers</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">Video Archives</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">People's Democracy</a></li>
              <li><a href="#" className="hover:text-cpim-red transition-colors">The Marxist</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin size={18} className="mr-2 text-cpim-red flex-shrink-0" />
                <span>A.K. Gopalan Bhawan, 27-29 Bhai Vir Singh Marg, New Delhi - 110001, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-cpim-red flex-shrink-0" />
                <span>+91-11-23747483 / 23747484</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-cpim-red flex-shrink-0" />
                <span>cpim@cpim.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2023 Communist Party of India (Marxist). All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-cpim-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cpim-red transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-cpim-red transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
