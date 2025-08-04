
import { Twitter, Facebook, Linkedin, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Pages",
      links: ["Home", "Features", "Partners", "Pricing", "Contact"]
    },
    {
      title: "Tomothy",
      links: ["Eleanor Edwards", "Ted Robertson", "Annette Russell", "Jennie Mckinney", "Gloria Richards"]
    },
    {
      title: "Jane Black",
      links: ["Philip Jones", "Product", "Colleen Russell", "Marvin Hawkins", "Bruce Simmmons"]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <span className="text-white font-semibold">7480 Mistwood Hollo</span>
            </div>
            <div className="flex items-center mb-8">
              <Phone className="w-6 h-6 text-white mr-3" />
              <span className="text-white">(239) 555-0108</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
