import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Heart,
  ArrowRight,
  BookOpen,
  Sparkles,
  Handshake,
  House,
  Lightbulb,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const slides = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/334014b53_slide-1.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/95ed5b8a2_slide-2.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/783fbc40c_slide-3.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/50798fbdf_slide-4.jpg',
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Color Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gwn-blue)] via-[var(--gwn-red)] to-[var(--gwn-green)] opacity-90 z-0" />

        {/* Carousel Background Images */}
        {slides.map((slideUrl, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 z-0"
            style={{
              opacity: currentSlide === idx ? 0.25 : 0,
              backgroundImage: `url('${slideUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Building Stronger
              <br />
              Communities Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering ethnic minority communities of African heritage in Nottinghamshire through
              education, cultural preservation, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/CentreProject">
                <Button
                  size="lg"
                  className="bg-white text-[#CE1126] hover:bg-gray-100 text-lg px-8 py-6 gap-2.5 font-bold shadow-2xl transition-all hover:scale-105"
                  style={{ color: '#CE1126', backgroundColor: '#FFFFFF' }}
                >
                  <Heart className="w-5 h-5 fill-[#CE1126] text-[#CE1126]" />
                  <span className="text-[#CE1126] font-bold">Support Our Centre Project</span>
                </Button>
              </Link>
              <Link to="/Community">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0C1C8C] px-8 py-6 text-lg font-bold gap-2 transition-all hover:scale-105"
                  style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
                >
                  <span className="text-white font-bold">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Community Centre Callout Banner */}
      <section className="bg-gradient-to-r from-[var(--gwn-red)] to-[var(--gwn-blue)] py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white drop-shadow-md fill-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Community Centre Project</p>
                <p className="text-white/90">Help us reach our £500,000 fundraising goal</p>
              </div>
            </div>
            <Link to="/CentreProject">
              <Button
                size="lg"
                className="bg-white text-[#CE1126] hover:bg-gray-100 gap-2 shadow-xl font-bold"
                style={{ color: '#CE1126', backgroundColor: '#FFFFFF' }}
              >
                <Heart className="w-5 h-5 fill-[#CE1126] text-[#CE1126]" />
                <span className="text-[#CE1126] font-bold">Donate Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To address youth crime, poverty, educational disadvantage, and lack of community spaces
              while preserving our rich cultural heritage and promoting social cohesion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: House,
                title: '300+ Households',
                description: 'Serving a vibrant community across Nottinghamshire',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Lightbulb,
                title: 'Focused Impact',
                description:
                  'Targeted programs for education, poverty relief, and cultural preservation',
                color: 'from-amber-500 to-orange-600',
              },
              {
                icon: Handshake,
                title: 'Community Partnership',
                description: 'Working with statutory, council, and community organizations',
                color: 'from-purple-500 to-pink-600',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none bg-white group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm" />
                      <item.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs support community members through every stage of life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Education',
                description: 'Youth programs, mentorship, and skills development',
                link: '/Services',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Heart,
                title: 'Poverty Relief',
                description: 'Hardship assistance and bereavement support',
                link: '/Services',
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
              {
                icon: Sparkles,
                title: 'Culture',
                description: 'Cultural preservation and social events',
                link: '/Services',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: Handshake,
                title: 'Community',
                description: 'Building connections and social cohesion',
                link: '/Services',
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={item.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[var(--gwn-red)] group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
                        <item.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/Services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[var(--gwn-red)] text-[var(--gwn-red)] hover:bg-[var(--gwn-red)] hover:text-white gap-2 font-semibold"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gwn-blue)] to-[var(--gwn-green)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you want to volunteer, become a member, or support our centre project, there are
              many ways to get involved and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Contact">
                <Button
                  size="lg"
                  className="bg-white text-[#0C1C8C] hover:bg-gray-100 text-lg px-8 py-6 font-bold shadow-lg"
                  style={{ color: '#0C1C8C', backgroundColor: '#FFFFFF' }}
                >
                  <span className="text-[#0C1C8C] font-bold">Get Involved</span>
                </Button>
              </Link>
              <Link to="/About">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0C1C8C] px-8 py-6 text-lg font-bold"
                  style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}
                >
                  <span className="text-white font-bold">Learn More About Us</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
