const InventoryDashboard = () => {
  return (
    <div className="relative bg-[#6246FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Take Complete Control Of Your Inventory
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <img src="/trigon-logo.png" alt="Trigon" className="h-8" />
              <span className="font-semibold">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Start Now</button>
              <div className="flex items-center space-x-2">
                <img src="/avatar-placeholder.png" alt="User" className="h-8 w-8 rounded-full" />
                <span>Demo User</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Income and Expense Overview</h3>
                <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg"></div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Top 10 Selling Items</h3>
                <div className="space-y-3">
                  {['Product Pro', 'Ace Item Pack', 'Power Stack', 'Value Stack Lite', 'Pro Professional Set'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-grow h-4 bg-blue-200 rounded"></div>
                      <span className="ml-2 text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Invoices by Status</h3>
                <div className="flex justify-between items-center">
                  <div className="w-32 h-32 rounded-full border-8 border-blue-500"></div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Unpaid (13)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Paid (09)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span>Draft (04)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                      <span>Returned (01)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="text-sm text-gray-600">Latest activity update...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Watch how Trigon can help you manage inventory & systemize the operations
            </h2>
            <button className="bg-blue-600 text-white p-4 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard; 