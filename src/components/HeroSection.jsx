import {  Code,  Star } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [particles, setParticles] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate floating particles and meteors
  useEffect(() => {
    // Add a small delay to prevent initial render glitches
    const initTimer = setTimeout(() => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 3,
      }));
      setParticles(newParticles);

      // Generate meteors with better timing
      const newMeteors = Array.from({ length: 2 }, (_, i) => ({
        id: i,
        delay: i * 3 + 1, // Start after initial animations
        x: Math.random() * 30,
        y: Math.random() * 30,
      }));
      setMeteors(newMeteors);
      
      setIsLoaded(true);
    }, 500); // Wait for initial animations to start

    return () => clearTimeout(initTimer);
  }, []);

  const typewriterText = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);

  // Start typewriter effect after initial animations
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowTypewriter(true);
    }, 500); // Start after name animation completes

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (showTypewriter && currentIndex < typewriterText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, typewriterText, showTypewriter]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Meteors - Only render when loaded to prevent glitches */}
      {isLoaded && meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute pointer-events-none opacity-0"
          style={{
            top: `${meteor.y}%`,
            right: `${meteor.x}%`,
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            borderRadius: '2px',
            transform: 'rotate(315deg)',
            animation: `meteor-${meteor.id} 4s linear infinite`,
            animationDelay: `${meteor.delay}s`,
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Add individual keyframes for meteors to prevent conflicts */}
      <style>{`
        @keyframes meteor-0 {
          0% {
            transform: translate(0, 0) rotate(315deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-400px, 400px) rotate(315deg);
            opacity: 0;
          }
        }
        @keyframes meteor-1 {
          0% {
            transform: translate(0, 0) rotate(315deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate(-500px, 500px) rotate(315deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Glowing Orbs - Positioned better to avoid meteor conflicts */}
      <div className="absolute top-32 left-32 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-16 w-24 h-24 bg-blue-500/12 rounded-full blur-2xl animate-pulse-subtle pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-8">

          {/* Main Title with Enhanced Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <div className="opacity-0 animate-fade-in">
              <span className="text-glow">Hi, I'm</span>
            </div>
            <div className="opacity-0 animate-fade-in-delay-1 mt-2">
              <span 
                className=" text-glow bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-pulse-subtle"
                style={{ 
                  backgroundSize: '200% 100%',
                  animation: 'float 3s ease-in-out infinite, pulse-subtle 4s ease-in-out infinite'
                }}
              >
                Ayush
              </span>
              <span className="ml-4 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mishra
              </span>
            </div>
          </h1>

          {/* Typewriter Effect Subtitle - Only show when ready */}
          <div className="opacity-0 animate-fade-in-delay-2 min-h-[3rem] flex items-center justify-center">
            <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold">
              <Code className="h-8 w-8 text-primary animate-pulse" />
              <span className="text-primary min-w-[320px] text-left">
                {showTypewriter && (
                  <>
                    {displayText}
                    {currentIndex < typewriterText.length && (
                      <span className="animate-pulse ml-1">|</span>
                    )}
                  </>
                )}
                {!showTypewriter && (
                  <span className="opacity-0">{typewriterText}</span>
                )}
              </span>
            </div>
          </div>

          {/* Description with Better Spacing */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I bring ideas to life with the{" "}
            <span className="text-primary font-semibold">MERN stack</span>. 
            From sleek user interfaces to powerful backend logic, I build web experiences 
            that feel{" "}
            <span className="text-gradient font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              effortless
            </span>{" "}
            and perform{" "}
            <span className="text-gradient font-semibold bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent">
              flawlessly
            </span>.
          </p>

          {/* Enhanced CTA Buttons - Show after typewriter completes */}
          <div className={`pt-8 space-y-4 transition-opacity duration-200 ${
            currentIndex >= typewriterText.length || !showTypewriter 
              ? 'opacity-0 animate-fade-in-delay-4' 
              : 'opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="#projects" 
                className="group cosmic-button relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <Star className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#about" 
                className="px-6 py-2 rounded-full border-2 border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side Decorative Elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-30">
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-30">
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};