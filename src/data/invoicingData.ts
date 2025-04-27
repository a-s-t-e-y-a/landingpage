// Define type for invoicing section data
interface InvoicingSection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  headingLayout: 'centered' | 'left' | 'right';
  features: string[];
  learnMoreLink: string;
  learnMoreText: string;
  sectionClassName: string;
  textContainerClassName: string;
}

export const invoicingData: InvoicingSection[] = [
  {
    title: "Best Inventory Management Software",
    subtitle: "Trigon is the top-rated free inventory software with highest satisfaction ratings",
    description: "Trigon combines inventory management functionality with ease of use, allowing small-to-medium businesses to track stock levels, manage vendors, and handle purchase orders—all in one place. Our tools make it simple to automate your operations and boost efficiency.",
    image: "/banner_image_1.png",
    imagePosition: "left",
    headingLayout: "centered",
    features: [
      "Sales Order Management",
      "Purchase Order Management",
      "Barcode Scanning Integration",
      "Multi-Location Inventory Control",
      "Insightful Inventory Reports"
    ],
    learnMoreLink: "#",
    learnMoreText: "Learn More",
    sectionClassName: "bg-white",
    textContainerClassName: "text-gray-800"
  },
  {
    title: "Streamlined Purchase Management",
    subtitle: "Track all your POs and inventory purchases digitally in one place",
    description: "Get real-time visibility into your purchase orders and inventory acquisitions. Our intuitive system allows you to create and track POs, automate purchase order workflows, and maintain vendor relationships.",
    image: "/banner_image_1.png",
    imagePosition: "right",
    headingLayout: "centered",
    features: [
      "Easy PO creation and approval workflows",
      "Track vendor performance and delivery times",
      "Centralize procurement management and record-keeping",
      "Compare quotes to ensure you get the best values"
    ],
    learnMoreLink: "#",
    learnMoreText: "Learn More",
    sectionClassName: "bg-[#e6edf8]",
    textContainerClassName: "text-gray-800"
  },
  {
    title: "Track All Your Orders",
    subtitle: "Stay on top of sales operations",
    description: "Keep all your sales orders organized in one central location. Monitor status updates and gain complete visibility over your order fulfillment process.",
    image: "/banner_image_1.png",
    imagePosition: "left",
    headingLayout: "centered",
    features: [
      "Efficiently Manage Sales Orders",
      "Process and track orders easily from creation to fulfillment",
      "Invoices & Quotations",
      "Create professional customer-facing documents with just a few clicks"
    ],
    learnMoreLink: "#",
    learnMoreText: "Learn More",
    sectionClassName: "bg-white",
    textContainerClassName: "text-gray-800"
  },
  {
    title: "Manufacturing Inventory Management",
    subtitle: "Powerful stock control features for the manufacturing industry",
    description: "Take the guesswork out of managing your manufacturing inventory with our specialized tools designed for production environments.",
    image: "/banner_image_1.png",
    imagePosition: "right",
    headingLayout: "centered",
    features: [
      "Real-time production status and BOM tracking",
      "Automatic stock level updates upon production",
      "Resource allocation and scheduling",
      "Advanced lot and serial number tracking",
      "Production order management"
    ],
    learnMoreLink: "#",
    learnMoreText: "Learn More",
    sectionClassName: "bg-[#e6edf8]",
    textContainerClassName: "text-gray-800"
  },
  {
    title: "Customer & Supplier Management",
    subtitle: "Manage professional relationships with your contacts efficiently",
    description: "Build strong relationships with both customers and suppliers through our comprehensive contact management system.",
    image: "/banner_image_1.png",
    imagePosition: "left",
    headingLayout: "centered",
    features: [
      "Keep complete contact information in a centralized database",
      "Track communication history for accountability and context",
      "Store key documents and contracts for easy reference",
      "View transaction history by supplier/customer",
      "Create detailed customer and supplier profiles"
    ],
    learnMoreLink: "#",
    learnMoreText: "Learn More",
    sectionClassName: "bg-white",
    textContainerClassName: "text-gray-800"
  }
]; 