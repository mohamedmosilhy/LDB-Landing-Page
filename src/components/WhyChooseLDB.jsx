import React from "react";

// =============================================================================
// WHY CHOOSE LDB COMPONENT
// =============================================================================
const WhyChooseLDB = () => {
  const features = [
    {
      id: 1,
      title: "Research-Driven, Competency-Based Frameworks",
      icon: "🌱",
      color: "from-[#0f596d] to-[#1a7a8f]",
      delay: "delay-0",
    },
    {
      id: 2,
      title: "Culturally Grounded, Globally Aligned",
      icon: "🌍",
      color: "from-[#1a7a8f] to-[#2a9bb3]",
      delay: "delay-100",
    },
    {
      id: 3,
      title: "Integrated, Interdisciplinary Methodology",
      icon: "👥",
      color: "from-[#2a9bb3] to-[#3bb8d4]",
      delay: "delay-200",
    },
    {
      id: 4,
      title: "Measurable Impact and Systemic Change",
      icon: "📈",
      color: "from-[#3bb8d4] to-[#4dd4f7]",
      delay: "delay-300",
    },
    {
      id: 5,
      title: "From Design to Delivery—One Seamless System",
      icon: "⚙️",
      color: "from-[#4dd4f7] to-[#5dd2f6]",
      delay: "delay-400",
    },
  ];

  return (
    <section
      id="why-choose-ldb"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/10 to-[#3bb8d4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/5 to-[#4dd4f7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            Why Choose LDB?
          </h2>
          <p className="fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            At Learning Design Boutique (LDB), we don't just deliver services—we
            architect transformation. What sets us apart is not only what we do,
            but how and why we do it. Here's why LDB is the trusted partner for
            future-focused organizations, governments, and youth-focused
            institutions.
          </p>
        </div>

        {/* Main Content - Zigzag Layout */}
        <div className="flex flex-col items-center space-y-6 lg:space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group animate-fade-in-up w-full max-w-2xl ${
                index % 2 === 0 ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-3 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                {/* Centered Content Layout */}
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#0f596d]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#2a9bb3]/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#4dd4f7]/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#1a7a8f]/35 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#3bb8d4]/45 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#0f596d]/25 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx="true">{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseLDB;
