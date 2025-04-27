import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsStrip = ({ testimonials }) => {
  return (
    <div className="w-full bg-[#E6EDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage:
const defaultTestimonials = [
  {
    image: "./testimonial-us-01-1.png",
    name: "Ankush P.",
    position: "Systems Engineer",
    company: "CEO, HIA, Inc",
    testimonial: "Very Satisfied! Very convenient to make customer invoices and apply taxes as needed. Invoices are the Key. Easy Creation, modification, and Generation."
  },
  {
    image: "./testimonial-us-02-1.png",
    name: "Balaji I.",
    position: "Founder & CEO",
    company: "CEO, HIA, Inc",
    testimonial: "Trigon saves lots of time and dollars for me. My experience with Trigon is as excellent as walking on a piece of cake."
  }
];

TestimonialsStrip.defaultProps = {
  testimonials: defaultTestimonials
};

export default TestimonialsStrip; 