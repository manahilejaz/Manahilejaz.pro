export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer & Cybersecurity Expert",
      company: "Current Role",
      period: "2020 - Present",
      description: "Leading secure software development initiatives and implementing comprehensive cybersecurity frameworks."
    },
    {
      title: "Software Project Manager",
      company: "Previous Role",
      period: "2018 - 2020",
      description: "Managed cross-functional teams and delivered multiple high-impact projects using agile methodologies."
    },
    {
      title: "Product Owner & Requirements Analyst",
      company: "Previous Role",
      period: "2017 - 2018",
      description: "Bridged business requirements with technical implementation, ensuring alignment with stakeholder needs."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of delivering excellence across multiple roles and industries.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-blue-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-lg text-gray-700 mb-2">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}