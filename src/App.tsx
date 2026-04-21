/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutServices } from './components/AboutServices';
import { Portfolio } from './components/Portfolio';
import { SkillsTestimonials } from './components/SkillsTestimonials';
import { ContactFooter } from './components/ContactFooter';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <main className="min-h-screen bg-depth pt-[88px] md:pt-[96px]">
      <header className="relative z-50">
        <Navbar />
      </header>
      <Hero />
      <AboutServices />
      <Portfolio />
      <SkillsTestimonials />
      <ContactFooter />
      <BackToTop />
    </main>
  );
}
