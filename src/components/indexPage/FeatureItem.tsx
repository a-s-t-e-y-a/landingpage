// FeatureItem.tsx
interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }
  