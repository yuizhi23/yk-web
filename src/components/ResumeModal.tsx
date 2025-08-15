import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF resume
    alert('Resume download functionality would be implemented here');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-primary">
              Complete Resume - Yukie Ramadhani Kiyoshi
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-8 p-6">
          {/* Header */}
          <div className="text-center space-y-4 pb-6 border-b">
            <h1 className="text-3xl font-bold text-primary">YUKIE RAMADHANI KIYOSHI</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📧 yukiekiyoshi123@gmail.com</span>
              <span>📱 081280106134</span>
              <span>📍 Bandung, West Java</span>
              <span>🔗 linkedin.com/in/yukiekiyoshi</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">💼 PROFESSIONAL SUMMARY</h2>
            <p className="text-muted-foreground leading-relaxed">
              A highly motivated and versatile Informatics student with expertise in programming, content creation, 
              video editing, story writing, and voice-over. Proficient in Microsoft Office and equipped with strong 
              problem-solving and communication skills. Actively seeking opportunities to apply my knowledge and grow 
              in dynamic, collaborative environments. Known for adaptability, creativity, and strong initiative.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🎓 EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Telkom University</h3>
                <p className="text-muted-foreground">Bachelor's Degree in Informatics | 2023 – 2027</p>
              </div>
              <div>
                <h3 className="font-semibold">Senior High School 12 Bekasi</h3>
                <p className="text-muted-foreground">Science and Biology Major | 2020 – 2023</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">💼 Professional Experience</h2>
            <div className="space-y-6">
              {/* Voice Over Experience */}
              <div>
                <h3 className="font-semibold text-lg mb-3">🎙️ Voice Over Artist</h3>
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-medium">PT Panca Kraft Pratama (May 2025)</h4>
                    <p className="text-sm text-muted-foreground">Voiced the official company profile video with clear, engaging narration.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">FREZHCHICK - Larislokal (Feb 2025)</h4>
                    <p className="text-sm text-muted-foreground">Lent voice to Tokopedia x Frezhchick's Ramadhan campaign.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">ERA Infinity (Mar 2025)</h4>
                    <p className="text-sm text-muted-foreground">Voice Over Talent & Scriptwriter for real estate promos.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">JAGOTI LMS (Oct 2024)</h4>
                    <p className="text-sm text-muted-foreground">Narrated K3 training and communication skill modules.</p>
                  </div>
                </div>
              </div>

              {/* Content Creation */}
              <div>
                <h3 className="font-semibold text-lg mb-3">🎥 Content Creator & Marketing</h3>
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-medium">HelPhin Indonesia (Oct 2024)</h4>
                    <p className="text-sm text-muted-foreground">Created promotional/educational video content and marketing campaigns.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">KitaAnterID Spokesperson (Jul 2025)</h4>
                    <p className="text-sm text-muted-foreground">Served as public voice and representative across various media formats.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership & Recognition */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🧠 Leadership & Recognition</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Head of Student Affairs Division (KMS) — HIMA S1 Informatika</h3>
                <p className="text-muted-foreground">Mar 2025 – Present | Bandung</p>
              </div>
              <div>
                <h3 className="font-semibold">🌟 Mahasiswa of The Year 2023 — HIMA S1 Informatika</h3>
                <p className="text-muted-foreground">Dec 2024 – Present | Bandung</p>
              </div>
              <div>
                <h3 className="font-semibold">Event Coordinator — Hello World 2025</h3>
                <p className="text-muted-foreground">May – Sep 2025 | Bandung</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🛠 SKILLS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Technical Skills:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Programming</li>
                  <li>• Graphic Design</li>
                  <li>• Content Creation</li>
                  <li>• Video Editing</li>
                  <li>• Voice-Over & Dubbing</li>
                  <li>• Microsoft Office</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Soft Skills:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Public Relations</li>
                  <li>• Leadership</li>
                  <li>• Communication</li>
                  <li>• Teamwork</li>
                  <li>• Problem-Solving</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">Languages</h2>
            <div className="text-muted-foreground">
              • English (Fluent) • Indonesian (Native)
            </div>
          </section>

          {/* Download Button */}
          <div className="flex justify-center pt-6">
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};