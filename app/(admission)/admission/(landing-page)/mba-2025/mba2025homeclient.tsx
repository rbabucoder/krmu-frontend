
import React from 'react';
import Header from '../complanding/header';
import Hero from '../complanding/hero';
import Recruiters from '../complanding/recruiters';
import IndustryCollaborations from '../complanding/IndustryCollaborations';
import ProgramOverview from '../complanding/ProgramOverview';
import Specializations from '../complanding/Specializations';
import CurriculumOverview from '../complanding/CurriculumOverview';
import AdmissionProcess from '../complanding/AdmissionProcess';
import Scholarships from '../complanding/Scholarships';
import FAQSection from '../complanding/FAQSection';
import LocationSection from '../complanding/LocationSection';
import FooterLinks from '../complanding/FooterLinks';
import Footer from '../complanding/Footer';
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

export const MBA2025Client: React.FC = () => {
  
  const handleLogoClick = () => {
    // Optional: Add logo click logic
    console.log('Logo clicked');
  };

  const handleApplyClick = () => {
    // Optional: Add custom apply logic
    console.log('Apply button clicked');
    const formSection = document.getElementById('formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (): void => {
    console.log('Contact button clicked');
    // Implement contact logic
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header
        {...mba2025HeaderConfig}
        onLogoClick={handleLogoClick}
        onApplyClick={handleApplyClick}
        className="shadow-lg"
      />

      {/* Hero Section */}
      <Hero
        {...mba2025HeroConfig}
        // onCTAClick={handleHeroCTAClick}
        className="pt-16 md:pt-20" // Adjust padding for fixed header
      />

      {/* Recruiters & Testimonials Section */}
      <Recruiters
        className="mt-8 md:mt-12"
      />

       {/* Industry Collaborations Section */}
      <IndustryCollaborations
        {...mba2025IndustryCollaborations}
        className="mt-8 md:mt-12"
      />

      {/* Programme Overview Why Section */}
      <ProgramOverview
      {...mba2025ProgramOverview}
        className="mt-8 md:mt-12"
      />

      {/* Programme Overview Why Section */}
      <Specializations
      {...mba2025Specializations}
        className="mt-8 md:mt-12"
      />

      {/* Curriculum Overview Section */}
      <CurriculumOverview
        {...mba2025Curriculum}
        className="mt-8 md:mt-12"
      />

      {/* Admission Process Section */}
      <AdmissionProcess
        {...mba2025AdmissionProcess}
        onApplyClick={handleApplyClick}
        onContactClick={handleContactClick}
        className="mt-8 md:mt-12"
      />

      {/* Scholarships Section */}
      <Scholarships
        {...mba2025Scholarships}
        onApplyClick={handleApplyClick}
        className="mt-8 md:mt-12"
      />

        {/* FAQ Section */}
      <FAQSection
        {...mba2025FAQ}
        className="mt-8 md:mt-12 bg-gray-50"
      />

      {/* Location Section */}
      <LocationSection
        {...mba2025Location}
        className="mt-8 md:mt-12"
      />

      {/* Footer Links Section */}
      <FooterLinks
        {...mba2025FooterLinks}
        onContactClick={handleContactClick}
        className="mt-8 md:mt-12"
      />

       {/* Main Footer */}
      <Footer
        {...mba2025Footer}
        className="bg-white"
      />
    </div>
  );
};