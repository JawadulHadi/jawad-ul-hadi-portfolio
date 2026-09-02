import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B6F47] bg-[#F5F0EB] px-3.5 py-1.5 rounded-full border border-[#EBE3DC]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D2914] mt-4 mb-4 tracking-tight">
            Let's Discuss Your Next Automation Project
          </h2>
          <p className="text-[#6B5344] text-base sm:text-lg">
            Whether you need enterprise RAG implementation, backend architecture, or custom RPA bots, I'm ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5F0EB]/60 rounded-3xl border border-[#EBE3DC] p-8 shadow-[0_4px_20px_rgba(61,41,20,0.04)]">
              <h3 className="text-2xl font-bold text-[#3D2914] mb-4">
                Contact Information
              </h3>
              <p className="text-[#6B5344] text-base mb-8 leading-relaxed">
                Reach out directly via email or connect with me on professional networks. I typically respond within 24 business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBE3DC] text-[#5C3D2E] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B5344]">Email Address</h4>
                    <a href="mailto:jawadulhadicc@gmail.com" className="text-base font-bold text-[#3D2914] hover:text-[#8B6F47] transition-colors">
                      jawadulhadicc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBE3DC] text-[#5C3D2E] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B5344]">Location</h4>
                    <p className="text-base font-bold text-[#3D2914]">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#EBE3DC]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B5344] mb-4">
                  Professional Profiles
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-[#EBE3DC] text-[#3D2914] hover:bg-[#5C3D2E] hover:text-white flex items-center justify-center transition-all shadow-xs"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-[#EBE3DC] text-[#3D2914] hover:bg-[#5C3D2E] hover:text-white flex items-center justify-center transition-all shadow-xs"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-[#EBE3DC] text-[#3D2914] hover:bg-[#5C3D2E] hover:text-white flex items-center justify-center transition-all shadow-xs"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#EBE3DC] p-8 sm:p-10 shadow-[0_4px_20px_rgba(61,41,20,0.06)] relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D2914]">Message Sent Successfully!</h3>
                  <p className="text-[#6B5344] max-w-md mx-auto text-sm sm:text-base">
                    Thank you for reaching out, Jawad will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#5C3D2E] text-white text-sm font-semibold hover:bg-[#3D2914] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#3D2914] mb-2 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-[#8B6F47]" /> Send a Message
                  </h3>
                  <p className="text-sm text-[#6B5344] mb-6">
                    Fill out the form below and I'll get back to you promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5344] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB]/50 border border-[#EBE3DC] text-[#3D2914] placeholder-[#6B5344]/50 focus:outline-none focus:border-[#5C3D2E] focus:bg-white transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5344] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB]/50 border border-[#EBE3DC] text-[#3D2914] placeholder-[#6B5344]/50 focus:outline-none focus:border-[#5C3D2E] focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5344] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or automation requirements..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB]/50 border border-[#EBE3DC] text-[#3D2914] placeholder-[#6B5344]/50 focus:outline-none focus:border-[#5C3D2E] focus:bg-white transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C3D2E] text-white font-semibold text-base hover:bg-[#3D2914] transition-all shadow-[0_4px_20px_rgba(92,61,46,0.2)] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
