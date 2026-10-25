import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

const teamMembers = [
  {
    name: 'Baba Njie',
    title: 'Chairperson',
    bio: 'Baba brings over 15 years of community leadership experience. His vision and dedication have been instrumental in establishing GWN as a cornerstone of support for our community. He is passionate about youth empowerment and creating lasting positive change.',
    image: '',
  },
  {
    name: 'Edrissa Touray',
    title: 'Secretary',
    bio: 'Edrissa manages the organizational operations and communications with exceptional attention to detail. His background in administration and community outreach ensures that GWN runs smoothly and effectively serves our members.',
    image: '',
  },
  {
    name: 'Abdoulie Jah',
    title: 'Community Coordinator',
    bio: "Abdoulie is the heart of our community engagement efforts. He coordinates programs, builds partnerships, and ensures every member feels welcomed and supported. His deep understanding of our community's needs drives our programming.",
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/99793886c_112.jpg',
  },
  {
    name: 'Ismaila Fatty',
    title: 'Facilities Manager',
    bio: 'Ismaila oversees our community spaces and leads the Community Centre Project planning. His project management expertise and commitment to excellence ensure our facilities serve the community effectively and safely.',
    image: '',
  },
];

export function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-green)] to-[var(--gwn-blue)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/d4b6a6459_WhatsAppImage2025-10-31at12334PM.jpeg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Leadership Team</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated leaders working tirelessly to serve and empower our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-none h-full bg-stone-50/50">
                  {member.image ? (
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        style={member.name === 'Abdoulie Jah' ? { objectPosition: 'center top' } : {}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
                        <p className="text-xl text-white/90 font-medium">{member.title}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-80 bg-gradient-to-br from-stone-100 via-slate-100 to-stone-200 flex flex-col justify-between p-6 overflow-hidden border-b border-gray-200/60">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-400 border border-gray-200">
                          <User className="w-12 h-12 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-xl text-[var(--gwn-red)] font-semibold">{member.title}</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href="mailto:info@gambiansnottinghamshire.org.uk"
                        className="flex items-center gap-2 text-[var(--gwn-red)] hover:text-[var(--gwn-blue)] font-medium transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Email</span>
                      </a>
                      <a
                        href="tel:+441159123456"
                        className="flex items-center gap-2 text-[var(--gwn-red)] hover:text-[var(--gwn-blue)] font-medium transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Want to Get Involved?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for passionate volunteers and community leaders. Whether you can
              offer a few hours a month or want to take on a larger role, your contribution makes a
              difference.
            </p>
            <a href="mailto:info@gambiansnottinghamshire.org.uk?subject=Volunteer%20Inquiry">
              <button
                type="button"
                className="bg-white text-[var(--gwn-red)] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                Contact Us to Volunteer
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
