import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AfricanPattern, GeometricAccent } from './components/AfricanPattern';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="font-serif text-2xl tracking-tight">
              MindSpace<span className="text-emerald-700">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#courses" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">Courses</a>
              <a href="#about" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">About</a>
              <a href="#team" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">Team</a>
              <a href="#articles" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">Articles</a>
              <a href="#contact" className="text-sm tracking-wide hover:text-neutral-600 transition-colors">Contact</a>
              <button className="px-6 py-2.5 bg-emerald-800 text-white text-sm tracking-wide hover:bg-emerald-900 transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="px-6 py-6 space-y-4">
              <a href="#courses" className="block text-sm tracking-wide hover:text-neutral-600">Courses</a>
              <a href="#about" className="block text-sm tracking-wide hover:text-neutral-600">About</a>
              <a href="#team" className="block text-sm tracking-wide hover:text-neutral-600">Team</a>
              <a href="#articles" className="block text-sm tracking-wide hover:text-neutral-600">Articles</a>
              <a href="#contact" className="block text-sm tracking-wide hover:text-neutral-600">Contact</a>
              <button className="w-full px-6 py-2.5 bg-emerald-800 text-white text-sm tracking-wide hover:bg-emerald-900 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <AfricanPattern variant="triangles" className="text-neutral-900" />
        </div>
        <GeometricAccent position="top-right" color="emerald" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight">
                  Understanding the Self Through a Cultural Lens
                </h1>
                <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
                  Psychoanalysis rooted in Black experience, identity, and mental health awareness.
                  Explore courses that honor cultural context and foster deep reflection.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-emerald-800 text-white tracking-wide hover:bg-emerald-900 transition-colors">
                  Explore Courses
                </button>
                <button className="px-8 py-4 border-2 border-black text-black tracking-wide hover:bg-black hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-neutral-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760259482054-1fb8fc604232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Woman in contemplation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-amber-600/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-20 lg:py-32 px-6 lg:px-12 bg-stone-50 relative">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <AfricanPattern variant="circles" className="text-emerald-900" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-2xl mb-16">
            <div className="w-16 h-1 bg-amber-600 mb-6"></div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
              Featured Courses
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Thoughtfully designed programs that integrate psychoanalytic theory with cultural consciousness and contemporary mental health practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Foundations of Black Psychoanalysis",
                description: "An introduction to psychoanalytic theory through the lens of Black identity, trauma, and resilience.",
                duration: "8 weeks",
                level: "Beginner",
                image: "https://images.unsplash.com/photo-1754037783933-c25ff9f68f87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                accent: "emerald"
              },
              {
                title: "Race, Identity & the Unconscious",
                description: "Exploring how racial identity shapes psychological development and the therapeutic relationship.",
                duration: "10 weeks",
                level: "Intermediate",
                image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                accent: "red"
              },
              {
                title: "Intergenerational Trauma & Healing",
                description: "Understanding how historical trauma impacts present-day mental health and pathways to healing.",
                duration: "6 weeks",
                level: "All Levels",
                image: "https://images.unsplash.com/photo-1630952588467-3e7bb7b2b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                accent: "amber"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white overflow-hidden group cursor-pointer border border-neutral-200 hover:border-neutral-900 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-0 left-0 w-full h-1 ${
                    course.accent === 'emerald' ? 'bg-emerald-700' :
                    course.accent === 'red' ? 'bg-red-800' :
                    'bg-amber-600'
                  }`}></div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 tracking-wide">
                    <span>{course.duration}</span>
                    <span>·</span>
                    <span>{course.level}</span>
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {course.description}
                  </p>
                  <button className={`text-sm tracking-wide underline underline-offset-4 transition-colors ${
                    course.accent === 'emerald' ? 'hover:text-emerald-700' :
                    course.accent === 'red' ? 'hover:text-red-800' :
                    'hover:text-amber-600'
                  }`}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 relative">
        <GeometricAccent position="bottom-left" color="amber" />
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-emerald-700 mb-2"></div>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
                Our Mission & Perspective
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  MindSpace was founded on the belief that mental health understanding must be rooted
                  in cultural context. Traditional psychoanalytic theory often overlooks the unique
                  experiences of Black individuals and communities.
                </p>
                <p>
                  We center Black perspectives, histories, and narratives in our approach to
                  psychoanalysis, creating space for authentic exploration of identity, trauma,
                  resistance, and healing.
                </p>
                <p>
                  Our courses integrate classical psychoanalytic concepts with contemporary research
                  on racial trauma, cultural psychology, and intersectional identity—preparing students
                  to practice with cultural humility and depth.
                </p>
              </div>
              <button className="px-8 py-4 border-2 border-emerald-800 text-emerald-800 tracking-wide hover:bg-emerald-800 hover:text-white transition-colors">
                Read Our Story
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605602517387-ec78b947335e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                  <AfricanPattern variant="lines" className="text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-red-800/20 -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32 px-6 lg:px-12 bg-stone-50 relative">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <AfricanPattern variant="chevron" className="text-amber-900" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-2xl mb-16">
            <div className="w-16 h-1 bg-red-800 mb-6"></div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our faculty brings together decades of clinical experience, academic excellence,
              and deep commitment to culturally-informed psychoanalytic practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Amara Johnson",
                role: "Clinical Director & Lead Instructor",
                image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              },
              {
                name: "Dr. Marcus Williams",
                role: "Associate Professor of Psychoanalysis",
                image: "https://images.unsplash.com/photo-1605602517387-ec78b947335e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              },
              {
                name: "Dr. Nia Thompson",
                role: "Trauma Specialist & Researcher",
                image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              },
              {
                name: "Dr. James Carter",
                role: "Cultural Psychology Instructor",
                image: "https://images.unsplash.com/photo-1614700308520-bd630ab82471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              }
            ].map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 border-4 border-white shadow-md group-hover:border-amber-600 transition-all duration-300">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <AfricanPattern variant="triangles" className="text-white" />
        </div>
        <GeometricAccent position="top-right" color="amber" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-16 h-1 bg-amber-400 mb-6 mx-auto"></div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
              Student Voices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "This course transformed how I understand myself and my practice. The cultural specificity gave me language for experiences I'd never been able to articulate.",
                author: "Jasmine R.",
                role: "Clinical Psychology Student"
              },
              {
                quote: "Finally, a psychoanalytic program that doesn't ask me to leave my identity at the door. The faculty truly understands intersectionality.",
                author: "Kevin M.",
                role: "Licensed Therapist"
              },
              {
                quote: "The depth of scholarship combined with lived experience makes this unlike any other program. I feel seen and challenged in the best ways.",
                author: "Aisha L.",
                role: "Social Work Graduate"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 lg:p-10 border border-white/10">
                <p className="text-lg leading-relaxed mb-6 italic text-white/90">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/20 pt-6">
                  <p className="tracking-wide mb-1 text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 lg:py-32 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="max-w-2xl mb-6 md:mb-0">
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                Latest Articles
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Reflections, research, and insights on Black mental health and psychoanalytic practice.
              </p>
            </div>
            <button className="text-sm tracking-wide underline underline-offset-4 hover:text-emerald-700 transition-colors">
              View All Articles →
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                category: "Theory",
                title: "Rethinking the Oedipus Complex Through Black Family Structures",
                excerpt: "How traditional psychoanalytic concepts need reframing when we center Black kinship patterns and extended family systems.",
                author: "Dr. Amara Johnson",
                date: "March 28, 2026",
                readTime: "8 min read",
                accent: "emerald"
              },
              {
                category: "Practice",
                title: "On Being Both Healer and Wounded: The Black Therapist's Journey",
                excerpt: "Navigating the complexity of providing care while processing our own experiences of racial trauma.",
                author: "Dr. Marcus Williams",
                date: "March 15, 2026",
                readTime: "6 min read",
                accent: "red"
              },
              {
                category: "Research",
                title: "Intergenerational Trauma: What the Data Shows Us",
                excerpt: "New research on how historical trauma manifests in present-day mental health outcomes for Black Americans.",
                author: "Dr. Nia Thompson",
                date: "March 2, 2026",
                readTime: "10 min read",
                accent: "amber"
              },
              {
                category: "Reflection",
                title: "Beyond Resilience: Imagining Black Mental Health Futures",
                excerpt: "Moving past narratives of survival toward visions of thriving, rest, and collective care.",
                author: "Dr. James Carter",
                date: "February 18, 2026",
                readTime: "7 min read",
                accent: "emerald"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white p-8 lg:p-10 group cursor-pointer hover:shadow-lg transition-all border-l-4 border-transparent hover:border-current" style={{
                color: article.accent === 'emerald' ? '#065f46' :
                       article.accent === 'red' ? '#991b1b' :
                       '#d97706'
              }}>
                <div className="space-y-4">
                  <div className="text-xs tracking-widest uppercase opacity-70">
                    {article.category}
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl tracking-tight leading-tight text-black group-hover:opacity-80 transition-opacity">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 pt-4 border-t border-neutral-200">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category-Based Content Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 relative">
        <GeometricAccent position="top-left" color="red" />
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="w-16 h-1 bg-amber-600 mb-6"></div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
              Explore by Topic
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Identity & Self",
                count: "24 articles",
                accent: "emerald"
              },
              {
                category: "Trauma & Healing",
                count: "18 articles",
                accent: "red"
              },
              {
                category: "Clinical Practice",
                count: "31 articles",
                accent: "amber"
              },
              {
                category: "Research & Theory",
                count: "15 articles",
                accent: "emerald"
              },
              {
                category: "Community Care",
                count: "12 articles",
                accent: "amber"
              },
              {
                category: "Cultural Context",
                count: "27 articles",
                accent: "red"
              },
              {
                category: "Student Resources",
                count: "19 articles",
                accent: "emerald"
              },
              {
                category: "Book Reviews",
                count: "8 articles",
                accent: "amber"
              }
            ].map((category, index) => (
              <button
                key={index}
                className={`p-6 border-2 border-neutral-200 hover:border-current transition-all text-left group relative overflow-hidden ${
                  category.accent === 'emerald' ? 'hover:bg-emerald-50 hover:border-emerald-700' :
                  category.accent === 'red' ? 'hover:bg-red-50 hover:border-red-800' :
                  'hover:bg-amber-50 hover:border-amber-600'
                }`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full transition-all group-hover:w-2 ${
                  category.accent === 'emerald' ? 'bg-emerald-700' :
                  category.accent === 'red' ? 'bg-red-800' :
                  'bg-amber-600'
                }`}></div>
                <div className="space-y-2 ml-2">
                  <h3 className="text-lg tracking-wide group-hover:tracking-tight transition-all">
                    {category.category}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {category.count}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-stone-50 relative">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <AfricanPattern variant="circles" className="text-red-900" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="w-16 h-1 bg-red-800 mb-6"></div>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Everything you need to know about our programs, approach, and community.
              </p>
              <button className="px-8 py-4 border-2 border-emerald-800 text-emerald-800 tracking-wide hover:bg-emerald-800 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Who are these courses designed for?",
                  answer: "Our programs are designed for mental health professionals, students, and anyone interested in understanding psychoanalysis through a culturally-informed lens. This includes therapists, counselors, social workers, psychologists, and community organizers working in Black communities."
                },
                {
                  question: "Do I need prior knowledge of psychoanalysis?",
                  answer: "No prior knowledge is required for our foundational courses. We offer programs for all levels, from complete beginners to experienced practitioners seeking to deepen their cultural competency."
                },
                {
                  question: "How are the courses delivered?",
                  answer: "We offer both live virtual seminars and self-paced online courses. Live sessions include small group discussions, case consultations, and direct interaction with faculty. Self-paced courses include video lectures, readings, and reflective exercises."
                },
                {
                  question: "What makes this approach different?",
                  answer: "Traditional psychoanalysis often universalizes white, European experiences. We center Black perspectives, incorporate research on racial trauma, and examine how culture shapes psychological development. Our faculty brings both lived experience and clinical expertise."
                },
                {
                  question: "Will I receive a certificate?",
                  answer: "Yes, students who complete our courses receive a certificate of completion. Our clinical programs also offer continuing education credits for licensed professionals."
                },
                {
                  question: "What is the time commitment?",
                  answer: "Course lengths vary from 6-12 weeks. Most courses require 3-5 hours per week for live sessions, readings, and reflective work. Self-paced courses offer more flexibility."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 overflow-hidden hover:border-emerald-700 transition-colors"
                >
                  <button
                    className="w-full p-6 lg:p-8 flex items-start justify-between gap-4 text-left hover:bg-neutral-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="font-serif text-xl tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 transition-transform text-emerald-700 ${
                        activeFaq === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-neutral-600 leading-relaxed border-t border-emerald-700/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 relative">
        <GeometricAccent position="bottom-right" color="emerald" />
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-1 bg-amber-600 mb-6"></div>
                <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Have questions about our programs or want to learn more?
                  We're here to help you begin your journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-800" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Email</div>
                    <div>info@mindspace.edu</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="text-red-800" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Phone</div>
                    <div>(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-amber-700" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Location</div>
                    <div>Virtual & In-Person<br />New York, NY</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 focus:outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 focus:outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm tracking-wide mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 focus:outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 focus:outline-none focus:border-emerald-700 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-800 text-white tracking-wide hover:bg-emerald-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <AfricanPattern variant="triangles" className="text-white" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="font-serif text-2xl tracking-tight">
                MindSpace<span className="text-amber-500">.</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Psychoanalysis rooted in Black experience and cultural consciousness.
              </p>
              <div className="flex gap-2">
                <div className="w-8 h-1 bg-emerald-600"></div>
                <div className="w-8 h-1 bg-red-700"></div>
                <div className="w-8 h-1 bg-amber-500"></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-4 text-neutral-400">PROGRAMS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Certificates</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Continuing Ed</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Workshops</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-4 text-neutral-400">ABOUT</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Faculty</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest mb-4 text-neutral-400">CONNECT</h3>
              <div className="flex items-center gap-4 mb-6">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="text-sm text-neutral-400">
                <p>Subscribe to our newsletter</p>
                <div className="mt-3 flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-emerald-600 transition-colors text-sm"
                  />
                  <button className="px-4 py-2 bg-emerald-700 text-white hover:bg-emerald-800 transition-colors text-sm">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
            <div>© 2026 MindSpace. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
