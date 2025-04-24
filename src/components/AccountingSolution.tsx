// FeatureItem.tsx
interface FeatureItemProps {
    text: string;
  }
  
  function FeatureItem({ text }: FeatureItemProps) {
    return (
      <div className="flex items-center mb-2">
        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-gray-700">{text}</span>
      </div>
    );
  }
  
  // FeatureCategory.tsx
  interface FeatureCategoryProps {
    title: string;
    features: string[];
  }
  
  function FeatureCategory({ title, features }: FeatureCategoryProps) {
    return (
      <div className="mb-8">
        <h3 className="text-blue-600 font-medium mb-3">{title}</h3>
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    );
  }
  
  // Types
  interface CategoryData {
    title: string;
    features: string[];
  }
  
  type FeatureCategoriesData = {
    [key: number]: CategoryData[];
  }
  
  // AccountingSolution.tsx
  import { useState } from 'react';
  
  export default function AccountingSolution() {
    // Define tabs
    const tabs = [
      "Invoicing", 
      "Payables and Receivables", 
      "Inventory Management", 
      "Business Accounting", 
      "Financial Reporting"
    ];
    
    // Add state for active tab
    const [activeTab, setActiveTab] = useState(0);
    
    // Feature categories data for all tabs
    const featureCategories: FeatureCategoriesData = {
      // Invoicing tab
      0: [
        {
          title: "Invoicing",
          features: [
            "Estimates/Quotations",
            "Sales Orders",
            "Multi-currency Invoices",
            "Payment Gateway Integrations"
          ]
        },
        {
          title: "Receipts",
          features: [
            "Record Receipts",
            "Record Advance Receipts",
            "Allocation of Receipts to Invoices",
            "Record Non-Invoice Income"
          ]
        },
        {
          title: "Expense Management",
          features: [
            "Record Business Expenses",
            "Inventory Purchases",
            "Create Purchase Orders",
            "Vendor Management"
          ]
        }
      ],
      // Payables and Receivables tab
      1: [
        {
          title: "Accounts Receivable",
          features: [
            "Customer Credit Management",
            "Aging Reports",
            "Collection Reminders",
            "Bad Debt Management"
          ]
        },
        {
          title: "Accounts Payable",
          features: [
            "Vendor Bills",
            "Scheduled Payments",
            "Bulk Payment Processing",
            "Vendor Credit Notes"
          ]
        },
        {
          title: "Cash Flow",
          features: [
            "Cash Flow Forecasting",
            "Bank Reconciliation",
            "Cash Position Dashboard",
            "Liquidity Analysis"
          ]
        }
      ],
      // Inventory Management tab
      2: [
        {
          title: "Stock Control",
          features: [
            "Item Tracking",
            "Stock Adjustments",
            "Low Stock Alerts",
            "Barcode Integration"
          ]
        },
        {
          title: "Procurement",
          features: [
            "Purchase Planning",
            "Reorder Points",
            "Vendor Comparison",
            "Order Tracking"
          ]
        },
        {
          title: "Inventory Valuation",
          features: [
            "FIFO/LIFO Methods",
            "Average Cost Calculation",
            "Inventory Reports",
            "Cost Tracking"
          ]
        }
      ],
      // Business Accounting tab
      3: [
        {
          title: "General Ledger",
          features: [
            "Chart of Accounts",
            "Journal Entries",
            "Account Reconciliation",
            "Fiscal Year Management"
          ]
        },
        {
          title: "Tax Management",
          features: [
            "Sales Tax Tracking",
            "Tax Reports",
            "Filing Preparation",
            "Multi-jurisdiction Support"
          ]
        },
        {
          title: "Asset Management",
          features: [
            "Fixed Asset Tracking",
            "Depreciation Calculation",
            "Asset Maintenance",
            "Disposal Recording"
          ]
        }
      ],
      // Financial Reporting tab
      4: [
        {
          title: "Financial Statements",
          features: [
            "Balance Sheet",
            "Income Statement",
            "Cash Flow Statement",
            "Statement of Changes in Equity"
          ]
        },
        {
          title: "Business Analytics",
          features: [
            "Profitability Analysis",
            "Cost Center Reporting",
            "KPI Dashboards",
            "Trend Analysis"
          ]
        },
        {
          title: "Compliance",
          features: [
            "Audit Trails",
            "Regulatory Reporting",
            "Document Management",
            "Data Security"
          ]
        }
      ]
    };
    
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              A Complete Accounting Solution
            </h2>
            <p className="text-blue-600">
              Your search for the best accounting software ends here!
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8 justify-center">
              {tabs.map((tab, index) => (
                <button 
                  key={index}
                  className={`py-4 px-1 text-sm font-medium ${index === activeTab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-gray-800 mb-2">All The Ways We Can Help You</h3>
              <p className="text-blue-600 text-sm mb-4">
                BookEasy Provides A Complete Accounting Suite For Small & Medium Business
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCategories[activeTab].map((category, index) => (
                <FeatureCategory 
                  key={index}
                  title={category.title} 
                  features={category.features} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }