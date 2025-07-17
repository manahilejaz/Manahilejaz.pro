export default function Hero() {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-gray-800 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-bold">TA</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Manahil Ejaz
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 font-light">
              Professional Developer
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and delivering excellence in every project. 
            Dedicated to continuous learning and professional growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg">
              View My Work
            </button>
            <button className="border-2 border-slate-700 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}