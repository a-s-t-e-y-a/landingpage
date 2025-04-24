import React from 'react';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceFeature({ icon, title, description }: ServiceFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 text-blue-600">
        {icon}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default function RemoteBookkeepingService() {
  return (
    <section className="py-16 bg-[#f5f5ff]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Features grid */}
          <div className="grid grid-cols-2 gap-8">
            <ServiceFeature 
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Call with expert accountants"
              description="to address queries"
            />
            
            <ServiceFeature 
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Always on-time tax"
              description="filing"
            />
            
            <ServiceFeature 
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Monthly reporting of"
              description="financial performance"
            />
            
            <ServiceFeature 
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Up to date bookkeeping"
              description="of all transactions"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Remote Bookkeeping Service
            </h2>
            <p className="text-blue-600 font-medium text-lg mb-4">
              Don't have time for accounting? Let us handle it for you!
            </p>
            <p className="text-gray-700 mb-6">
              Our team of expert accountants will help you with accounting & tax filing. All you have to do is to send your bank statement, invoices & expense bills to us and your dedicated bookkeeper will do the rest.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 