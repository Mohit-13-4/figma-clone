
import { Zap, Shield, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes with our streamlined onboarding process."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security measures to protect your data."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using our collaborative tools."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most calendars are designed for teams. State is designed for freelancers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
