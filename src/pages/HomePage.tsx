import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HospitalStats } from '../components/home/HospitalStats';
import { DepartmentsSection } from '../components/home/DepartmentsSection';
import { DoctorsSection } from '../components/home/DoctorsSection';
import { FacilitiesSection } from '../components/home/FacilitiesSection';
import { HealthPackagesSection } from '../components/home/HealthPackagesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { LocationsSection } from '../components/home/LocationsSection';
import { ContactSection } from '../components/home/ContactSection';
import { SEOHead } from '../components/layout/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Dr. Alistair Wright | Siya’s Physiotherapy & Rehabilitation Centre"
        description="Premier physical therapy and spine rehabilitation centre led by Dr. Alistair Wright (MPT). 1-on-1 personalized sessions, non-surgical spine decompression, laser therapy, and sports conditioning."
      />

      <main className="min-h-screen">
        {/* Fullscreen Dark Crossfade Hero */}
        <HeroSection />

        {/* Floating Stat Counters */}
        <HospitalStats />

        {/* Continuous Horizontal Auto-scrolling Departments */}
        <DepartmentsSection />

        {/* Consultant Specialist: Dr. Siya Khan 3D glowing card + stats */}
        <DoctorsSection />

        {/* Advanced Clinical Facilities Grid */}
        <FacilitiesSection />

        {/* Targeted Rehabilitation Regimens */}
        <HealthPackagesSection />

        {/* Why Choose Us: Dark grid with 4 pillars */}
        <WhyChooseUsSection />

        {/* Patient Reviews & Outcomes */}
        <ReviewsSection />

        {/* Single Central Clinic Campus */}
        <LocationsSection />

        {/* Direct Clinical Assistance & Inquiry Form */}
        <ContactSection />
      </main>
    </>
  );
};
