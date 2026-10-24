import React from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Target,
  Eye,
  Users,
  Handshake,
  Award,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-blue)] to-[var(--gwn-green)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/fa8cdec3f_WhatsAppImage2025-10-31at12335PM2.jpeg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The Gambian Community in Nottinghamshire — Growing, Thriving, and United
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Over the past few years, the Gambian Muslim Community in Nottingham has featured a steady
                growth. In our view, Nottingham has become more popular to Gambians during the past
                years, primarily due to the search for greener pastures and more importantly due to the
                cultural and religious integration of Gambians living here.
              </p>
              <p className="text-lg leading-relaxed">
                We have now grown beyond expectation and for that matter, there is an urgent need to
                create our own Community Centre where we can freely practice our religion and hold most
                of our activities. This growth reflects the strong bonds within our community and our
                commitment to supporting one another while maintaining our cultural identity.
              </p>
              <p className="text-lg leading-relaxed">
                Our community is characterized by warmth, hospitality, and a strong sense of mutual
                support. We come from various backgrounds but are united in our shared heritage and our
                desire to build a better future for our families in Nottinghamshire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-xl group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[var(--gwn-red)] via-red-500 to-[var(--gwn-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
                    <Target className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    To develop positive relationships among our community areas — helping people from
                    different localities in Nottingham get to know and understand each other better.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To encourage people in our community to come together for initiatives that improve
                    their lives in the city of Nottingham, while preserving our cultural and religious
                    identity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-xl group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[var(--gwn-green)] via-green-500 to-[var(--gwn-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
                    <Eye className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    A united, self-sustaining Gambian community in Nottinghamshire where every member
                    thrives, our culture is celebrated, and our children grow up with strong values,
                    education, and opportunities.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A community with its own dedicated centre that serves as a permanent sanctuary of
                    faith, cultural heritage, welfare, and empowerment for future generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Centre Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative w-20 h-20 bg-gradient-to-br from-[var(--gwn-red)] to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl mx-auto">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
              <Heart className="w-10 h-10 text-white drop-shadow-lg relative z-10 fill-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Community Centre Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most important initiative to create a permanent home for our community
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[var(--gwn-blue)]/10 to-[var(--gwn-green)]/10 rounded-3xl p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                Our community will embark on a project to acquire a community centre. All of us will put
                trust in Allah and start seeking a new suitable place to host our future religious
                events. Our aim is to buy our existing premises which we currently rent at the moment.
              </p>
              <p className="leading-relaxed">
                We will then improve the prayer facilities to accommodate the brothers and sisters,
                children as well as the Elders welfare section.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Prayer Facilities',
                description:
                  'Dedicated spaces for brothers and sisters to practice their faith freely',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Heart,
                title: 'Marriage Ceremonies',
                description: 'Beautiful venues for celebrating unions according to our traditions',
                gradient: 'from-pink-400 via-pink-500 to-pink-600',
              },
              {
                icon: Handshake,
                title: 'Funeral Services',
                description:
                  'Washing facilities and respectful spaces for funeral preparations',
                gradient: 'from-gray-500 via-gray-600 to-gray-700',
              },
              {
                icon: Award,
                title: "Children's Education",
                description:
                  'Classrooms for teaching our children about faith, culture, and values',
                gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
              },
              {
                icon: TrendingUp,
                title: 'Elder Welfare',
                description: 'Dedicated section for supporting and honoring our elders',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: Target,
                title: 'Accessibility',
                description: 'Disability facilities ensuring everyone can participate fully',
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none group bg-stone-50/50">
                  <CardContent className="p-6">
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                      <feature.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Community Unity',
                description:
                  'Bringing people together from different localities to build strong relationships',
              },
              {
                title: 'Faith & Culture',
                description: 'Preserving our religious practices and cultural heritage',
              },
              {
                title: 'Mutual Support',
                description:
                  'Supporting each other through challenges and celebrating together in success',
              },
              {
                title: 'Progress Together',
                description: 'Working collectively to improve lives and create opportunities',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-none bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[var(--gwn-blue)] to-[var(--gwn-green)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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
