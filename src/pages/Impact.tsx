import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, BookOpen, Calendar, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-blue)] via-[var(--gwn-red)] to-[var(--gwn-green)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/215354c65_482213866_9399722600142430_7242996509337792266_n.jpg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Community Impact</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Measuring the real difference we're making in people's lives every day
            </p>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600">Every statistic represents real lives changed</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: '300+',
                label: 'Households Connected',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Heart,
                number: '£50,000+',
                label: 'Emergency Relief Distributed',
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
              {
                icon: BookOpen,
                number: '200+',
                label: 'Students Mentored',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: Calendar,
                number: '150+',
                label: 'Community Events Hosted',
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-none bg-stone-50/50 group">
                  <CardContent className="p-8">
                    <div
                      className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-sm" />
                      <stat.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In-depth Impact Areas */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                icon: BookOpen,
                title: 'Education & Literacy',
                stats: '200+ students supported annually',
                description:
                  'Our education programs have helped improve school attendance, literacy rates, and academic achievement. We provide tutoring, mentorship, and resources to students from primary through university levels.',
                achievements: [
                  '15% increase in GCSE pass rates among participants',
                  '50+ students received university application support',
                  'After-school programs serving 100+ children weekly',
                ],
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Users,
                title: 'Social Inclusion',
                stats: '300+ households connected',
                description:
                  "We've created a vibrant, connected community where members support each other and build lasting relationships. Our cultural events and social programs bring people together.",
                achievements: [
                  'Monthly community events with 150+ attendees',
                  '25+ families assisted with integration services',
                  'Interfaith dialogue programs building bridges',
                ],
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
              {
                icon: Heart,
                title: 'Poverty Relief',
                stats: '£50,000+ in hardship grants distributed',
                description:
                  'Our poverty relief programs provide critical financial assistance and support services to families facing hardship, including bereavement support and emergency aid.',
                achievements: [
                  '100+ families received emergency assistance',
                  'Food bank partnerships serving 200+ individuals',
                  'Housing advocacy supporting 30+ families',
                ],
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
              {
                icon: Target,
                title: 'Youth Crime Prevention',
                stats: '80+ young people in mentorship programs',
                description:
                  "Through mentorship, skills training, and positive activities, we're helping young people make better choices and build brighter futures.",
                achievements: [
                  'Youth mentorship program with 40 active mentors',
                  'Sports and arts programs engaging 60+ youth',
                  'Career workshops attended by 100+ participants',
                ],
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-none group bg-white">
                  <CardContent className="p-8 md:p-10">
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-3">
                        <div
                          className={`relative w-24 h-24 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
                          <area.icon className="w-12 h-12 text-white drop-shadow-lg relative z-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-[var(--gwn-red)] font-semibold text-sm">{area.stats}</p>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                          <ul className="space-y-3">
                            {area.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[var(--gwn-green)] rounded-full mt-2 flex-shrink-0 shadow-sm" />
                                <span className="text-gray-700">{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories, Real Impact */}
      <section className="py-20 bg-gradient-to-br from-[var(--gwn-green)] to-[var(--gwn-blue)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Real Stories, Real Impact</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Behind every statistic is a person whose life has been changed. Our community members'
              success stories inspire us to continue our mission every day.
            </p>
            <blockquote className="text-2xl italic text-white/90 border-l-4 border-white pl-6 mb-8 text-left max-w-3xl mx-auto">
              "GWN gave my family hope when we needed it most. The education support helped my
              children thrive in school, and the community we found here became our extended family."
            </blockquote>
            <p className="text-white/80 font-medium">— Community Member</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
