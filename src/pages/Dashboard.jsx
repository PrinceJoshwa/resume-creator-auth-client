import { FaUser } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <FaUser className="text-white" />
            </div>
            <div>
              <h1 className="font-bold">Resume Builder</h1>
              <p className="text-sm text-gray-500">Build Your Future</p>
            </div>
          </div>

          <nav className="space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <div>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Resume
              </a>
              <div className="ml-4">
                <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-gray-100 rounded">
                  Resume Templates
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  My Resumes
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Professional Template */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/template-professional.png" alt="Professional Template" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">Professional</h3>
            <p className="text-gray-600">Clean and professional template for corporate roles</p>
          </div>

          {/* Creative Template */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/template-creative.png" alt="Creative Template" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">Creative</h3>
            <p className="text-gray-600">Modern and creative template for design roles</p>
          </div>

          {/* Simple Template */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/template-simple.png" alt="Simple Template" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-lg font-semibold">Simple</h3>
            <p className="text-gray-600">Minimalist template focusing on experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;