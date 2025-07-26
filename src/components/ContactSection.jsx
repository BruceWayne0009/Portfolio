import { Mail, Phone,Instagram, Twitter, Linkedin, MapPin, Send, Github } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const data = new FormData();
      data.append("access_key", import.meta.env.VITE_WEB_3_FORMS_API); // Replace with your Web3Forms key
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("subject", "Portfolio Get In touch");
      data.append("from_name", "Portfolio");
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
  
        if (res.ok) {
          toast.success("Message sent! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        toast.error("Error sending message.");
      } finally {
        setIsSubmitting(false);
      }
    };
  

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="shrink-0 p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-0.5">
                <h4 className="font-medium text-sm text-foreground">Email</h4>
                <a
                href="mailto:maayush2005@gmail.com"
                className="text-muted-foreground hover:text-primary text-sm"
                >
                maayush2005@gmail.com
                </a>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <div className="shrink-0 p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-0.5">
                <h4 className="font-medium text-sm text-foreground">Phone</h4>
                <a
                href="mailto:maayush2005@gmail.com"
                className="text-muted-foreground hover:text-primary text-sm"
                >
                +91 7700019876
                </a>
            </div>
            </div>


            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Mumbai, India</p>
              </div>
            </div>
            <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
                <div className="flex justify-center gap-6">
                    <a
                    href="https://www.linkedin.com/in/ayush-mishra-1443a831a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group p-3 rounded-full border border-primary/50 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-110 active:scale-95"
                    >
                    <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                    href="https://github.com/BruceWayne0009"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="group p-3 rounded-full border border-primary/50 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-110 active:scale-95"
                    >
                    <Github className="w-5 h-5" />
                    </a>
                    <a
                    href="https://www.instagram.com/_the_name_is_aayush_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group p-3 rounded-full border border-primary/50 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-110 active:scale-95"
                    >
                    <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>

          </div>

          {/* Form */}
          <form
            className="bg-card p-8 rounded-lg shadow"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Aayush Mishra..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                <>
                    <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                    ></path>
                    </svg>
                    <span>Sending...</span>
                </>
                ) : (
                <>
                    Send Message
                    <Send size={16} />
                </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};



