import React from 'react';
import CreateButton from './utlis/createButton';

const AccountingFeature = () => {
    return (
        <>
            <section className='bg-gradient-to-b from-[#E6ECF8] to-[#a9bde8] min-h-screen'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-4 text-center lg:text-left space-y-6">
                            <h1 className="font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-7xl">
                                #Free Accounting Software
                            </h1>
                            <p className='text-base sm:text-lg xl:text-xl'>
                                Trigon simplifies business accounting, inventory tracking and reporting using one powerful interface. It for small business owner, 100% free no strings attached.
                            </p>
                            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                                <div>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="h-12 sm:h-16 text-sm rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                        placeholder='Enter your email' 
                                        required 
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        className="h-12 sm:h-16 text-sm rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                        placeholder='Enter your phone number' 
                                        required 
                                    />
                                </div>
                                <CreateButton content="Create Account" className='w-full sm:w-auto py-3 px-8' />
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="relative w-full">
                                <img 
                                    src="./lappy_mockup.png" 
                                    alt="Accounting software mockup" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountingFeature; 