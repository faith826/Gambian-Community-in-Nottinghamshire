import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'news' | 'events' | 'announcements' | 'success_stories';
  created_date: string;
  author: string;
  excerpt: string;
  content: string;
  image_url: string;
}

const initialPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'masjid-centre-project-update',
    title: 'Community Centre Project: Reaching Our £125,000 Milestone',
    category: 'announcements',
    created_date: '2025-10-15',
    author: 'Baba Njie',
    excerpt:
      'We are delighted to announce that through the unwavering dedication of our 300+ households, we have raised £125,000 toward our £500,000 deposit goal for the permanent Masjid complex.',
    content: `We are delighted to announce that through the unwavering dedication of our 300+ households, we have raised £125,000 toward our £500,000 deposit goal for the permanent Masjid complex.

Starting from humble beginnings with just £7,000 in our account, our community's trust and continuous monthly contributions have proven the strength of our solidarity. This permanent centre will house improved prayer facilities for brothers and sisters, dedicated madrasa classrooms, funeral washing facilities, and an elders welfare wing.

We encourage every member to maintain their monthly contributions of £10 or more as we move into the next phase of negotiations for the premises. May Allah (SWT) reward all contributors with continuous blessings.`,
    image_url:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/dae7834a0_482213866_9399722600142430_7242996509337792266_n.jpg',
  },
  {
    id: '2',
    slug: 'annual-madrasa-quran-competition',
    title: "Annual Children's Quran Recitation & Prize-Giving Ceremony",
    category: 'events',
    created_date: '2025-09-28',
    author: 'Edrissa Touray',
    excerpt:
      "Over 75 students from our Madrasa gathered at Greenway Community Centre to demonstrate their recitation skills, receiving awards and certificates in front of proud families.",
    content: `Over 75 students from our Madrasa gathered at Greenway Community Centre to demonstrate their recitation skills, receiving awards and certificates in front of proud families.

For over 3 years, our dedicated volunteer instructors and parent committees have organized this inspiring event. Students competed in multiple age groups, demonstrating memorization (Hifz), Tajweed, and Islamic etiquette.

Congratulations to all our young learners, and special gratitude to the organizing committee and parents for their tireless support of our children's spiritual and cultural education.`,
    image_url:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/d770a67ec_WhatsAppImage2025-10-31at12334PM1.jpeg',
  },
  {
    id: '3',
    slug: 'ramadan-iftar-cohesion',
    title: 'Ramadan Community Iftar: Fostering Unity and Shared Meals',
    category: 'news',
    created_date: '2025-04-12',
    author: 'Abdoulie Jah',
    excerpt:
      'Hundreds of community members gathered throughout the holy month of Ramadan for daily Iftar meals, Taraweeh prayers, and essential charity distributions.',
    content: `Hundreds of community members gathered throughout the holy month of Ramadan for daily Iftar meals, Taraweeh prayers, and essential charity distributions.

The spirit of brotherhood and sisterhood was palpable as volunteers prepared traditional dishes each evening, ensuring that newcomers, elders, and families facing hardship had warm meals in a supportive atmosphere.

Zakat funds were also distributed to families needing assistance with utility bills and emergency housing, underscoring our commitment to poverty relief.`,
    image_url:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/fa8cdec3f_WhatsAppImage2025-10-31at12335PM2.jpeg',
  },
  {
    id: '4',
    slug: 'youth-mentorship-gcse-success',
    title: 'Youth Mentorship Program Delivers Record GCSE Results',
    category: 'success_stories',
    created_date: '2025-08-25',
    author: 'Baba Njie',
    excerpt:
      'Students participating in our weekly Saturday tutoring and mentorship sessions achieved a 15% increase in GCSE pass rates across Nottinghamshire secondary schools.',
    content: `Students participating in our weekly Saturday tutoring and mentorship sessions achieved a 15% increase in GCSE pass rates across Nottinghamshire secondary schools.

Our team of 40 active mentors worked alongside students in English, Mathematics, Sciences, and university personal statements. In addition, 12 students received offers from Russell Group universities this autumn.

We commend these students for their hard work and thank our volunteer educators who invest their weekends in empowering the next generation.`,
    image_url:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/4425bf8b0_WhatsAppImage2025-10-31at12334PM2.jpeg',
  },
];

export function News() {
  const [posts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'events':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'announcements':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'success_stories':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--gwn-red)] to-[var(--gwn-green)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69006d9544acfab02d3455e5/4425bf8b0_WhatsAppImage2025-10-31at12334PM2.jpeg')",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">News & Updates</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest programs, events, and community success stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Stories' },
              { id: 'announcements', label: 'Announcements' },
              { id: 'events', label: 'Events' },
              { id: 'news', label: 'News' },
              { id: 'success_stories', label: 'Success Stories' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--gwn-red)] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts yet</h3>
              <p className="text-gray-600">
                Check back soon for news, updates, and stories from our community
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card
                    onClick={() => setActivePost(post)}
                    className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-none bg-white flex flex-col justify-between"
                  >
                    <div>
                      {post.image_url && (
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getCategoryClass(
                                post.category
                              )}`}
                            >
                              {post.category.replace(/_/g, ' ')}
                            </span>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>
                              {new Date(post.created_date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          {post.author && (
                            <div className="flex items-center gap-1.5">
                              <User className="w-4 h-4 text-gray-400" />
                              <span>{post.author}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--gwn-red)] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </CardContent>
                    </div>

                    <div className="px-6 pb-6">
                      <div className="flex items-center text-[var(--gwn-red)] font-semibold text-sm group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Post Modal Reader */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-black shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-64 w-full">
              <img
                src={activePost.image_url}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${getCategoryClass(
                  activePost.category
                )}`}
              >
                {activePost.category.replace(/_/g, ' ')}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {activePost.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(activePost.created_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {activePost.author}
                </span>
              </div>
              <div className="prose text-gray-700 leading-relaxed space-y-4 whitespace-pre-line text-base">
                {activePost.content}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <Button onClick={() => setActivePost(null)} variant="outline">
                  Close Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Your Story CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--gwn-blue)] to-[var(--gwn-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Want to Share Your Story?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Have a success story or community update you'd like to share? We'd love to hear from
              you!
            </p>
            <Link to="/Contact">
              <button
                type="button"
                className="bg-white text-[var(--gwn-blue)] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
