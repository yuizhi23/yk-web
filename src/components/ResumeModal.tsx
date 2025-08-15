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
                <p className="text-muted-foreground">Bachelor&apos;s Degree in Informatics | 2023 – 2027</p>
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
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-medium">PT Panca Kraft Pratama (May 2025) | Indonesia (Hybrid)</h4>
                    <p className="text-sm text-muted-foreground">Voiced the official company profile video with clear, engaging narration that captured the brand&apos;s values and vision. Delivered voice-over with professional tone and message clarity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">FREZHCHICK (Larislokal) (Feb 2025) | Indonesia (Hybrid)</h4>
                    <p className="text-sm text-muted-foreground">Lent voice to Tokopedia x Frezhchick&apos;s Ramadhan campaign. Created a warm, human-centered audio presence aligned with the festive tone.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">ERA Infinity (Mar 2025) | Remote (Indonesia)</h4>
                    <p className="text-sm text-muted-foreground">Voice Over Talent & Scriptwriter - Wrote and narrated engaging real estate promos that bring property listings to life. Helped humanize listings and improve digital engagement.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">JAGOTI LMS (Oct 2024) | Remote</h4>
                    <p className="text-sm text-muted-foreground">Narrated K3 training, customer service, and communication skill modules for LMS platform. Balanced clarity, tone, and warmth in e-learning voice-overs.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Belawa Phone (Mar 2024) | Indonesia (Hybrid)</h4>
                    <p className="text-sm text-muted-foreground">Joined as freelance voice-over talent, narrating product messages with clarity and character. Brought fresh tone to tech-forward content.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Freelancer.com (Nov 2023) | Remote</h4>
                    <p className="text-sm text-muted-foreground">Worked on a variety of projects, from voice acting to creative writing and content editing. Built early client base and polished voice-over delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Fastwork.co (Jun 2024 – Oct 2024) | Remote</h4>
                    <p className="text-sm text-muted-foreground">Handled commissioned voice-over projects ranging from character dubbing to commercial delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Children&apos;s Animation Project (Jun 2025) | Indonesia (Remote)</h4>
                    <p className="text-sm text-muted-foreground">Provided five distinct character voices for a children&apos;s animation video. Brought energy, playfulness, and clarity across diverse roles tailored for young audiences.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">KitaAnterID Spokesperson (Jul 2025) | Indonesia (Remote)</h4>
                    <p className="text-sm text-muted-foreground">Served as the public voice and representative for Kitaanter ID across various media formats. Delivered clear, engaging, and purpose-driven communication to amplify brand values, build audience trust, and strengthen the platform&apos;s presence.</p>
                  </div>
                </div>
              </div>

              {/* Content Creation */}
              <div>
                <h3 className="font-semibold text-lg mb-3">🎥 Content Creator & Marketing</h3>
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-medium">HelPhin Indonesia - Content Creator & Marketing Specialist (Oct 2024) | Hybrid</h4>
                    <p className="text-sm text-muted-foreground">Created and starred in promotional/educational video content. Developed bold, youth-friendly campaigns to elevate HelPhin&apos;s platform and brand identity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">HelPhin.id - Content Creator (Oct 2024) | Hybrid</h4>
                    <p className="text-sm text-muted-foreground">Produced creative, bold, and relatable content to communicate HelPhin&apos;s vision. Engaged users through storytelling and visual branding.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Organizational & Event Roles */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🧩 Organizational & Event Roles</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">🎪 Event Coordinator — Hello World 2025 (May – Sep 2025) | Bandung</h3>
                <p className="text-sm text-muted-foreground">Served as the Event Coordinator for Hello World 2025, a flagship program under the Student Affairs Division (KMS) aimed at welcoming new Informatics students. Oversaw the entire execution of the event, from planning and concept development to cross-team coordination and on-the-day operations.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — Hello World 2024 (Jul – Sep 2024)</h3>
                <p className="text-sm text-muted-foreground">Led communication, content strategy, and media outreach for a major welcoming event for Informatics students. Ensured high visibility and impactful messaging.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — CARNIVAL 2025 (May 2025)</h3>
                <p className="text-sm text-muted-foreground">Led the Public Relations division for CARNIVAL 2025, an appreciation and celebration event for Informatics graduates, commonly known as &quot;Arak-arakan.&quot; Crafted messaging strategies, supervised social media campaigns, and ensured strong visibility for this flagship event by HIMA IF.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — CARNIVAL 2024 (Nov 2024 – Dec 2024)</h3>
                <p className="text-sm text-muted-foreground">Crafted communication strategies to celebrate Informatics graduates. Built event visibility through digital content and storytelling.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Staff — Viva La Fia 2025 (Jul 2025)</h3>
                <p className="text-sm text-muted-foreground">Contributed to the public relations strategy of the event. Supported digital communications, content creation, and media coordination.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Staff — Viva La Fia 2024 (Aug – Oct 2024)</h3>
                <p className="text-sm text-muted-foreground">Helped shape the event&apos;s digital presence through public relations strategy and creative media posts.</p>
              </div>
              <div>
                <h3 className="font-semibold">📦 Logistics Staff — Anniv Insight HIMA IF (Nov – Dec 2024)</h3>
                <p className="text-sm text-muted-foreground">Managed event logistics and materials for HIMA IF&apos;s anniversary celebration. Ensured readiness and coordination of key needs.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎪 Event Staff & Master of Ceremony — One Fine Day 2024 (BPH HIMA IF) (Dec 2024 – Jan 2025)</h3>
                <p className="text-sm text-muted-foreground">Contributed to event planning and served as Master of Ceremony. Strengthened public speaking and crowd engagement in a creative setting.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎮 Managerial Intern (Valorant Division) — YOUNGERS (FIA) (Oct 2024 – Present)</h3>
                <p className="text-sm text-muted-foreground">Supported event and team operations in the e-sports sub-division. Assisted with documentation, strategy, and coordination.</p>
              </div>
            </div>
          </section>

          {/* Leadership & Recognition */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🧠 Leadership & Recognition</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">🧭 Head of Student Affairs Division (KMS) — HIMA S1 Informatika (Mar 2025 – Present)</h3>
                <p className="text-muted-foreground">Leads division activities, initiatives, and member development. Serves as a communication bridge between students and academic leaders.</p>
              </div>
              <div>
                <h3 className="font-semibold">🌟 Mahasiswa of The Year 2023 — HIMA S1 Informatika (Dec 2024 – Present)</h3>
                <p className="text-muted-foreground">Awarded for outstanding contributions to the community and organization. Recognized at Insight & Anniv HIMA IF 2024.</p>
              </div>
              <div>
                <h3 className="font-semibold">🌱 Junior Staff (KMS Division) — BPH HIMAIF (Oct 2024 – Present)</h3>
                <p className="text-muted-foreground">Contributed to student support initiatives and communication platforms. Worked closely with team to build inclusive student culture.</p>
              </div>
              <div>
                <h3 className="font-semibold">🩺 Vice President — PMR SMAN 12 Bekasi (2021 – 2022)</h3>
                <p className="text-muted-foreground">Led youth health campaigns and student outreach efforts. Supported internal coordination and external representation.</p>
              </div>
            </div>
          </section>

          {/* Licenses & Certifications */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">📜 Licenses & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div>• Getting Started Programming with Dart (May 2024)</div>
              <div>• English Proficiency Test (EPRT) (Aug 2023)</div>
              <div>• Introduction to Microsoft Excel (Feb 2025)</div>
              <div>• Investment Risk Management (Feb 2025)</div>
              <div>• Business Analysis & Process Management (Feb 2025)</div>
              <div>• Website Development with WordPress (Feb 2025)</div>
              <div>• Korean Language Beginner – KT&G SangSang Univ. Indonesia (Apr 2025)</div>
              <div>• Career Preparation with HRD – KT&G SangSang Univ. Indonesia (Apr 2025)</div>
              <div>• Staff Muda Divisi Kemahasiswaan – Himpunan Mahasiswa S1 Informatika Telkom University (Apr 2025)</div>
              <div>• Qwords Digital Sprint: Digital Marketing – Qwords Cloud Web Hosting Indonesia (May 2025)</div>
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

          {/* Achievements & Recognition */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🏅 ACHIEVEMENTS & RECOGNITION</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div>• Kaderisasi FORTRAN 2024 (Nov 2024)</div>
              <div>• Lead Informatics 2024 Awarding (Dec 2024)</div>
              <div>• Mahasiswa &apos;23 Of The Year (Dec 2024)</div>
              <div>• Hello World 2024 Participant (Feb 2025)</div>
              <div>• Staff Muda Divisi Kemahasiswaan (Feb 2025)</div>
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