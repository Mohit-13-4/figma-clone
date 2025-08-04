
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "FREE",
      price: "0",
      period: "Per Month",
      description: "Organize across all apps by hand",
      features: [
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      buttonVariant: "default" as const,
      popular: false
    },
    {
      name: "STANDARD", 
      price: "10",
      period: "Per Month",
      description: "Organize across all apps by hand",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature",
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      buttonVariant: "outline" as const,
      popular: true
    },
    {
      name: "BUSINESS",
      price: "99", 
      period: "Per Month",
      description: "Organize across all apps by hand",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg p-8 text-center ${
                plan.popular 
                  ? 'bg-blue-500 text-white scale-105' 
                  : 'bg-white text-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className="text-2xl ml-2">$</span>
                </div>
                <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <Check className={`w-5 h-5 mr-3 ${
                      plan.popular ? 'text-white' : 'text-green-500'
                    }`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "outline" : "default"}
                className={`w-full rounded-full py-6 text-lg font-semibold ${
                  plan.popular 
                    ? 'bg-white text-blue-500 hover:bg-gray-50 border-2 border-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
