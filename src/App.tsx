/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import TheShow from './components/TheShow';
import HiringStory from './components/HiringStory';
import Sponsorship from './components/Sponsorship';
import Deliverables from './components/Deliverables';
import Timeline from './components/Timeline';
import ROI from './components/ROI';
import FAQ from './components/FAQ';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Overview />
        <TheShow />
        <HiringStory />
        <Sponsorship />
        <Deliverables />
        <Timeline />
        <ROI />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
