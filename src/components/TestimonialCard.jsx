import React from 'react';

const TestimonialCard = ({ 
  image, 
  name, 
  position, 
  company, 
  testimonial 
}) => {
  return (
    <div className="bg-[#F8F9FC] p-6 rounded-lg flex items-center gap-4">
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="text-sm text-gray-600">
            <span>{position}</span>
            {company && (
              <>
                <span className="mx-1">•</span>
                <span>{company}</span>
              </>
            )}
          </div>
          <p className="mt-2 text-gray-700 text-sm">
            {testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 