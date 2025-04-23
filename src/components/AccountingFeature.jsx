import React from 'react';
import CreateButton from './utlis/createButton';

const AccountingFeature = () => {
    return (
        <>
            <section className="bg-[#6448F5]">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center">
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                        <img className="border-2 border-white rounded-3xl p-2" src="./banner_image_2.png" alt="mockup" />
                    </div>
                    <div className="text-center lg:text-left place-self-center lg:col-span-7 text-white">
                        <h1 className="max-w-lg mx-auto lg:mx-0 mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-4xl">Grow Your Sales With Powerful Invoicing</h1>
                        <p className="max-w-2xl mx-auto lg:mx-0 font-semibold mb-6 lg:mb-8 md:text-lg lg:text-2xl">Get paid on time and maintain positive cash flow.</p>
                        <p className="max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-8 md:text-lg lg:text-xl">
                            With Trigon accounting software, you can create professional estimates or invoices and track outstanding payments due with few clicks
                        </p>
                        <p className="max-w-2xl mx-auto lg:mx-0 mb-10 lg:mb-8 md:text-lg lg:text-xl">
                            With Trigon accounting software, you can create professional estimates or invoices and track outstanding payments due with few clicks
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-linear-to-r from-cyan-200 to-blue-200'>
                <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center">
                    <div className="place-self-center text-center lg:col-span-5 text-left">
                        <h1 className="font-bold  tracking-tight leading-none md:text-2xl xl:text-7xl">
                            #Free Accounting Software
                        </h1>
                        <p className='text-xl mt-2 mb-12'>
                            Trigon simplifies business accounting, inventory tracking and reporting using one powerful interface. It for small business owner, 100% free no strings attached.
                        </p>
                        <div class="mb-5">
                            {/* <label for="password" className="block mb-2 text-sm font-medium text-xl">Your password</label> */}
                            <input type="email" id="email" className="h-16 text-sm rounded-lg border border-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your email' required />
                        </div>
                        <div class="mb-10">
                            {/* <label for="password" className="block mb-2 text-sm font-medium text-xl">Your password</label> */}
                            <input type="phone" id="phone" className="h-16 text-sm rounded-lg border border-2  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your phone number' required />
                        </div>
                        <CreateButton content="Create Account" />
                    </div>
                    <div className="flex justify-center lg:col-span-7">
                        <img src="./laptop_realistic.jpg" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountingFeature; 