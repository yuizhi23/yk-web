import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/19c957bb-cf51-4082-ba58-9a5ce7b8476c.png",
      alt: "Mahasiswa '23 of the Year Award Ceremony",
      title: "Award Recognition",
      description: "Receiving the Mahasiswa '23 of the Year award"
    },
    {
      id: 2,
      src: "/lovable-uploads/70862c5f-9da6-48c4-afaa-e9fce549f37f.png",
      alt: "Mahasiswa '23 of the Year Certificate",
      title: "Achievement Certificate",
      description: "Official certificate for Mahasiswa '23 of the Year"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer hover:shadow-elegant transition-all duration-500 animate-fade-in border-asphalt/10 bg-white"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-asphalt/0 group-hover:bg-asphalt/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                          <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                          <p className="text-sm">{image.description}</p>
                        </div>
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