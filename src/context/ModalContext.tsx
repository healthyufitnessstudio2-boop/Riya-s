import React, { createContext, useContext, useState } from 'react';
import { TreatmentDepartment, RehabPackage, LEAD_DOCTOR } from '../data/physioData';
import { AppointmentModal } from '../components/modals/AppointmentModal';
import { TreatmentDetailModal } from '../components/modals/TreatmentDetailModal';
import { DoctorProfileModal } from '../components/modals/DoctorProfileModal';
import { HealthPackageDetailModal } from '../components/modals/HealthPackageDetailModal';
import { EmergencyModal } from '../components/modals/EmergencyModal';

interface ModalContextType {
  openAppointment: (treatmentId?: string, doctorId?: string, packageTitle?: string) => void;
  openEmergency: () => void;
  openTreatmentDetail: (treatment: TreatmentDepartment) => void;
  openDoctorProfile: (doctor?: typeof LEAD_DOCTOR) => void;
  openPackageDetail: (pkg: RehabPackage) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);

  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentDepartment | null>(null);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<RehabPackage | null>(null);

  const openAppointment = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId || null);
    setIsAppointmentOpen(true);
  };

  const openEmergency = () => {
    setIsEmergencyOpen(true);
  };

  const openTreatmentDetail = (treatment: TreatmentDepartment) => {
    setSelectedTreatment(treatment);
  };

  const openDoctorProfile = () => {
    setIsDoctorOpen(true);
  };

  const openPackageDetail = (pkg: RehabPackage) => {
    setSelectedPackage(pkg);
  };

  return (
    <ModalContext.Provider
      value={{
        openAppointment,
        openEmergency,
        openTreatmentDetail,
        openDoctorProfile,
        openPackageDetail,
      }}
    >
      {children}

      {/* Globally Mounted Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialTreatmentId={selectedTreatmentId}
      />

      <TreatmentDetailModal
        isOpen={!!selectedTreatment}
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatId) => {
          setSelectedTreatment(null);
          openAppointment(treatId);
        }}
      />

      <DoctorProfileModal
        isOpen={isDoctorOpen}
        doctor={LEAD_DOCTOR}
        onClose={() => setIsDoctorOpen(false)}
        onBookDoctor={() => {
          setIsDoctorOpen(false);
          openAppointment();
        }}
      />

      <HealthPackageDetailModal
        isOpen={!!selectedPackage}
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookPackage={(pkg) => {
          setSelectedPackage(null);
          openAppointment(pkg.id);
        }}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};

export const useModal = useModals;
