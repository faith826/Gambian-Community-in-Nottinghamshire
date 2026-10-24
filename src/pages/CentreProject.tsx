import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  CreditCard,
  Building,
  Users,
  Handshake,
  Award,
  TrendingUp,
  Target,
  DollarSign,
  Check,
  Copy,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Progress } from '../components/ui/Progress';
import { Button } from '../components/ui/Button';

export function CentreProject() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const goal = 500000;
  const currentRaised = 125000;
  const progressPercent = (currentRaised / goal) * 100;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-red)] via-[var(--gwn-blue)] to-[var(--gwn-green)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/aedfb45c5_WhatsAppImage2025-10-31at12335PM.jpeg')",
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
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg" />
              <div className="relative w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                <Heart className="w-12 h-12 text-white drop-shadow-lg fill-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Donations</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Help us build a vibrant community hub that will serve generations to come
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fundraising Progress Bar Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl bg-stone-50/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2 font-medium">Fundraising Progress</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-[var(--gwn-red)]">
                      £{(currentRaised / 1000).toFixed(0)}K
                    </span>
                    <span className="text-2xl text-gray-500 font-medium">
                      / £{(goal / 1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
                <Progress value={progressPercent} max={100} className="h-4 mb-4" />
                <p className="text-center text-gray-600 font-medium">
                  {progressPercent.toFixed(1)}% of our goal reached
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Direct Bank Donation Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-[var(--gwn-red)] to-[var(--gwn-blue)] p-6 text-white text-center">
                <Heart className="w-12 h-12 mx-auto mb-3 fill-white" />
                <h2 className="text-3xl font-bold">Donate & Support Our Ongoing Project</h2>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-xl text-gray-700 mb-6 font-medium">
                    You can pay straight into the bank account:
                  </p>

                  <div className="bg-gradient-to-br from-[var(--gwn-blue)]/10 to-[var(--gwn-green)]/10 rounded-2xl p-8 mb-6 border border-slate-200">
                    <div className="space-y-6">
                      {/* Account Number */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-white/70 rounded-xl">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-[var(--gwn-red)] flex-shrink-0" />
                          <div className="text-left">
                            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                              Account Number
                            </p>
                            <p className="text-3xl font-bold text-gray-900 tracking-wider">
                              74341406
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard('74341406', 'acc')}
                          className="gap-1.5"
                        >
                          {copiedField === 'acc' ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-500" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Sort Code */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-white/70 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Building className="w-6 h-6 text-[var(--gwn-blue)] flex-shrink-0" />
                          <div className="text-left">
                            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                              Sort Code
                            </p>
                            <p className="text-3xl font-bold text-gray-900 tracking-wider">
                              40-35-18
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard('40-35-18', 'sort')}
                          className="gap-1.5"
                        >
                          {copiedField === 'sort' ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-500" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Account Name */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 bg-white/70 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-[var(--gwn-green)] flex-shrink-0" />
                          <div className="text-left">
                            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                              Account Name
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                              Gambian Community In Nottinghamshire
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard('Gambian Community In Nottinghamshire', 'name')
                          }
                          className="gap-1.5"
                        >
                          {copiedField === 'name' ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-500" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Welfare Fund Details */}
                  <div className="bg-white border-2 border-[var(--gwn-red)]/20 rounded-xl p-6 space-y-4 text-left">
                    <p className="text-gray-700 leading-relaxed">
                      From these funds, the community will be making small contributions to its
                      Community Welfare Fund. This is an emergency response fund set aside for
                      community emergencies including death of any of our members.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Your community participation and contribution are a relevant measure of care.
                      The community seeks to be with you when family and friends are inadequate!
                    </p>
                    <div className="border-t-2 border-[var(--gwn-green)]/20 pt-4 mt-4">
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Thank you if you are among those who are making continuing financial
                        contributions and may your Zadaqah Jariya be accepted by Allah (SWT). If you
                        are not, this is an opportunity to earn a worthy reward for one's grave.
                      </p>
                      <p className="text-xl font-bold text-[var(--gwn-red)] italic text-center">
                        Empower your community today by investing in the house of Allah.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Masjid Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Masjid Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quest as a community to secure a future for our children by acquiring a Masjid
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[var(--gwn-blue)]/10 to-[var(--gwn-green)]/10 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Fundraising Journey</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Starting from a Community Account balance of{' '}
                    <span className="font-bold text-[var(--gwn-red)]">£7,000</span>, our community has
                    shown incredible dedication and commitment.
                  </p>
                  <p>
                    Two years ago, we reached an impressive milestone of over{' '}
                    <span className="font-bold text-[var(--gwn-green)]">£20,000</span>, despite the high
                    recurrent expenditure of our rented centre. As a member of the community, you are
                    playing a big part in this ongoing success story.
                  </p>
                  <p className="text-[var(--gwn-blue)] font-semibold italic">
                    Thank you for your contributions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/dae7834a0_482213866_9399722600142430_7242996509337792266_n.jpg"
                alt="Mosque interior with community members in prayer"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-[var(--gwn-red)] to-[var(--gwn-blue)] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Our Goal: £500,000</h3>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Despite our achievements, we are still working towards our community target of
                raising £500,000 as a deposit for our targeted Masjid complex.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <p className="text-2xl font-bold mb-2">Monthly Contribution Request</p>
                <p className="text-lg">
                  We kindly request each member to commit to a monthly contribution of at least £10 or
                  more to make this community goal attainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Centre Features */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Centre Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built facility to host our future religious events and community activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Prayer Facilities',
                description:
                  'Improved spaces to accommodate brothers, sisters, children, and our elders',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: Heart,
                title: 'Marriage Ceremonies',
                description: 'Beautiful venues for celebrating unions according to Islamic traditions',
                gradient: 'from-pink-400 via-pink-500 to-pink-600',
              },
              {
                icon: Handshake,
                title: 'Funeral Services',
                description: 'Dedicated washing facilities for funeral preparations with dignity',
                gradient: 'from-gray-500 via-gray-600 to-gray-700',
              },
              {
                icon: Award,
                title: 'Madrasa & Education',
                description:
                  "Classrooms for Quran recitation, Islamic studies, and children's programs",
                gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
              },
              {
                icon: TrendingUp,
                title: 'Elder Welfare',
                description: 'Dedicated section for supporting and honoring our community elders',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: Target,
                title: 'Accessibility',
                description:
                  'Disability facilities ensuring everyone can participate fully in community life',
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none group bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                        <feature.icon className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Funding Strategy</h2>
            <p className="text-xl text-gray-600">
              We're taking a multi-pronged approach to reach our £500,000 goal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Member Contributions',
                description: 'Regular donations from our 300+ member households',
                gradient: 'from-blue-400 via-blue-500 to-blue-600',
              },
              {
                icon: DollarSign,
                title: 'Grant Applications',
                description: 'Seeking funding from charitable trusts and government programs',
                gradient: 'from-green-400 via-green-500 to-green-600',
              },
              {
                icon: TrendingUp,
                title: 'Social Enterprise',
                description: 'Revenue from facility rentals and community programs',
                gradient: 'from-purple-400 via-purple-500 to-purple-600',
              },
              {
                icon: Heart,
                title: 'Individual Donations',
                description: 'One-time and recurring gifts from supporters',
                gradient: 'from-red-400 via-red-500 to-red-600',
              },
              {
                icon: Handshake,
                title: 'Corporate Partnerships',
                description: 'Sponsorships from local businesses and corporations',
                gradient: 'from-indigo-400 via-indigo-500 to-indigo-600',
              },
              {
                icon: Target,
                title: 'Fundraising Events',
                description: 'Community events and campaigns throughout the year',
                gradient: 'from-orange-400 via-orange-500 to-orange-600',
              },
            ].map((strategy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-300 group border-none bg-stone-50/50">
                  <CardContent className="p-6">
                    <div
                      className={`relative w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${strategy.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm" />
                      <strategy.icon className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{strategy.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Impact */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <p className="text-xl text-gray-600">
              See how your donation helps build our community centre
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { amount: '£25', impact: 'Provides educational materials for one child for a month' },
              { amount: '£50', impact: 'Sponsors a youth mentorship session' },
              { amount: '£100', impact: 'Funds a week of after-school programs' },
              { amount: '£250', impact: 'Supports a family in hardship for a month' },
              { amount: '£500', impact: 'Equips a classroom with learning resources' },
              { amount: '£1,000', impact: 'Furnishes a complete program space' },
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="text-3xl font-bold text-[var(--gwn-red)] min-w-[120px]">
                        {tier.amount}
                      </div>
                      <div className="hidden sm:block flex-1 h-px bg-gray-200" />
                      <div className="text-gray-700 text-lg">{tier.impact}</div>
                    </div>
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
