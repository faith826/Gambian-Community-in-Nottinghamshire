import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Community } from './pages/Community';
import { Services } from './pages/Services';
import { Team } from './pages/Team';
import { Impact } from './pages/Impact';
import { CentreProject } from './pages/CentreProject';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/About" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/community" element={<Community />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Teams" element={<Team />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/Impact" element={<Impact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/CentreProject" element={<CentreProject />} />
          <Route path="/centreproject" element={<CentreProject />} />
          <Route path="/centre-project" element={<CentreProject />} />
          <Route path="/donations" element={<CentreProject />} />
          <Route path="/Donations" element={<CentreProject />} />
          <Route path="/News" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
