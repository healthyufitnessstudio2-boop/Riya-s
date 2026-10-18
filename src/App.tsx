import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SEOHead } from './components/layout/SEOHead';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { IDesign4uBadge } from './components/common/IDesign4uBadge';
import { ModalProvider, useModals } from './context/ModalContext';

// Five core pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { StoriesGalleryPage } from './pages/StoriesGalleryPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { openAppointment, openEmergency } = useModals();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE] text-slate-900 selection:bg-primary selection:text-white">
      {/* Scroll restorative utility */}
      <ScrollToTop />

      {/* Dynamic SEO metadata manager */}
      <SEOHead />

      {/* Responsive Sticky Header with CityCare Navigation & Modals */}
      <Header
        onOpenAppointmentModal={() => openAppointment()}
        onOpenEmergencyModal={() => openEmergency()}
      />

      {/* Main Content Area - 5 Distinct Pages */}
      <main className="flex-grow pb-safe-action md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/stories" element={<StoriesGalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all route gracefully redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* CityCare-grade Footer */}
      <Footer
        onOpenAppointmentModal={() => openAppointment()}
        onOpenEmergencyModal={() => openEmergency()}
      />

      {/* Floating Concierge WhatsApp Button */}
      <WhatsAppButton />

      {/* Floating iDesign4u Badge */}
      <IDesign4uBadge />

      {/* Mobile Sticky Quick Action Bar (Call, WhatsApp, Book) */}
      <MobileActionBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
