// app/admission/mba-2025/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { mba2025HeaderConfig } from './constant/header';
import { mba2025HeroConfig } from './constant/hero';
import { mba2025IndustryCollaborations } from './constant/industry-collaborations';
import { mba2025ProgramOverview } from './constant/program-overview';
import { mba2025Specializations } from './constant/specializations';
import { mba2025Curriculum } from './constant/curriculum';
import { mba2025AdmissionProcess } from './constant/admission-process';
import { mba2025Scholarships } from './constant/scholarships';
import { mba2025FAQ } from './constant/faq';
import { mba2025Location } from './constant/location';
import { mba2025FooterLinks } from './constant/footer-links';
import { mba2025Footer } from './constant/footer';
import { Metadata } from 'next';

// Dynamically import components
const Header = dynamic(() => import('../complanding/header'), { ssr: true });
const Hero = dynamic(() => import('../complanding/hero'), { ssr: true });
const Recruiters = dynamic(() => import('../complanding/recruiters'), { ssr: true });
const IndustryCollaborations = dynamic(() => import('../complanding/IndustryCollaborations'), { ssr: true });
const ProgramOverview = dynamic(() => import('../complanding/ProgramOverview'), { ssr: true });
const Specializations = dynamic(() => import('../complanding/Specializations'), { ssr: true });
const CurriculumOverview = dynamic(() => import('../complanding/CurriculumOverview'), { ssr: true });
const AdmissionProcess = dynamic(() => import('../complanding/AdmissionProcess'), { ssr: true });
const Scholarships = dynamic(() => import('../complanding/Scholarships'), { ssr: true });
const FAQSection = dynamic(() => import('../complanding/FAQSection'), { ssr: true });
const LocationSection = dynamic(() => import('../complanding/LocationSection'), { ssr: true });
const FooterLinks = dynamic(() => import('../complanding/FooterLinks'), { ssr: true });
const Footer = dynamic(() => import('../complanding/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: 'MBA 2025 Program | K.R. Mangalam University',
  description: 'Join our MBA 2025 program with industry collaborations, specializations, and excellent placement opportunities.',
};

export default function MBA2025Page() {
  return (
    <div className="min-h-screen">
      {/* DO NOT pass event handlers from server component */}
      <Header
        {...mba2025HeaderConfig}
        className="shadow-lg"
        // Removed: onLogoClick and onApplyClick
      />

      <Hero
        {...mba2025HeroConfig}
        className="pt-16 md:pt-20"
        // Removed: onApplyClick
      />

      <Recruiters className="mt-8 md:mt-12" />

      <IndustryCollaborations
        {...mba2025IndustryCollaborations}
        className="mt-8 md:mt-12"
      />

      <ProgramOverview
        {...mba2025ProgramOverview}
        className="mt-8 md:mt-12"
      />

      <Specializations
        {...mba2025Specializations}
        className="mt-8 md:mt-12"
      />

      <CurriculumOverview
        {...mba2025Curriculum}
        className="mt-8 md:mt-12"
      />

      {/* DO NOT pass event handlers */}
      <AdmissionProcess
        {...mba2025AdmissionProcess}
        className="mt-8 md:mt-12"
        // Removed: onApplyClick and onContactClick
      />

      {/* DO NOT pass event handlers */}
      <Scholarships
        {...mba2025Scholarships}
        className="mt-8 md:mt-12"
        // Removed: onApplyClick
      />

      <FAQSection
        {...mba2025FAQ}
        className="mt-8 md:mt-12 bg-gray-50"
      />

      <LocationSection
        {...mba2025Location}
        className="mt-8 md:mt-12"
      />

      <FooterLinks
        {...mba2025FooterLinks}
        className="mt-8 md:mt-12"
        // Removed: onContactClick
      />

      <Footer
        {...mba2025Footer}
        className="bg-white"
      />
    </div>
  );
}