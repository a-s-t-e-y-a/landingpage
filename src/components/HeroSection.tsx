import type { HeroSectionProps } from "../interfaces/HeroSection";

export default function HeroSection({
    imagePosition = 'right',
    title = 'Grow Your Sales With Powerful Invoicing',
    subtitle = 'Get paid on time and maintain positive cash flow.',
    description = 'With Trigon accounting software, you can create professional estimates or invoices and track outstanding payments due with few clicks',
    image = './banner_image_2.png',
    children,
    features = [],
    learnMoreLink = "#",
    learnMoreText = "Learn more about Invoicing Features",
    learnMoreClassName = "inline-flex items-center justify-center font-medium text-white underline hover:text-gray-200",
    // Custom class names
    sectionClassName = "bg-[#6448F5]",
    containerClassName = "max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12",
    imageContainerClassName = "relative ms-4",
    imageClassName = "w-full rounded-md",
    textContainerClassName = "text-white",
    titleClassName = "block text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight",
    subtitleClassName = "mt-3 text-lg font-semibold",
    descriptionClassName = "mt-3 text-lg"
}: HeroSectionProps & {
    features?: string[],
    learnMoreLink?: string,
    learnMoreText?: string,
    learnMoreClassName?: string
}) {
    const isImageRight = imagePosition === 'right';

    const imageContent = (
        <div className={imageContainerClassName}>
            <img className={imageClassName} src={image} alt="mockup" />
            <div className="absolute inset-0 -z-1 bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-4"></div>
        </div>
    );

    const featuresContent = features.length > 0 ? (
        <div className="mt-6">
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <a href={learnMoreLink} className={learnMoreClassName}>
                    {learnMoreText}
                    <svg className="w-5 h-5 ml-2 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    ) : null;

    const textContent = (
        <div className={textContainerClassName}>
            <h1 className={titleClassName}>{title}</h1>
            <p className={subtitleClassName}>{subtitle}</p>
            <p className={descriptionClassName}>{description}</p>
            {featuresContent}
            {children}
        </div>
    );

    return (
        <section className={sectionClassName}>
            <div className={containerClassName}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    {isImageRight ? (
                        <>
                            {textContent}
                            {imageContent}
                        </>
                    ) : (
                        <>
                            {imageContent}
                            {textContent}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}