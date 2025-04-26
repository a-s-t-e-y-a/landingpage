import React from 'react';
import HeroSection from '../HeroSection';
import { invoicingData } from '../../data/invoicingData';

export default function InvoicingPageSubHeroSection() {
    return (
        <>
            {invoicingData.map((section, index) => (
                <HeroSection
                    key={index}
                    title={section.title}
                    subtitle={section.subtitle}
                    description={section.description}
                    image={section.image}
                    imagePosition={section.imagePosition}
                    features={section.features}
                    learnMoreLink={section.learnMoreLink}
                    learnMoreText={section.learnMoreText}
                    sectionClassName={section.sectionClassName}
                    textContainerClassName={section.textContainerClassName}
                />
            ))}
        </>
    );
}