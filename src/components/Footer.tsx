export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Manahil Ejaz</h3>
            <p className="text-gray-300 mb-4">
              Software Engineer & Cybersecurity Expert dedicated to building secure, 
              innovative solutions that drive business success.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Links</h4>
            <div className="space-y-2">
              <a href="https://www.linkedin.com/in/manahil-ejaz/" className="text-gray-300 hover:text-white transition-colors block">
                LinkedIn Profile
              </a>
              <a href="https://github.com/manahilejaz" className="text-gray-300 hover:text-white transition-colors block">
                GitHub Portfolio
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                Professional Resume
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise Areas</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Software Engineering</p>
              <p>• Cybersecurity</p>
              <p>• Project Management</p>
              <p>• Product Strategy</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Manahil Ejaz. All rights reserved. | Building excellence through innovation and security.
          </p>
        </div>
      </div>
    </footer>
  );
}
