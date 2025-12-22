import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/lib/supabase";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });
  const { ref: formRef, isInView: formInView } = useScrollAnimation<HTMLFormElement>({
    threshold: 0.2,
  });
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   toast({
  //     title: "Message sent!",
  //     description: "Thank you for reaching out. I'll get back to you soon.",
  //   });

  //   setFormData({ name: "", email: "", message: "" });
  //   setIsSubmitting(false);
  // };

  // Replace the simulated submission handler with:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    const { error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      toast({
        title: 'Error',
        description: 'Could not send message. Please try again later.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Message sent!',
        description: "Thanks — I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
  };




  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/jevin31", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bhovanen-murday/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:bhovanen31pro@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 ${formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div
              ref={infoRef}
              className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left transition-all duration-700 delay-150 ${infoInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Other ways to connect
              </h3>
              <p className="text-muted-foreground mb-8">
                You can also find me on these platforms. Let's connect and build
                something amazing together!
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md duration-500 ${infoInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                      }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
