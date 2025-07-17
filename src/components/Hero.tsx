export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8">
              <span className="text-white font-bold text-4xl">ME</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Manahil Ejaz
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
                  Software Engineer & Cybersecurity Expert
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  7+ Years of Industry Experience
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Experienced Software Engineer and Cybersecurity Expert specializing in secure software design, 
                agile project management, and product lifecycle optimization. Proven track record of leading 
                cross-functional teams and delivering high-impact solutions aligned with business goals and 
                security best practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View My Work
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-xl font-semibold">Building Secure Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
