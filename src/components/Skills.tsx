export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Software Architecture", "Secure Coding", "Full-Stack Development", "Database Design", "API Development"]
    },
    {
      title: "Cybersecurity",
      skills: ["Vulnerability Assessment", "Security Auditing", "Incident Response", "Compliance", "Risk Management"]
    },
    {
      title: "Project Management",
      skills: ["Agile/Scrum", "Team Leadership", "Stakeholder Management", "Requirements Analysis", "Product Strategy"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Security Tools", "Development Frameworks", "Project Management Software", "CI/CD Pipelines", "Cloud Platforms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning software engineering, cybersecurity, and project management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white px-3 py-2 rounded text-sm text-gray-700">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}