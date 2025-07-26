import { useState } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaExchangeAlt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJava,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaProjectDiagram,
    FaPaperPlane,
    FaWind,
    FaServer,
} from "react-icons/fa";

const skills = [
    { name: "HTML", category: "frontend", icon: <FaHtml5 />, color: "from-orange-500 to-red-500" },
    { name: "CSS", category: "frontend", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-600" },
    { name: "Tailwind CSS", category: "frontend", icon: <FaWind />, color: "from-cyan-400 to-cyan-600" },
    { name: "JavaScript", category: "frontend", icon: <FaJsSquare />, color: "from-yellow-400 to-yellow-600" },
    { name: "React", category: "frontend", icon: <FaReact />, color: "from-blue-400 to-cyan-500" },
    { name: "Node.js", category: "backend", icon: <FaNodeJs />, color: "from-green-500 to-green-600" },
    { name: "Express", category: "backend", icon: <FaServer />, color: "from-gray-600 to-gray-700" },
    { name: "PostMan", category: "backend", icon: <FaPaperPlane />, color: "from-orange-400 to-orange-600" },
    { name: "MongoDB", category: "backend", icon: <FaDatabase />, color: "from-green-400 to-green-600" },
    { name: "PostgreSQL", category: "backend", icon: <FaDatabase />, color: "from-blue-600 to-indigo-600" },
    { name: "Java", category: "programming", icon: <FaJava />, color: "from-red-500 to-orange-500" },
    { name: "Python", category: "programming", icon: <FaPython />, color: "from-blue-500 to-yellow-400" },
    { name: "Git", category: "tools", icon: <FaGitAlt />, color: "from-orange-600 to-red-600" },
    { name: "DSA", category: "programming", icon: <FaProjectDiagram />, color: "from-purple-500 to-purple-600" },
    { name: "GitHub", category: "tools", icon: <FaGithub />, color: "from-gray-700 to-gray-900" },
    { name: "C#", category: "programming", icon: <FaCode />, color: "from-purple-600 to-indigo-600" },
    { name: "Rest API", category: "backend", icon: <FaExchangeAlt />, color: "from-teal-500 to-teal-600" },
];

const categories = [
    { name: "all", label: "All Skills", icon: "🚀" },
    { name: "frontend", label: "Frontend", icon: "🎨" },
    { name: "backend", label: "Backend", icon: "⚙️" },
    { name: "programming", label: "Programming", icon: "💻" },
    { name: "tools", label: "Tools", icon: "🛠️" },
];

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="star" style={{ top: '15%', left: '10%', width: '2px', height: '2px' }}></div>
                <div className="star" style={{ top: '25%', left: '85%', width: '1px', height: '1px' }}></div>
                <div className="star" style={{ top: '70%', left: '20%', width: '1.5px', height: '1.5px' }}></div>
                <div className="star" style={{ top: '80%', left: '80%', width: '2px', height: '2px' }}></div>

                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        My <span className="text-primary">Skills</span> & Expertise
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here's a comprehensive overview of my technical skills and expertise across different domains of software development.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-delay-1">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={cn(
                                "group relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden",
                                activeCategory === category.name
                                    ? "cosmic-button text-primary-foreground scale-105"
                                    : "bg-card hover:bg-card/80 text-foreground/80 hover:text-foreground hover:scale-105 card-hover"
                            )}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="text-sm">{category.icon}</span>
                                {category.label}
                            </span>
                            {activeCategory !== category.name && (
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredSkills.map((skill, index) => (
    <div
      key={skill.name}
      className="group backdrop-blur-md rounded-xl p-6 card-hover gradient-border animate-fade-in"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        animationDelay: `${index * 100 + 200}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-xl">{skill.icon}</span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </h3>
          <span className="text-xs text-muted-foreground capitalize">
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="mt-16 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-delay-4">
    {[
      { label: "Total Skills", value: skills.length, icon: "🎯" },
      {
        label: "Frontend",
        value: skills.filter((s) => s.category === "frontend").length,
        icon: "🎨",
      },
      {
        label: "Backend",
        value: skills.filter((s) => s.category === "backend").length,
        icon: "⚙️",
      },
    ].map((stat, index) => (
      <div
        key={index}
        className="text-center backdrop-blur-md rounded-xl px-6 py-5 min-w-[200px] card-hover gradient-border transition-all duration-300"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="text-3xl mb-2">{stat.icon}</div>
        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </div>
    ))}
  </div>
</div>


            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
};



