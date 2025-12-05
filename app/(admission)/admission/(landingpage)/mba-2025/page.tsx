import React from 'react';
import { MBA2025Client } from './mba2025homeclient';
import { Metadata } from 'next';

// Add metadata for better SEO
export const metadata: Metadata = {
  title: 'MBA 2025 Program | Your University Name',
  description: 'Join our MBA 2025 program with industry collaborations, specializations, and excellent placement opportunities.',
  keywords: 'MBA 2025, Business Administration, Specializations, Admissions, Scholarships',
};

const MBA2025Page: React.FC = () => {
  return <MBA2025Client />;
};

export default MBA2025Page;