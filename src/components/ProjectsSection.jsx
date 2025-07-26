import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "QuickBlog Blogging Platform",
    description: "QuickBlog is a dynamic and user-friendly blogging platform built with the MERN stack, enabling users to effortlessly create, manage, and share posts using AI-powered content generation in real-time.",
    image: "/projects/QuickBlog.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://my-quick-blog.vercel.app/",
    githubUrl: "https://github.com/BruceWayne0009/QuickBlog",
    featured: true,
  },
  {
    id: 2,
    title: "QuickChat Messenger App",
    description:
      "A real-time chat application that allows users to communicate instantly with friends and family, featuring user authentication and Image sharing.",
    image: "/projects/Quickchat.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://my-chat-app-pied-nine.vercel.app/login",
    githubUrl: "https://github.com/BruceWayne0009/chat-app",
    featured: true,
  },
  {
    id: 3,
    title: "Youtube Clone - Vidtube",
    description:
      "VidTube is a sleek and responsive YouTube clone built with React and TailwindCSS, offering seamless video browsing, playback, and user interaction with fetching real-time data from the YouTube API.",
    image: "/projects/Youtube_clone.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://youtube-clone-chi-flax.vercel.app/",
    githubUrl: "https://github.com/BruceWayne0009/youtube-clone",
    featured: true,
  },
  {
    id: 4,
    title: "QuickAi - AI Tools platform",
    description:
      "**QuickAI** is a powerful AI content creation tool built with the PERN stack, enabling users to generate blog titles, write articles, create images, remove backgrounds or objects, and streamline their content workflow effortlessly.",
    image: "/projects/QuickAi.png",
    tags: ["React", "TailwindCSS", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "A modern real estate website built with React and TailwindCSS, featuring property listings and user-friendly navigation for a seamless browsing experience.",
    image: "/projects/Real_Estate.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://my-real-estate-ten.vercel.app/",
    githubUrl: "https://github.com/BruceWayne0009/real-estate",
    featured: false,
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "It is a responsive Netflix clone built with React, TailwindCSS, and Firebase, offering smooth user authentication and seamless streaming of movies and shows in a modern UI.",
    image: "/projects/Netflix_Clone.png",
    tags: ["React", "TailwindCSS", "Firebase"],
    demoUrl: "https://super-cool-netflex-clone-app-2025.netlify.app/login",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Pokedex",
    description:
      "Pokedex is a responsive Pokedex application built with React allowing users to explore and search for Pokémon, view their details, and enjoy a sleek user interface.",
    image: "/projects/Pokedex.png",
    tags: ["React", "CSS", "FantaCSS"],
    demoUrl: "https://my-pokedex-2005-rjs.netlify.app/",
    githubUrl: "https://github.com/BruceWayne0009/Pokedex",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background decorations with stars and meteors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="star" style={{ top: '10%', left: '20%', width: '2px', height: '2px' }}></div>
        <div className="star" style={{ top: '30%', left: '80%', width: '1px', height: '1px' }}></div>
        <div className="star" style={{ top: '60%', left: '15%', width: '1.5px', height: '1.5px' }}></div>
        <div className="star" style={{ top: '80%', left: '70%', width: '2px', height: '2px' }}></div>
        <div className="star" style={{ top: '20%', left: '60%', width: '1px', height: '1px' }}></div>
        
        {/* Meteors */}
        <div className="meteor" style={{ top: '20%', right: '10%', animationDelay: '0s' }}></div>
        <div className="meteor" style={{ top: '50%', right: '30%', animationDelay: '2s' }}></div>
        <div className="meteor" style={{ top: '80%', right: '60%', animationDelay: '4s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            🚀 Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover gradient-border ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              } ${index === 0 ? 'animate-fade-in-delay-1' : index === 1 ? 'animate-fade-in-delay-2' : index === 2 ? 'animate-fade-in-delay-3' : 'animate-fade-in-delay-4'}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full animate-pulse-subtle">
                  <Star size={12} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || `https://via.placeholder.com/400x200/222847/213191?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x200/222847/213191?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
                  <a
                    href={project.demoUrl !== "#" ? project.demoUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cosmic-button flex items-center gap-2 ${project.demoUrl === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl !== "#" ? project.githubUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cosmic-button flex items-center gap-2 ${project.githubUrl === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-card text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description.replace(/\*\*/g, '')}
                </p>

                {/* Footer with links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl !== "#" ? project.demoUrl : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-foreground/80 hover:text-primary transition-colors duration-300 ${project.demoUrl === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl !== "#" ? project.githubUrl : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-foreground/80 hover:text-primary transition-colors duration-300 ${project.githubUrl === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                      title="Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/BruceWayne0009"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


