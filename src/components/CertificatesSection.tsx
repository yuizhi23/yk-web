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
    }
  ];

  return (
    <section className="py-20 bg-paper">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-asphalt">Certificates</h2>
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