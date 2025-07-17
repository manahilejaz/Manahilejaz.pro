export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professional with a passion for excellence and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a strong foundation in technology and a commitment to continuous improvement, 
              I bring dedication and expertise to every project. My approach combines technical 
              skills with creative problem-solving to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span className="text-gray-700">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span className="text-gray-700">Team Collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span className="text-gray-700">Project Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span className="text-gray-700">Innovation & Growth</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">🎯</div>
                <span className="text-sm font-medium text-gray-700">Excellence</span>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">🤝</div>
                <span className="text-sm font-medium text-gray-700">Integrity</span>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">🚀</div>
                <span className="text-sm font-medium text-gray-700">Innovation</span>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">📈</div>
                <span className="text-sm font-medium text-gray-700">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}