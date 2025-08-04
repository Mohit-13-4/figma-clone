
const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
        </svg>
      ),
      title: "OpenType features",
      subtitle: "Variable fonts",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Design with real data",
      subtitle: "",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
        </svg>
      ),
      title: "Fastest way to",
      subtitle: "take action",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                {feature.subtitle && (
                  <h4 className="text-2xl font-bold text-gray-900">{feature.subtitle}</h4>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
