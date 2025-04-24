import React from 'react';
import CreateButton from './utlis/createButton';

export default function CTABanner(): JSX.Element {
  return (
    <section className="bg-[#6448F5] py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Get 100% FREE Accounting Software</h2>
          <p className="text-xl text-white mb-6">Take Control of Your Billing, Inventory, Taxes and Complete Business Accounting!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Create invoices & receive payments</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Track business expenses</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Get access to 45+ financial reports</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Outsource accounting to experts</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Manage inventory</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-white">Prepare tax reports</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-6 md:mt-0">
          
          <CreateButton content="Get Your Free Account" className={` px-6 py-3 rounded-lg font-medium  transition-colors`} />
        </div>
      </div>
    </section>
  );
}