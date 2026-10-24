import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Heart,
  Sparkles,
  Church,
  Moon,
  GraduationCap,
  CircleAlert,
  Users,
  HandHeart,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const servicesData = [
  {
    icon: BookOpen,
    title: 'Education Programs',
    color: 'from-blue-400 via-blue-500 to-blue-600',
    items: [
      'Youth mentorship and tutoring programs',
      'Skills development workshops',
      'After-school support programs',
      'Adult education and literacy classes',
      'Career guidance and counseling',
      'University application assistance',
    ],
  },
  {
    icon: Heart,
    title: 'Poverty Relief',
    color: 'from-red-400 via-red-500 to-red-600',
    items: [
      'Emergency hardship grants',
      'Bereavement support services',
      'Food bank partnerships',
      'Housing assistance and advocacy',
      'Utility bill support',
      'Financial literacy workshops',
    ],
  },
  {
    icon: Sparkles,
    title: 'Cultural Preservation',
    color: 'from-green-400 via-green-500 to-green-600',
    items: [
      'Traditional cultural events and celebrations',
      'Language classes for children',
      'Cultural arts and music programs',
      'Heritage documentation projects',
      'Intergenerational storytelling sessions',
      'Traditional dance and drumming',
    ],
  },
  {
    icon: Church,
    title: 'Religious Services',
    color: 'from-purple-400 via-purple-500 to-purple-600',
    items: [
      'Daily prayer facilities for brothers and sisters',
      'Friday Jummah prayers and sermons',
      'Islamic education and Quran classes',
      'Eid celebrations and religious events',
      'Marriage ceremonies according to Islamic traditions',
      'Funeral washing facilities and support',
    ],
  },
  {
    icon: Moon,
    title: 'Ramadan Programs',
    color: 'from-indigo-400 via-indigo-500 to-indigo-600',
    items: [
      'Daily Iftar (breaking fast) gatherings at the Mosque',
      'Taraweeh prayers during Ramadan',
      'Community meals fostering family cohesion',
      'Monthly program bringing families together',
      'Spiritual support and guidance during the holy month',
      'Zakat (charity) distribution to those in need',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Madrasa (Islamic School)',
    color: 'from-teal-400 via-teal-500 to-teal-600',
    items: [
      "Children's Quran recitation and memorization",
      'Annual Quran recitation competitions',
      'Prize-giving ceremonies for students',
      'Islamic studies and Arabic language classes',
      'Parent involvement in organizing events',
      'Sustained annual program for the past 3+ years',
    ],
  },
  {
    icon: CircleAlert,
    title: 'Disaster & Emergency Support',
    color: 'from-orange-400 via-orange-500 to-orange-600',
    items: [
      'Emergency assistance grants',
      'Crisis intervention services',
      'Connection to emergency housing',
      'Travel assistance for family emergencies',
      'Coordination with relief organizations',
      'Community emergency preparedness',
    ],
  },
  {
    icon: Users,
    title: 'Community Building',
    color: 'from-pink-400 via-pink-500 to-pink-600',
    items: [
      'Social events and gatherings',
      'Community sports leagues',
      'Family fun days',
      'Networking opportunities',
      'Volunteer coordination',
      'Community advocacy',
    ],
  },
];

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-blue)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/d770a67ec_WhatsAppImage2025-10-31at12334PM1.jpeg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support and programs designed to uplift and empower our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none group bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                        <service.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[var(--gwn-red)] rounded-full mt-2 flex-shrink-0 shadow-sm" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Programs</h2>
            <p className="text-xl text-gray-600">
              Special initiatives that strengthen our community bonds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ramadan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-white">
                <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Moon className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ramadan Programs</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An annual month-long initiative that brings families together at the Mosque for
                    Iftar, prayers, and shared meals, fostering community cohesion and spiritual
                    growth.
                  </p>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">
                    <p className="text-indigo-800 font-semibold italic text-sm">
                      "Ramadan Mubarak! May Allah bless you abundantly in this blessed month."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Madrasa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-white">
                <div className="relative h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <GraduationCap className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Madrasa Programs</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Annual children's Quran recitation and prize-giving ceremony held at Greenway
                    Community Centre. Parents actively participate in organizing these events,
                    sustaining this tradition for over 3 years.
                  </p>
                  <div className="flex items-center gap-2 text-teal-700 font-semibold text-sm bg-teal-50 p-4 rounded-lg border border-teal-100">
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                    <span>Sustained program since 2017</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Masjid Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-white">
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Church className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Masjid Services</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our quest to secure a future for our children by acquiring a dedicated Masjid.
                    The community has grown its fundraising from £7,000 to over £20,000 through
                    collective commitment.
                  </p>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                    <p className="text-purple-800 font-semibold text-sm">
                      Supporting the Masjid Project with monthly donations of £10 or more
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Access Our Services */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Access Our Services</h2>
            <p className="text-xl text-gray-600">
              Getting support is easy — we're here to help every step of the way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                step: '1',
                title: 'Become a Member',
                description:
                  'Join our community of 300+ households and gain access to all our programs and services',
              },
              {
                icon: HandHeart,
                step: '2',
                title: 'Reach Out',
                description:
                  'Contact us via phone, email, or visit our centre to discuss your needs with our team',
              },
              {
                icon: Heart,
                step: '3',
                title: 'Get Support',
                description:
                  'Work with our dedicated team to access the services and programs that best fit your needs',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-none bg-white">
                  <CardContent className="p-8">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-blue)] rounded-full opacity-20" />
                      <div className="relative w-full h-full bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-blue)] rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[var(--gwn-red)] rounded-full flex items-center justify-center font-bold text-[var(--gwn-red)] shadow-sm">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
