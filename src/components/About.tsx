export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professional with expertise in software engineering, cybersecurity, and project management.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Professional Journey
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                With over 7 years of industry experience, I have successfully bridged the gap between 
                technical development and business objectives. My career spans multiple roles including 
                Software Project Manager, Product Owner, and Requirements Analyst, giving me a comprehensive 
                understanding of the software development lifecycle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in secure software design, implementing robust cybersecurity measures while 
                maintaining optimal performance. My approach combines technical expertise with strategic 
                thinking to deliver solutions that not only meet current needs but are scalable for future growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a leader, I excel in agile project management, fostering collaboration between cross-functional 
                teams, and ensuring project deliverables align with client expectations and security best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900">Strategic Planning</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold text-gray-900">Team Leadership</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900">Innovation</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold text-gray-900">Growth Mindset</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Core Competencies
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">🔐 Cybersecurity Expertise</h4>
                <p className="text-gray-700">
                  Implementing comprehensive security measures, vulnerability assessments, and secure coding practices 
                  to protect applications and data integrity.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">💻 Software Engineering</h4>
                <p className="text-gray-700">
                  Full-stack development expertise with focus on scalable architectures, clean code principles, 
                  and modern development frameworks.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">📊 Project Management</h4>
                <p className="text-gray-700">
                  Agile methodology implementation, stakeholder management, and cross-functional team coordination 
                  to ensure successful project delivery.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">🎯 Product Strategy</h4>
                <p className="text-gray-700">
                  Product lifecycle management, requirements analysis, and strategic planning to align technical 
                  solutions with business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
