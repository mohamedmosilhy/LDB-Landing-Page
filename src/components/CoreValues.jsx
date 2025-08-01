import React from "react";
import { CORE_VALUES_DATA } from "../constants/data";
import coreValuesImage from "../assets/coreValues.png";

// =============================================================================
// CORE VALUES COMPONENT
// =============================================================================
const CoreValues = () => {
  // ===========================================================================
  // RENDER VALUE CARD
  // ===========================================================================
  const renderValueCard = (value) => (
    <div
      key={value.id}
      className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-3 relative overflow-hidden group"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

      <div className="flex items-center space-x-4 relative z-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
          <i className={`${value.icon} text-xl text-white`}></i>
        </div>
        <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500">
          {value.title}
        </h3>
      </div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      id="core-values"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/15 to-[#4dd4f7]/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/15 to-[#3bb8d4]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>

        {/* Additional unique decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            {CORE_VALUES_DATA.header.title}
          </h2>
          <p className="fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            {CORE_VALUES_DATA.header.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Mobile/Tablet Layout - Image First, then Cards */}
          <div className="lg:hidden">
            {/* Central Image - First */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="relative w-80 h-64 sm:w-96 sm:h-80 rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                  <img
                    src={coreValuesImage}
                    alt="Core Values - Growth and Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f596d] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#4dd4f7] rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Cards in Column Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {CORE_VALUES_DATA.values.map(renderValueCard)}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original Design (Image Center, Cards Left/Right) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* Left Cards */}
              <div className="space-y-6">
                {CORE_VALUES_DATA.values.slice(0, 2).map(renderValueCard)}
              </div>

              {/* Central Image */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Glow effect behind the image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Main image container */}
                  <div className="relative w-96 h-[28rem] rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                    <img
                      src={coreValuesImage}
                      alt="Core Values - Growth and Development"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f596d] rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#4dd4f7] rounded-full opacity-60 animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Right Cards */}
              <div className="space-y-6">
                {CORE_VALUES_DATA.values.slice(2).map(renderValueCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
