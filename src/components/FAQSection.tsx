import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Is trigon truly a free accounting software?",
      answer: "Yes, Trigon is completely free for small businesses. We offer all core accounting features at no cost, with no hidden fees or trial periods. Our revenue comes from optional premium features designed for growing businesses, allowing us to keep the essential accounting tools free forever."
    },
    {
      question: "How does Trigon compare to other accounting software?",
      answer: "Trigon offers the same core functionality as paid alternatives like QuickBooks and Xero, but completely free. We provide invoicing, expense tracking, financial reporting, and inventory management in an easy-to-use interface. While premium software may offer more specialized features, Trigon covers all the essential accounting needs for most small businesses."
    },
    {
      question: "Can I access Trigon on mobile devices?",
      answer: "Absolutely! Trigon is fully responsive and works on smartphones and tablets. You can create invoices, track expenses, and check financial reports on the go. We also offer dedicated mobile apps for iOS and Android with offline capabilities, ensuring you can manage your finances from anywhere."
    },
    {
      question: "Is my financial data secure with Trigon?",
      answer: "Security is our top priority. We use bank-grade encryption to protect your data both in transit and at rest. Our servers are hosted in secure facilities with multiple redundancies, and we perform regular security audits. We never share your financial information with third parties without your explicit consent."
    },
    {
      question: "How do I get started with Trigon?",
      answer: "Getting started is simple. Just sign up with your email address on our website, and you'll have immediate access to all features. Our setup wizard will guide you through the basic configuration, and you can import existing data from spreadsheets or other accounting software. We also offer free onboarding support and comprehensive documentation to help you get up and running quickly."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details 
              key={index} 
              className="rounded-lg overflow-hidden bg-[#EEF2FA] group"
            >
              <summary className="flex justify-between items-center w-full p-4 text-left text-lg font-medium cursor-pointer list-none">
                {item.question}
                <span className="text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="p-4 pt-0">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}