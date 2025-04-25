import HeroSection from "../HeroSection";

export default function IndexPageSubHeroSection() {
    return (
        <div className="flex flex-col">

            <HeroSection
                features={[
                    "Estimates & Sales Orders",
                    "Automated Email Reminders",
                    "Payment Gateway Integrations",
                    "Multi-user, Multi-currency system",
                    "In-depth Sales Reports"
                ]}
                learnMoreText="Learn more about Invoicing Features"
                learnMoreLink="#"
            />

            <HeroSection
                imagePosition="left"
                title="Track Inventory With Ease"
                subtitle="From Purchase To Sales, Track Entire Inventory Lifecycle"
                description="Whether you are manufacturing, distributing, selling, servicing, or just managing the inventory, MultiBooks can handle all your business processes with ease."
                image="./banner_image_3.webp"
                sectionClassName="bg-[#EEF2FA]"
                textContainerClassName="text-black"
                learnMoreClassName="inline-flex items-center justify-center font-medium text-blue-600 underline hover:text-blue-800"
                features={[
                    "View & Purchase Management",
                    "Sales Order Management",
                    "Manage Multiple Warehouses",
                    "Multi-user, Multi-currency system",
                    "In-depth Inventory Reports"
                ]}
                learnMoreText="Check out Inventory Management Features →"
                learnMoreLink="#"
            />

            <HeroSection
                imagePosition="right"
                title="Take Control of Your Business Expenses"
                subtitle="Effortlessly track, categorize, and control your business expenses with Trigon."
                description="Trigon simplifies the tracking and categorization of all your business expenses, providing a clear overview of your spending. With real-time reporting and expense insights, you can make informed decisions to optimize your budget and improve profitability."
                image="./banner_image_4.jpg"
                sectionClassName="bg-white"
                textContainerClassName="text-black"
                subtitleClassName="max-w-lg mx-auto lg:mx-0 font-semibold mb-6 lg:mb-8 md:text-lg lg:text-xl text-blue-600"
                descriptionClassName="max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-8 md:text-base lg:text-base"
                imageClassName="rounded-3xl"
                learnMoreClassName="inline-flex items-center justify-center font-medium text-blue-600 underline hover:text-blue-800"
                features={[
                    "Track day-to-day business expenses like office rent, internet bill, etc",
                    "Get aging reports on outstanding dues",
                    "Generate customer or vendor's transaction statements",
                    "Track expenses other than inventory purchase",
                    "Email vendor statement in one click"
                ]}
            />

            <HeroSection
                imagePosition="left"
                title="Your Success is Our Success!"
                subtitle="We understand that we can succeed only when each of our customers is happy and successful."
                description="Once you signup, you'll get access to:"
                image="./banner_image_3.webp"
                sectionClassName="bg-[#f8f9fc]"
                textContainerClassName="text-black"
                features={[
                    "In-app chat support available in 3 languages, 5 days a week",
                    "A complete Support Center with lots of How-To guides",
                    "A YouTube channel with demos and small tutorials",
                    "A business blog filled with articles that help you grow your business",
                    "You can now manage your finances from wherever you are through the Trigon app for iOS and Android"
                ]}
                learnMoreText=""
                learnMoreLink="#"
            />

            <HeroSection
                imagePosition="left"
                title="Remote Bookkeeping Service"
                subtitle="Don't have time for accounting? Let us handle it for you!"
                description="Our team of expert accountants will help you with accounting & tax filing. All you have to do is to send your bank statement, invoices & expense bills to us and your dedicated bookkeeper will do the rest."
                image="./banner_image_5.png"
                sectionClassName="bg-[#f5f4ff]"
                textContainerClassName="text-black"
                features={[
                    "Call with expert accountants to address queries",
                    "Always on-time tax filing",
                    "Monthly reporting of financial performance",
                    "Up to date bookkeeping of all transactions"
                ]}
                learnMoreText="Learn More"
                learnMoreLink="#"
                learnMoreClassName="inline-flex items-center justify-center font-medium text-blue-600 hover:text-blue-800"
            />
        </div>
    );
}