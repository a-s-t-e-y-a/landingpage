// BlogCard.tsx
interface BlogCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  export function BlogCard({ title, description, imageSrc, imageAlt }: BlogCardProps) {
    return (
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    );
  }