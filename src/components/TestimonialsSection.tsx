import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ankush P.',
      role: 'Systems Engineer',
      company: 'HiA, Inc.',
      quote: 'Very Satisfied! Very convenient to make customer invoices and apply taxes as needed. Invoices are the Key. Easy Creation, modification, and Generation.',
      image: './testimonial-us-01-1.png',
    },
    {
      id: 2,
      name: 'Balaji I.',
      role: 'Founder & CEO',
      company: 'HiA, Inc.',
      quote: 'ProfitBooks saves lots of time and dollars for me. My experience with profit books is as excellent as walking on a piece of cake.',
      image: './testimonial-us-02-1.png',
    },
    {
      id: 3,
      name: 'Francis Louie M.',
      role: 'Consultant',
      company: 'HiA, Inc.',
      quote: 'This is the best software so far that I have encountered for use by small commissaries. It can function as an alternative to other expensive ERP solutions',
      image: './testimonial-us-03-1.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trusted By Over 75,000+ Businesses Across The World
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex flex-col items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full mb-3 object-cover"
                />
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
              <p className="text-center text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        {/* Mobile version with navigation */}
        <div className="md:hidden mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col items-center mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-24 h-24 rounded-full mb-3 object-cover"
              />
              <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
            <p className="text-center text-gray-700">"{testimonials[currentIndex].quote}"</p>
          </div>
          
          <div className="flex justify-center mt-4 gap-4">
            <button 
              onClick={goToPrevious}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button 
              onClick={goToNext}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
        
        {/* Navigation arrows for desktop */}
      </div>
    </section>
  );
};

export default TestimonialsSection;