import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ full_name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitting(true);
    setTimeout(() => {
      setNewsletterSubmitting(false);
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-green)] to-[var(--gwn-blue)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/aab30c3fd_WhatsAppImage2025-10-31at12333PM.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out to learn more about our programs or get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Info Columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Phone */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[var(--gwn-red)] via-red-500 to-[var(--gwn-blue)] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                      <Phone className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">Phone</h3>
                      <a
                        href="tel:+447123456789"
                        className="text-[var(--gwn-red)] hover:text-[var(--gwn-blue)] transition-colors font-medium"
                      >
                        +44 712 345 6789
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Contact us anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[var(--gwn-blue)] via-blue-500 to-[var(--gwn-green)] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                      <Mail className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                      <a
                        href="mailto:info@gambiansnottinghamshire.org.uk"
                        className="text-[var(--gwn-red)] hover:text-[var(--gwn-blue)] transition-colors font-medium break-all text-sm sm:text-base"
                      >
                        info@gambiansnottinghamshire.org.uk
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We respond promptly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-[var(--gwn-green)] via-green-500 to-[var(--gwn-red)] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                      <MapPin className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">Location</h3>
                      <p className="text-gray-700 font-medium">
                        Nottinghamshire
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <Card className="border-none shadow-xl bg-gradient-to-br from-[var(--gwn-blue)]/10 to-[var(--gwn-green)]/10 border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Find Us on Social Media</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Follow our Facebook page for the latest updates, events, and community news.
                  </p>
                  <a
                    href="https://www.facebook.com/GambianCommunityNottinghamshire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gwn-red)] hover:text-[var(--gwn-blue)] font-bold text-sm inline-flex items-center gap-1 transition-colors"
                  >
                    Visit Our Facebook Page →
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="border-none shadow-2xl bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-bold">Send Us a Message</CardTitle>
                  <p className="text-gray-600 mt-2">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-2">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="full_name"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="full_name"
                            value={formData.full_name}
                            onChange={(e) =>
                              setFormData({ ...formData, full_name: e.target.value })
                            }
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+44 ..."
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            placeholder="Inquiry / Membership / Support"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          placeholder="How can we help you or how would you like to get involved?"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--gwn-red)] hover:bg-[#b00e1f] text-white gap-2 py-3 text-base font-bold shadow-lg"
                      >
                        <Send className="w-5 h-5" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--gwn-blue)] to-[var(--gwn-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for updates on events, programs, and community news
            </p>

            {newsletterSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-lg rounded-xl p-8 max-w-md mx-auto"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
                <p className="text-xl font-bold">Thank you for subscribing!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white h-11"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={newsletterSubmitting}
                    className="bg-white text-[#0C1C8C] hover:bg-gray-100 font-bold px-6 shadow-md"
                    style={{ color: '#0C1C8C', backgroundColor: '#FFFFFF' }}
                  >
                    <span className="text-[#0C1C8C] font-bold">Subscribe</span>
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
