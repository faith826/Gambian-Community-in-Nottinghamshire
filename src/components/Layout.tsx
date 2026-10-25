import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export interface SubMenuItem {
  title: string;
  url: string;
}

export interface MenuItem {
  title: string;
  url: string;
  subItems?: SubMenuItem[];
}

export const navigationMenu: MenuItem[] = [
  { title: 'Home', url: '/' },
  {
    title: 'About Us',
    url: '/About',
    subItems: [
      { title: 'About', url: '/About' },
      { title: 'Community', url: '/Community' },
      { title: 'Services', url: '/Services' },
      { title: 'Teams', url: '/Team' },
    ],
  },
  {
    title: 'Our Impact',
    url: '/Impact',
    subItems: [
      { title: 'Impact', url: '/Impact' },
      { title: 'News', url: '/News' },
    ],
  },
  { title: 'Contact', url: '/Contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    'About Us': true,
    'Our Impact': true,
  });
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isExactActive = (url: string) => {
    const path = location.pathname.toLowerCase();
    const target = url.toLowerCase();
    if (target === '/') {
      return path === '/' || path === '/home';
    }
    if (target === '/team' || target === '/teams') {
      return path === '/team' || path === '/teams';
    }
    if (target === '/centreproject') {
      return path === '/centreproject' || path === '/centre-project' || path === '/donations';
    }
    return path === target;
  };

  const isParentActive = (item: MenuItem) => {
    if (isExactActive(item.url)) return true;
    if (item.subItems) {
      return item.subItems.some((sub) => isExactActive(sub.url));
    }
    return false;
  };

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const toggleMobileSubmenu = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Left: Logo & Name */}
            <div className="flex-shrink-0 z-10">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f7063e689f82900f12f15b/6639afab7_Gambianlogo.png"
                  alt="Gambian Community Logo"
                  className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <div className="hidden sm:block">
                  <h1 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[var(--gwn-red)] transition-colors">
                    Gambian Community in Nottinghamshire
                  </h1>
                  <p className="text-xs text-gray-600 font-medium">Building Unity, Creating Opportunities</p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Menu */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8"
              aria-label="Main Navigation"
            >
              <div className="flex items-center gap-7 xl:gap-9">
                {navigationMenu.map((item) => {
                  const parentActive = isParentActive(item);
                  const hasSub = item.subItems && item.subItems.length > 0;

                  if (!hasSub) {
                    return (
                      <Link
                        key={item.title}
                        to={item.url}
                        className={`text-sm font-medium transition-colors hover:text-[var(--gwn-red)] relative py-2 ${
                          parentActive ? 'text-[var(--gwn-red)] font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {item.title}
                        {parentActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gwn-red)] rounded-full" />
                        )}
                      </Link>
                    );
                  }

                  const isDropdownOpen = openDropdown === item.title;

                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-center gap-1 py-2 cursor-pointer group">
                        <Link
                          to={item.url}
                          onClick={() => setOpenDropdown(null)}
                          className={`text-sm font-medium transition-colors hover:text-[var(--gwn-red)] ${
                            parentActive ? 'text-[var(--gwn-red)] font-semibold' : 'text-gray-700'
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(isDropdownOpen ? null : item.title);
                          }}
                          aria-expanded={isDropdownOpen}
                          className={`p-0.5 rounded transition-transform text-gray-500 hover:text-[var(--gwn-red)] ${
                            isDropdownOpen ? 'rotate-180 text-[var(--gwn-red)]' : ''
                          }`}
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Floating Submenu Dropdown */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 min-w-[210px] animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 overflow-hidden ring-1 ring-black/5">
                            {item.subItems?.map((sub) => {
                              const subActive = isExactActive(sub.url);
                              return (
                                <Link
                                  key={sub.title}
                                  to={sub.url}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block px-4 py-2.5 text-sm transition-colors ${
                                    subActive
                                      ? 'bg-red-50 text-[var(--gwn-red)] font-semibold border-l-4 border-[var(--gwn-red)]'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--gwn-red)]'
                                  }`}
                                >
                                  {sub.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Right: Preserved Donate Button & Mobile Hamburger */}
            <div className="flex items-center gap-3 flex-shrink-0 z-10">
              <Link to="/CentreProject" className="hidden lg:inline-block">
                <Button className="bg-[var(--gwn-red)] hover:bg-[#b00e1f] text-white gap-2 shadow-sm font-semibold px-5 py-2">
                  <Heart className="w-4 h-4 fill-white text-white" />
                  Donate
                </Button>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              {navigationMenu.map((item) => {
                const parentActive = isParentActive(item);
                const hasSub = item.subItems && item.subItems.length > 0;
                const isExpanded = mobileExpanded[item.title] ?? true;

                if (!hasSub) {
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        parentActive
                          ? 'bg-[var(--gwn-red)] text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div key={item.title} className="rounded-lg overflow-hidden border border-gray-100">
                    <div
                      className={`flex items-center justify-between px-4 py-2.5 transition-colors ${
                        parentActive
                          ? 'bg-red-50 text-[var(--gwn-red)]'
                          : 'bg-gray-50/70 text-gray-800'
                      }`}
                    >
                      <Link
                        to={item.url}
                        className="text-base font-semibold flex-1 hover:text-[var(--gwn-red)]"
                      >
                        {item.title}
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => toggleMobileSubmenu(item.title, e)}
                        className="p-1.5 rounded text-gray-500 hover:text-gray-800 focus:outline-none"
                        aria-label={`Toggle ${item.title} submenu`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[var(--gwn-red)]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu on mobile */}
                    {isExpanded && (
                      <div className="bg-white py-1.5 pl-4 pr-2 space-y-1 border-t border-gray-100">
                        {item.subItems?.map((sub) => {
                          const subActive = isExactActive(sub.url);
                          return (
                            <Link
                              key={sub.title}
                              to={sub.url}
                              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                subActive
                                  ? 'bg-[var(--gwn-red)] text-white font-semibold'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Donate Button */}
              <div className="pt-3">
                <Link to="/CentreProject" className="block">
                  <Button className="w-full bg-[var(--gwn-red)] hover:bg-[#b00e1f] text-white gap-2 py-3 font-semibold text-base shadow-md">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    Donate Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="pt-20 flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f7063e689f82900f12f15b/6639afab7_Gambianlogo.png"
                  alt="Gambian Community Logo"
                  className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
                />
                <h3 className="font-bold text-xl">Gambian Community in Nottinghamshire</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-lg leading-relaxed text-sm">
                A membership-based organization serving ethnic minority communities of African heritage
                in Nottinghamshire, UK. Building vibrant, economically productive communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+441159123456"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[var(--gwn-red)]" />
                  <span>+44 115 912 3456</span>
                </a>
                <a
                  href="mailto:info@gambiancommunity-notts.org.uk"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[var(--gwn-green)]" />
                  <span>info@gambiancommunity-notts.org.uk</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/About" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Community" className="text-gray-400 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="text-gray-400 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="text-gray-400 hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/Impact" className="text-gray-400 hover:text-white transition-colors">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link to="/News" className="text-gray-400 hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white text-base">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/CentreProject" className="text-gray-400 hover:text-white transition-colors">
                    Support the Centre
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors">
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/80 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Gambian Community in Nottinghamshire. All rights reserved.</p>
            <p className="mt-2 text-gray-500 text-xs">
              Registered Charity Organization | Nottinghamshire, United Kingdom
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
