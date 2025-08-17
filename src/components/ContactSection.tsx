import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yukiekiyoshi123@gmail.com",
      href: "mailto:yukiekiyoshi123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "081280106134",
      href: "tel:081280106134"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bandung, West Java",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yukiekiyoshi",
      href: "https://linkedin.com/in/yukiekiyoshi"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-asphalt mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-asphalt/80 max-w-2xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const isLinkedIn = contact.label === "LinkedIn";
            
            const content = (
              <Card 
                className="group hover:shadow-elegant transition-all duration-500 animate-fade-in border-asphalt/10 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent 
                        className={`w-6 h-6 transition-all duration-300 ${
                          isLinkedIn 
                            ? 'text-primary group-hover:text-blue-600 group-hover:scale-110' 
                            : 'text-primary group-hover:scale-110'
                        }`} 
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-asphalt mb-2">{contact.label}</h3>
                  <p className={`text-sm transition-all duration-300 ${
                    isLinkedIn 
                      ? 'text-asphalt/70 group-hover:text-blue-600 story-link' 
                      : 'text-asphalt/70'
                  }`}>
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            );

            return contact.href ? (
              <a 
                key={contact.label}
                href={contact.href}
                target={isLinkedIn ? "_blank" : undefined}
                rel={isLinkedIn ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={contact.label}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-asphalt/60 italic">
            "Ready to collaborate and create something amazing together."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;