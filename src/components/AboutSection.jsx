import { Briefcase, Code, User, Download, Mail, MapPin, Calendar, Award } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: <Calendar className="h-5 w-5" /> },
  { label: "Projects Completed", value: "5+", icon: <Code className="h-5 w-5" /> },
  { label: "Technologies", value: "10+", icon: <Award className="h-5 w-5" /> }
];

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Creating responsive websites and web applications with modern frameworks like React, Node.js, and cutting-edge technologies.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <User className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and seamless user experiences that delight users and drive engagement.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Project Management",
    description: "Leading projects from conception to completion with agile methodologies and ensuring timely delivery.",
    gradient: "from-green-500 to-teal-500"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="star" style={{ top: '20%', left: '15%', width: '2px', height: '2px' }}></div>
        <div className="star" style={{ top: '40%', left: '85%', width: '1px', height: '1px' }}></div>
        <div className="star" style={{ top: '65%', left: '10%', width: '1.5px', height: '1.5px' }}></div>
        <div className="star" style={{ top: '75%', left: '75%', width: '2px', height: '2px' }}></div>
        <div className="star" style={{ top: '30%', left: '50%', width: '1px', height: '1px' }}></div>
        
        {/* Meteors */}
        <div className="meteor" style={{ top: '25%', right: '15%', animationDelay: '0s' }}></div>
        <div className="meteor" style={{ top: '60%', right: '40%', animationDelay: '3s' }}></div>
        
        {/* Floating background elements */}
        <div className="absolute top-32 left-16 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Column - Personal Info */}
          <div className="space-y-8 animate-fade-in-delay-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-glow">
                Passionate Web Developer & Tech Creator
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                 I am an undergraduate student pursuing a degree in <span className="text-primary font-semibold">Information Technology</span> With a passion for web development.
                  I specialize in creating responsive, accessible, and performant web applications using modern technologies 
                  like React, Node.js, and cutting-edge frameworks.
                </p>
                
                <p>
                  I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new 
                  technologies and techniques to stay at the forefront of the ever-evolving web landscape. My goal is to 
                  build applications that not only look great but also provide exceptional user experiences.
                </p>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Available for work</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
              <a
              href="/Ayush_Resume.pdf"
              download
              className="cosmic-button flex items-center justify-center gap-2 bg-card text-foreground hover:bg-primary/10 hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-6 animate-fade-in-delay-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-card gradient-border p-6 card-hover hover:shadow-xl transition-all duration-500 animate-fade-in-delay-${index + 3}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 text-center card-hover hover:shadow-xl transition-all duration-500 gradient-border"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 animate-pulse-subtle">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center animate-fade-in-delay-4">
          <div className="bg-card rounded-2xl p-8 gradient-border card-hover max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-glow">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you're looking for a developer 
              to join your team or need help bringing your ideas to life, let's connect and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a href="#skills" className="cosmic-button bg-card text-foreground hover:bg-primary/10 hover:text-primary">
                Explore Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

