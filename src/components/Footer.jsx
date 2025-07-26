import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4  px-5 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Aayush Mishra. All rights reserved.
      </p>
      <a href="#hero"
        aria-label="Back to top" className=" p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 active:scale-95">
        <ArrowUp size={20} />
        </a>

    </footer>
  );
};