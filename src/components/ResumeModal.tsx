import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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
          <DialogTitle className="text-2xl font-bold text-primary">
            Complete Resume - Yukie Ramadhani Kiyoshi
          </DialogTitle>
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

          {/* Academic & Project Experience */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">📚 Academic & Project Experience</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Femina Care: A Mobile App for Women's Health Awareness & Private Consultation</h3>
                <p className="text-sm text-muted-foreground">Developed a mobile application focused on women's health awareness, providing educational content and private consultation features to empower women in managing their health.</p>
              </div>
              <div>
                <h3 className="font-semibold">Medical Data–Driven Diabetes Prediction Using Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Developed a machine learning model to predict diabetes risk based on medical data, including data preprocessing, feature analysis, model training, and performance evaluation.</p>
              </div>
              <div>
                <h3 className="font-semibold">Performance Analysis of TCP vs UDP in Proxy-Based Network Systems</h3>
                <p className="text-sm text-muted-foreground">Conducted a comparative analysis of TCP and UDP performance in a proxy-based network system, focusing on latency, throughput, and reliability.</p>
              </div>
              <div>
                <h3 className="font-semibold">HydroWatch: Rainfall and River Water Level Monitoring & Prediction System for Flood Mitigation</h3>
                <p className="text-sm text-muted-foreground">Designed a system to monitor and predict rainfall and river water levels for flood mitigation in Majalaya using data-driven approaches and predictive analysis.</p>
              </div>
              <div>
                <h3 className="font-semibold">Cat Detection System Using Convolutional Neural Network (CNN)</h3>
                <p className="text-sm text-muted-foreground">Developed a cat detection system using CNN, including model training, testing, and accuracy evaluation.</p>
              </div>
              <div>
                <h3 className="font-semibold">Digital Forensics Analysis – Corporate Data Leakage Case Simulation</h3>
                <p className="text-sm text-muted-foreground">Performed digital forensics analysis on a simulated corporate data leakage case by investigating digital evidence such as chat logs and flash disk images using standard forensic methodologies.</p>
              </div>
              <div>
                <h3 className="font-semibold">CineMagz: User-Driven Digital Platform for Exploring Movies and Series</h3>
                <p className="text-sm text-muted-foreground">Built a digital platform that allows users to explore movie and series content through reviews written by other users.</p>
              </div>
              <div>
                <h3 className="font-semibold">Daily Mood Prediction Using Sleep Quality and Stress Level (Mamdani & Sugeno FIS)</h3>
                <p className="text-sm text-muted-foreground">Predicted daily mood based on sleep quality and stress levels using Mamdani and Sugeno Fuzzy Inference Systems.</p>
              </div>
              <div>
                <h3 className="font-semibold">Daily Mood Prediction Using Sleep Quality and Social Media Usage (Mamdani & Sugeno FIS)</h3>
                <p className="text-sm text-muted-foreground">Predicted daily mood based on sleep quality and social media usage intensity using Mamdani and Sugeno Fuzzy Inference Systems.</p>
              </div>
              <div>
                <h3 className="font-semibold">User Experience Analysis of Telkom University LMS</h3>
                <p className="text-sm text-muted-foreground">Analyzed user experience of Telkom University&apos;s Learning Management System (LMS) to identify areas for improvement and optimization.</p>
              </div>
              <div>
                <h3 className="font-semibold">Student Task Management Software System (SAMS)</h3>
                <p className="text-sm text-muted-foreground">Developed a software system for student task management, including tracking, reminders, and schedule management.</p>
              </div>
              <div>
                <h3 className="font-semibold">Valorant Game Economy Analysis: Dynamic Player Resource Management</h3>
                <p className="text-sm text-muted-foreground">Analyzed the Valorant game economy system with dynamic algorithms for managing player resources.</p>
              </div>
              <div>
                <h3 className="font-semibold">Query Performance Analysis With and Without Indexing</h3>
                <p className="text-sm text-muted-foreground">Evaluated query performance in databases with and without indexing, including execution time, resource efficiency, and impact on write operations.</p>
              </div>
              <div>
                <h3 className="font-semibold">E-Connect: Student Learning Platform and Alumni Connection for Environmental Engineering</h3>
                <p className="text-sm text-muted-foreground">Developed a learning platform that connects Environmental Engineering students with alumni, facilitating knowledge sharing, mentorship, and academic collaboration.</p>
              </div>
              <div>
                <h3 className="font-semibold">User Interface (UI) Design, Documentation, and System Testing at Diskominfo West Java Province</h3>
                <p className="text-sm text-muted-foreground">Designed the user interface, prepared technical documentation, and performed system testing for an information system at the West Java Provincial Communication and Informatics Office.</p>
              </div>
              <div>
                <h3 className="font-semibold">Multimodal Cyberbullying Detection on Platform X Using a Deep Learning Approach Based on CNN-BiLSTM and IndoBART with Word2Vec Feature Expansion</h3>
                <p className="text-sm text-muted-foreground">Developed a multimodal cyberbullying detection system for Platform X by combining text and image features using CNN-BiLSTM, IndoBART, and Word2Vec feature expansion to improve classification accuracy.</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">💼 Professional Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">🎙️ Spokesperson & Content Narrator — PT KITAANTER TEKNOLOGI INDONESIA</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2025 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Created and narrated a &quot;Day in My Life&quot; VOG (Voice-Over Guide) video showcasing the dynamic meeting culture at Kitaanter ID. Combined storytelling and authentic narration to highlight startup collaboration, innovation, and team synergy. Delivered engaging behind-the-scenes insights while maintaining a professional and relatable tone that aligns with the company&apos;s brand identity.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Spokesperson — PT KITAANTER TEKNOLOGI INDONESIA</h3>
                <p className="text-xs text-muted-foreground/70">Jul 2025 | Indonesia (Hybrid)</p>
                <p className="text-sm text-muted-foreground">Serves as the official voice and representative of Kitaanter ID in public communications and media-related activities. Delivers clear, confident, and engaging spoken messages across promotional materials and brand announcements. Collaborates with the marketing and communication teams to ensure consistent tone, brand alignment, and impactful storytelling in all external communications.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — HANA ACADEMY</h3>
                <p className="text-xs text-muted-foreground/70">Nov 2025 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Voiced the promotional Christmas holiday course discount, delivering an engaging and energetic narration that highlighted the festive theme and clearly communicated the offer to attract new learners.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — PT Panca Kraft Pratama</h3>
                <p className="text-xs text-muted-foreground/70">May 2025 | Indonesia (Hybrid)</p>
                <p className="text-sm text-muted-foreground">Voiced the official company profile video with clear, engaging narration that captured the brand&apos;s values and vision. Delivered voice-over with professional tone and message clarity.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over & Talent — TRAVL</h3>
                <p className="text-xs text-muted-foreground/70">Jan 2026 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Provided professional voice-over and talent services for TRAVL, delivering engaging and dynamic vocal performances for travel-related content and promotional materials.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist (App Notification) — AyPay Mitra</h3>
                <p className="text-xs text-muted-foreground/70">Feb 2026 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Recorded professional voice-over for app notification sounds and audio prompts, delivering clear and engaging audio that enhances user experience within the AyPay Mitra mobile application.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — Odesa Indonesia</h3>
                <p className="text-xs text-muted-foreground/70">Jan 2026 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Provides professional voice over services for various projects and campaigns at Odesa Indonesia, delivering high-quality vocal performances for diverse media content.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — FREZHCHICK (Larislokal)</h3>
                <p className="text-xs text-muted-foreground/70">Feb 2025 | Indonesia (Hybrid)</p>
                <p className="text-sm text-muted-foreground">Lent voice to Tokopedia x Frezhchick&apos;s Ramadhan campaign. Created a warm, human-centered audio presence aligned with the festive tone.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Talent & Scriptwriter — ERA Infinity</h3>
                <p className="text-xs text-muted-foreground/70">Mar 2025 | Remote (Indonesia)</p>
                <p className="text-sm text-muted-foreground">Wrote and narrated engaging real estate promos that bring property listings to life. Helped humanize listings and improve digital engagement.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — JAGOTI LMS</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2024 | Remote</p>
                <p className="text-sm text-muted-foreground">Narrated K3 training, customer service, and communication skill modules for LMS platform. Balanced clarity, tone, and warmth in e-learning voice-overs.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎥 Creative Talent (Content Creator, Video Editor & Scriptwriter) — bdgfolk</h3>
                <p className="text-xs text-muted-foreground/70">Jan 2026 | Indonesia (Hybrid)</p>
                <p className="text-sm text-muted-foreground">Contributes as a creative talent for bdgfolk, handling content creation, video editing, and scriptwriting. Crafts engaging visual narratives and compelling scripts that resonate with the audience while maintaining brand consistency and creative excellence.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎥 Content Creator & Marketing Specialist — HelPhin Indonesia</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2024 | Hybrid</p>
                <p className="text-sm text-muted-foreground">Created and starred in promotional/educational video content. Developed bold, youth-friendly campaigns to elevate HelPhin&apos;s platform and brand identity.</p>
              </div>
              <div>
                <h3 className="font-semibold">🖋️ Content Creator — HelPhin.id</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2024 | Hybrid</p>
                <p className="text-sm text-muted-foreground">Produced creative, bold, and relatable content to communicate HelPhin&apos;s vision. Engaged users through storytelling and visual branding.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — Belawa Phone</h3>
                <p className="text-xs text-muted-foreground/70">Mar 2024 | Indonesia (Hybrid)</p>
                <p className="text-sm text-muted-foreground">Joined as freelance voice-over talent, narrating product messages with clarity and character. Brought fresh tone to tech-forward content.</p>
              </div>
              <div>
                <h3 className="font-semibold">🧑‍🎤 Voice Over Artist — Freelancer.com</h3>
                <p className="text-xs text-muted-foreground/70">Nov 2023 | Remote</p>
                <p className="text-sm text-muted-foreground">Worked on a variety of projects, from voice acting to creative writing and content editing. Built early client base and polished voice-over delivery.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — Fastwork.co</h3>
                <p className="text-xs text-muted-foreground/70">Jun 2024 – Oct 2024 | Remote</p>
                <p className="text-sm text-muted-foreground">Handled commissioned voice-over projects ranging from character dubbing to commercial delivery.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎙️ Voice Over Artist — Children&apos;s Animation Project</h3>
                <p className="text-xs text-muted-foreground/70">Jun 2025 | Indonesia (Remote)</p>
                <p className="text-sm text-muted-foreground">Provided five distinct character voices for a children&apos;s animation video. Brought energy, playfulness, and clarity across diverse roles tailored for young audiences.</p>
              </div>
            </div>
          </section>

          {/* Organizational & Event Roles */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🧩 Organizational & Event Roles</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">🎪 Event Coordinator — Hello World 2025</h3>
                <p className="text-xs text-muted-foreground/70">May – Sep 2025 | Bandung (On-site)</p>
                <p className="text-sm text-muted-foreground">Served as the Event Coordinator for Hello World 2025, a flagship program under the Student Affairs Division (KMS) aimed at welcoming new Informatics students. Oversaw the entire execution of the event, from planning and concept development to cross-team coordination and on-the-day operations.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — Hello World 2024</h3>
                <p className="text-xs text-muted-foreground/70">Jul – Sep 2024 | Bandung (On-site)</p>
                <p className="text-sm text-muted-foreground">Led communication, content strategy, and media outreach for a major welcoming event for Informatics students. Ensured high visibility and impactful messaging.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — CARNIVAL 2025</h3>
                <p className="text-xs text-muted-foreground/70">May 2025 | Bandung (On-site)</p>
                <p className="text-sm text-muted-foreground">Led the Public Relations division for CARNIVAL 2025, an appreciation and celebration event for Informatics graduates, commonly known as &quot;Arak-arakan.&quot; Crafted messaging strategies, supervised social media campaigns, and ensured strong visibility for this flagship event by HIMA IF.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Leader — CARNIVAL 2024</h3>
                <p className="text-xs text-muted-foreground/70">Nov 2024 – Dec 2024 | Bandung (On-site)</p>
                <p className="text-sm text-muted-foreground">Crafted communication strategies to celebrate Informatics graduates. Built event visibility through digital content and storytelling.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Staff — Viva La Fia 2025</h3>
                <p className="text-xs text-muted-foreground/70">Jul 2025 | Bandung (On-site)</p>
                <p className="text-sm text-muted-foreground">Contributed to the public relations strategy of the event. Supported digital communications, content creation, and media coordination.</p>
              </div>
              <div>
                <h3 className="font-semibold">📢 Public Relations Committee Staff — Viva La Fia 2024</h3>
                <p className="text-xs text-muted-foreground/70">Aug – Oct 2024 | Bandung</p>
                <p className="text-sm text-muted-foreground">Helped shape the event&apos;s digital presence through public relations strategy and creative media posts.</p>
              </div>
              <div>
                <h3 className="font-semibold">📦 Logistics Staff — Anniv Insight HIMA IF</h3>
                <p className="text-xs text-muted-foreground/70">Nov – Dec 2024 | Bandung</p>
                <p className="text-sm text-muted-foreground">Managed event logistics and materials for HIMA IF&apos;s anniversary celebration. Ensured readiness and coordination of key needs.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎪 Event Staff & Master of Ceremony — One Fine Day 2024 (BPH HIMA IF)</h3>
                <p className="text-xs text-muted-foreground/70">Dec 2024 – Jan 2025 | Bandung</p>
                <p className="text-sm text-muted-foreground">Contributed to event planning and served as Master of Ceremony. Strengthened public speaking and crowd engagement in a creative setting.</p>
              </div>
              <div>
                <h3 className="font-semibold">🎮 Managerial Intern (Valorant Division) — YOUNGERS (FIA)</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2024 – Present | On-site</p>
                <p className="text-sm text-muted-foreground">Supported event and team operations in the e-sports sub-division. Assisted with documentation, strategy, and coordination.</p>
              </div>
            </div>
          </section>

          {/* Leadership & Recognition */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">🧠 Leadership & Recognition</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">🧭 Head of Student Affairs Division (KMS) — HIMA S1 Informatika</h3>
                <p className="text-xs text-muted-foreground/70">Mar 2025 – Present | Bandung</p>
                <p className="text-sm text-muted-foreground">Leads division activities, initiatives, and member development. Serves as a communication bridge between students and academic leaders.</p>
              </div>
              <div>
                <h3 className="font-semibold">🌟 Mahasiswa of The Year 2023 — HIMA S1 Informatika</h3>
                <p className="text-xs text-muted-foreground/70">Dec 2024 – Present | Bandung</p>
                <p className="text-sm text-muted-foreground">Awarded for outstanding contributions to the community and organization. Recognized at Insight & Anniv HIMA IF 2024.</p>
              </div>
              <div>
                <h3 className="font-semibold">🌱 Junior Staff (KMS Division) — BPH HIMAIF</h3>
                <p className="text-xs text-muted-foreground/70">Oct 2024 – Present | Bandung</p>
                <p className="text-sm text-muted-foreground">Contributed to student support initiatives and communication platforms. Worked closely with team to build inclusive student culture.</p>
              </div>
              <div>
                <h3 className="font-semibold">🩺 Vice President — PMR SMAN 12 Bekasi</h3>
                <p className="text-xs text-muted-foreground/70">2021 – 2022 | Bekasi</p>
                <p className="text-sm text-muted-foreground">Led youth health campaigns and student outreach efforts. Supported internal coordination and external representation.</p>
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
              <div>• Participant of UXVidia Competition – Arkavidia 10.0 (Mar 2026)</div>
              <div>• Azure AI Fundamentals (Mar 2026)</div>
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
            <h2 className="text-xl font-semibold text-primary mb-4">🌐 Languages</h2>
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
              <div>• Mahasiswa &apos;23 Of The Year (Dec 2025)</div>
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
