// BlogSection.tsx
import { BlogCard } from './BlogCards';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Financial Planning for Seasonal Sales ",
      description: "Running an online clothing business in India presents unique challenges and opportunities, especially during seasonal sales.",
      imageSrc: "./blog_card_1.png",
      imageAlt: "Financial Planning for Seasonal Sales"
    },
    {
      id: 2,
      title: "5 FREE Invoicing Software in Australia",
      description: "In our free invoicing software guide, where we listed those software, that are not only feature-packed, but also free to use.",
      imageSrc: "./blog_card_2.png",
      imageAlt: "Top 5 invoicing Software in Australia"
    },
    {
      id: 3,
      title: "6 Best GST Billing Software in India",
      description: "Juggling invoices, tax calculations, and keeping track of everything GST related can feel like a full-time job in itself!",
      imageSrc: "./blog_card_3.png",
      imageAlt: "GST Billing Software in India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Expert Tips For Better Running Your Business
          </h2>
          <p className="text-blue-600 font-medium">
            Check Out Our Extensively Researched Blog Posts
          </p>
        </div>
        
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
        
        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Explore More Articles
          </button>
        </div>
      </div>
    </section>
  );
}