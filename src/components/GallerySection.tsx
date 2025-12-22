import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/mahasiswa-of-year-2025-ceremony.jpg",
      alt: "Mahasiswa '23 of the Year Award Ceremony",
      title: "Mahasiswa '23 of The Year",
      description: "Receiving the award at the ceremony - December 2025"
    },
    {
      id: 2,
      src: "/lovable-uploads/mahasiswa-of-year-2025-plakat.jpg",
      alt: "Award Plaque Mahasiswa '23 of The Year",
      title: "Award Plaque",
      description: "Official plaque awarded on 21 December 2025"
    },
    {
      id: 3,
      src: "/lovable-uploads/19c957bb-cf51-4082-ba58-9a5ce7b8476c.png",
      alt: "Mahasiswa '23 of the Year Award Ceremony",
      title: "Award Recognition 2024",
      description: "Receiving the Mahasiswa '23 of the Year award"
    },
    {
      id: 4,
      src: "/lovable-uploads/70862c5f-9da6-48c4-afaa-e9fce549f37f.png",
      alt: "Mahasiswa '23 of the Year Certificate",
      title: "Achievement Certificate",
      description: "Official certificate for Mahasiswa '23 of the Year"
    },
    {
      id: 5,
      src: "/lovable-uploads/4cb09e0e-aeb7-4247-aeae-ea5eb609923d.png",
      alt: "Student Affairs Division (KMS) Team",
      title: "KMS Division Team",
      description: "Leading the Student Affairs Division team at HIMA IF"
    },
    {
      id: 6,
      src: "/lovable-uploads/0ad2422b-ec08-495d-9969-2bd43b325c4b.png",
      alt: "Head of Student Affairs Division (KMS)",
      title: "Leadership Role",
      description: "As Head of Student Affairs Division (KMS) with deputy Raihan"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-asphalt mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-asphalt/80 max-w-2xl mx-auto leading-relaxed">
            Moments of achievement and recognition throughout my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer hover:shadow-elegant transition-all duration-500 animate-fade-in border-asphalt/10 bg-white"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <div className="overflow-hidden rounded-t-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg mb-2 text-asphalt">{image.title}</h3>
                        <p className="text-sm text-asphalt/80">{image.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-asphalt/60 italic">
            "Excellence is not a destination, but a journey of continuous growth and achievement."
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;