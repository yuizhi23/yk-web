import { Card, CardContent } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      src: '/lovable-uploads/a9036210-9d56-4237-88d1-06f4c4fb669b.png',
      alt: 'University Certificate'
    },
    {
      id: 2,
      src: '/lovable-uploads/3be8d6b5-9ffc-4fb8-a43a-56b3c5cca74f.png',
      alt: 'Qwords Digital Marketing Certificate'
    },
    {
      id: 3,
      src: '/lovable-uploads/d75369c2-e7ab-4c33-b4d8-80e891e0467b.png',
      alt: 'PKKMB Certificate'
    },
    {
      id: 4,
      src: '/lovable-uploads/bfc14e6b-f761-476e-8f32-bb1ebf0559e4.png',
      alt: 'Public Speaking Certificate'
    },
    {
      id: 5,
      src: '/lovable-uploads/45720ac4-b75c-4333-b986-f844a13b5b69.png',
      alt: 'Coursera Excel Certificate'
    },
    {
      id: 6,
      src: '/lovable-uploads/eb7fa300-de79-43d7-ae4c-4a9c1d8d967a.png',
      alt: 'Coursera Investment Certificate'
    },
    {
      id: 7,
      src: '/lovable-uploads/89d55bbc-0f46-47df-a1e8-0cfe7fdb667f.png',
      alt: 'LEAD Informatics Certificate'
    },
    {
      id: 8,
      src: '/lovable-uploads/1723ad6f-1bae-4511-91a3-cff8eb729f07.png',
      alt: 'Scholarship Certificate'
    },
    {
      id: 9,
      src: '/lovable-uploads/9510c4ec-5258-4c8d-9f06-a55d26c96ff4.png',
      alt: 'PKKMB 2023 Certificate'
    },
    {
      id: 10,
      src: '/lovable-uploads/7451ab04-cc60-4298-ae93-464d4b4ac431.png',
      alt: 'Appreciation Certificate'
    },
    {
      id: 11,
      src: '/lovable-uploads/759252c2-f64f-4d96-b3a3-be139c20060a.png',
      alt: 'Career Preparation HRD Certificate'
    },
    {
      id: 12,
      src: '/lovable-uploads/7a1dd8de-1d46-483a-a5bf-799a4c985666.png',
      alt: 'WordPress Certificate'
    },
    {
      id: 13,
      src: '/lovable-uploads/eecca2a2-3ff2-433c-88f1-51a75c997a22.png',
      alt: 'Business Analysis Certificate'
    },
    {
      id: 14,
      src: '/lovable-uploads/362e1fbd-f435-4cb0-9dfe-49baf96d6ffb.png',
      alt: 'Dicoding Certificate'
    },
    {
      id: 15,
      src: '/lovable-uploads/3332e6fe-2bc3-4c0e-8e74-70c385d45919.png',
      alt: 'Telkom University Webinar Certificate 1'
    },
    {
      id: 16,
      src: '/lovable-uploads/88d3e7a4-926a-4148-b0b0-f38af7afd37c.png',
      alt: 'Telkom University Webinar Certificate 2'
    },
    {
      id: 17,
      src: '/lovable-uploads/02807d40-3231-4b93-9bcd-a47006887b38.png',
      alt: 'Telkom University Webinar Certificate 3'
    },
    {
      id: 18,
      src: '/lovable-uploads/9c9568fc-6610-4721-9230-468c55d43fcc.png',
      alt: 'Mental Health Seminar Certificate'
    },
    {
      id: 19,
      src: '/lovable-uploads/cc0263fd-e676-4a7e-99b5-1c60aa5250f1.png',
      alt: 'Public Speaking Certificate March'
    },
    {
      id: 20,
      src: '/lovable-uploads/a07e4206-bc14-4ac4-b32d-deeebcdf6c42.png',
      alt: 'Public Speaking Certificate February'
    },
    {
      id: 21,
      src: '/lovable-uploads/93c94709-446e-4848-a118-0f424c84a392.png',
      alt: 'Korean Language Beginner Certificate'
    },
    {
      id: 22,
      src: '/lovable-uploads/e344e136-b55f-463e-9770-1618d1dea5b8.png',
      alt: 'Anti Corruption Certificate'
    },
    {
      id: 23,
      src: '/lovable-uploads/abbc6541-8419-4e6c-83c2-9dd47c479bca.png',
      alt: 'Anti Napza Certificate'
    },
    {
      id: 24,
      src: '/lovable-uploads/f1481f8a-3106-4f66-afb7-817da957378e.png',
      alt: 'Anti Radicalism Certificate'
    },
    {
      id: 25,
      src: '/lovable-uploads/7d48f647-435a-46c0-a404-2c13712edb1e.png',
      alt: 'Green Campus Certificate'
    },
    {
      id: 26,
      src: '/lovable-uploads/11ddc6ab-a069-4c20-9e97-2055596eaee0.png',
      alt: 'Sexual Violence Prevention Certificate'
    }
  ];

  return (
    <section className="py-20 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-asphalt">Certificates</h2>
          <p className="text-lg text-asphalt/80 mb-2">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          <p className="text-base text-asphalt/70 italic">
            Every certificate represents a step forward in my journey of continuous learning and growth.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {certificates.map((certificate) => (
              <Card 
                key={certificate.id} 
                className="flex-shrink-0 w-80 h-56 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0 h-full">
                  <img
                    src={certificate.src}
                    alt={certificate.alt}
                    className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;