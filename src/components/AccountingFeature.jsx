import React from 'react';
import CreateButton from './utlis/createButton';

const AccountingFeature = () => {
    return (
        <>
            <section className='bg-linear-to-b from-[#E6ECF8] to-[#a9bde8]'>
                <div className="grid max-w-screen-3xl px-24 py-8 mx-auto h-screen gap-22 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-between">
                    <div className="place-self-center text-center lg:col-span-4 text-left">
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
                        <CreateButton content="Create Account" className='py-3 px-8' />
                    </div>
                    <div className="flex justify-center lg:col-span-8">
                        <img src="./lappy_mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountingFeature; 