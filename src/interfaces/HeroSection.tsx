export interface HeroSectionProps {
    imagePosition?: 'right' | 'left';
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
    // Custom class names
    sectionClassName?: string;
    containerClassName?: string;
    imageContainerClassName?: string;
    imageClassName?: string;
    textContainerClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descriptionClassName?: string;
  }