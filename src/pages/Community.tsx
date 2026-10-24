import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Users,
  Globe,
  Heart,
  BookOpen,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Handshake,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Community() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-blue)] via-[var(--gwn-red)] to-[var(--gwn-green)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e2/deef30958_WhatsAppImage2025-10-31at12335PM1.jpeg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Community</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Celebrating our heritage, strengthening our bonds, and building a brighter future together
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Gambians in Nottinghamshire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              About Gambians in Nottinghamshire
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/4e10cf891_113.jpg"
                  alt="Community gathering"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Gambian Community in Nottinghamshire represents a vibrant and growing population
                  of Gambian nationals and people of Gambian heritage living across the county. Our
                  community is diverse, dynamic, and deeply rooted in the rich cultural traditions of
                  The Gambia while actively contributing to the social, economic, and cultural fabric of
                  Nottinghamshire.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are a community of families, professionals, students, and entrepreneurs who have
                  made Nottinghamshire our home. Despite being far from our homeland, we maintain strong
                  connections to our Gambian roots through cultural celebrations, traditional
                  practices, and community gatherings that bring us together and keep our heritage alive
                  for future generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our community faces unique challenges including integration barriers, educational
                  disparities, economic hardships, and the need for culturally appropriate support
                  services. Through unity, mutual support, and strategic partnerships, we work together
                  to overcome these obstacles and build prosperous futures for our families.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                number: '300+',
                label: 'Member Households',
                description: 'Growing community across Nottinghamshire',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Globe,
                number: '15+',
                label: 'Partner Organizations',
                description: 'Collaborating for community impact',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: Heart,
                number: '500+',
                label: 'Community Members',
                description: 'United in purpose and heritage',
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-none group bg-white">
                  <CardContent className="p-8">
                    <div
                      className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-sm" />
                      <stat.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <div className="text-4xl font-bold text-[var(--gwn-red)] mb-2">{stat.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Celebrating Heritage Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--gwn-green)]/10 to-[var(--gwn-blue)]/10 rounded-3xl p-8 md:p-12 mb-16 border border-emerald-100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Celebrating Our Heritage</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Gambian culture is characterized by warmth, hospitality, and a strong sense of
                  community — values we carry with us and share in Nottinghamshire. Our traditions
                  include vibrant music and dance, rich oral storytelling, traditional ceremonies, and
                  delicious cuisine that brings people together.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We celebrate significant occasions such as Gambian Independence Day, Eid
                  celebrations, naming ceremonies, and traditional weddings. These events not only
                  maintain our cultural identity but also provide opportunities to share our heritage
                  with the wider Nottinghamshire community, promoting understanding and cultural
                  exchange.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070"
                  alt="Cultural celebration"
                  className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Community Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through targeted programs and sustainable initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: BookOpen,
                title: 'Education Excellence Initiative',
                image:
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/d770a67ec_WhatsAppImage2025-10-31at12334PM1.jpeg',
                description:
                  'Comprehensive educational support from primary through university level',
                details: [
                  'After-school tutoring and homework clubs serving 100+ students',
                  'University application mentorship and guidance',
                  'Adult literacy and ESOL (English for Speakers of Other Languages) classes',
                  'Educational workshops for parents on the UK education system',
                  'Scholarship fund for higher education',
                  'Career guidance and professional development programs',
                ],
              },
              {
                icon: Heart,
                title: 'Community Welfare Program',
                image:
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/aab30c3fd_WhatsAppImage2025-10-31at12333PM.jpeg',
                description: 'Supporting families through hardship with dignity and compassion',
                details: [
                  'Emergency financial assistance for families in crisis',
                  'Bereavement support including funeral cost assistance',
                  'Food bank partnerships and food distribution',
                  'Housing advocacy and homelessness prevention',
                  'Healthcare navigation and support',
                  'Mental health awareness and counseling services',
                ],
              },
              {
                icon: Sparkles,
                title: 'Cultural Heritage Project',
                image:
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/deef30958_WhatsAppImage2025-10-31at12335PM1.jpeg',
                description: 'Preserving and celebrating our rich Gambian culture',
                details: [
                  'Annual Gambian Independence Day celebration',
                  'Traditional music and dance workshops',
                  'Mandinka, Wolof, and Fula language classes for children',
                  'Cultural festivals showcasing Gambian arts, crafts, and cuisine',
                  'Intergenerational storytelling sessions',
                  'Traditional wedding ceremony support and coordination',
                ],
              },
              {
                icon: Users,
                title: 'Youth Development Program',
                image:
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/4425bf8b0_WhatsAppImage2025-10-31at12334PM2.jpeg',
                description: 'Empowering young people to reach their full potential',
                details: [
                  'One-on-one mentorship with community leaders',
                  'Leadership and personal development workshops',
                  'Sports clubs and recreational activities',
                  'Arts and music programs',
                  'Violence prevention and conflict resolution training',
                  'Entrepreneurship workshops for young adults',
                ],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border-none bg-stone-50/50">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-3">
                      {project.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[var(--gwn-green)] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Community Centre Feature Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-blue)] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-12 h-12 fill-white text-white" />
                  <h3 className="text-3xl font-bold">Community Centre Project</h3>
                </div>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Our most ambitious project to date — a purpose-built community centre that will serve
                  as a permanent home for all our programs and become a beacon of hope for generations
                  to come.
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  The centre will feature modern classrooms, a library, IT facilities, multipurpose
                  halls, prayer spaces, counseling rooms, and recreational areas. It will be a place
                  where our community can gather, learn, celebrate, and support one another.
                </p>
                <Link to="/CentreProject">
                  <Button
                    size="lg"
                    className="bg-white text-[#CE1126] hover:bg-gray-100 gap-2 font-bold shadow-lg"
                    style={{ color: '#CE1126', backgroundColor: '#FFFFFF' }}
                  >
                    <span className="text-[#CE1126] font-bold">Learn More About the Project</span>
                  </Button>
                </Link>
              </div>

              <div>
                <Card className="border-none bg-white text-gray-900 shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-[var(--gwn-red)] mb-2">£500,000</div>
                      <p className="text-gray-600 font-medium">Fundraising Goal</p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { icon: Target, label: 'Purpose-built facility' },
                        { icon: Users, label: 'Serving 300+ households' },
                        { icon: Award, label: 'Multi-generational impact' },
                        { icon: TrendingUp, label: 'Sustainable community hub' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 bg-[var(--gwn-red)]/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-[var(--gwn-red)]" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our community and make a lasting difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Become a Member',
                description:
                  'Join our growing community of 300+ households. Membership provides access to all our programs, services, and events, while contributing to the collective strength of our community.',
                action: 'Join Now',
                link: '/Contact',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Heart,
                title: 'Volunteer Your Time',
                description:
                  'Share your skills, experience, and time. We need tutors, mentors, event organizers, translators, and individuals passionate about making a difference in people’s lives.',
                action: 'Volunteer',
                link: '/Contact',
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
              {
                icon: Target,
                title: 'Support the Centre',
                description:
                  'Help us build our community centre through donations, fundraising, or corporate sponsorship. Every contribution brings us closer to creating a permanent home for our community.',
                action: 'Donate',
                link: '/CentreProject',
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none group bg-white">
                  <CardContent className="p-8 text-center flex flex-col h-full justify-between">
                    <div>
                      <div
                        className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-2xl blur-sm" />
                        <card.icon className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                    </div>
                    <Link to={card.link}>
                      <Button className="bg-[var(--gwn-red)] hover:bg-[#b00e1f] text-white w-full py-3 font-semibold">
                        {card.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Working Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We collaborate with statutory bodies, local councils, charitable organizations, and
              community groups to maximize our impact and ensure comprehensive support for our
              community.
            </p>
            <div className="bg-gradient-to-br from-[var(--gwn-blue)]/10 to-[var(--gwn-green)]/10 rounded-2xl p-8 border border-slate-200">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our partnerships include Nottinghamshire County Council, local NHS trusts, schools and
                colleges, faith organizations, housing associations, and various community support
                services. Together, we create a network of support that addresses the diverse needs of
                our community members at every stage of life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
