import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
}

const pageSEOMap: Record<string, { title: string; description: string }> = {
  '/': {
    title: "Siya’s Physiotherapy & Rehabilitation Centre | Move Better, Feel Stronger",
    description: "Expert Physiotherapy & Rehabilitation for a pain-free life. Specializing in Back Pain, Neck Pain, and Knee Joint Rehabilitation.",
  },
  '/about': {
    title: "About Specialist & Centre | Siya’s Physiotherapy & Rehabilitation",
    description: "Learn about our patient-first recovery philosophy, clinical qualifications, experience, and modern physiotherapy care.",
  },
  '/treatments': {
    title: "Treatments & Services | Back, Neck & Knee Pain Physiotherapy | Siya's",
    description: "Targeted physiotherapy treatments for back pain, neck strain, knee joint mobility, and sports injuries.",
  },
  '/stories': {
    title: "Patient Stories & Clinic Gallery | Siya’s Physiotherapy & Rehabilitation",
    description: "Authentic recovery feedback, clinic facility photographs, and patient rehabilitation experiences.",
  },
  '/contact': {
    title: "Contact & Appointments | Book Consultation | Siya’s Physiotherapy",
    description: "Book an appointment, reach out on WhatsApp, call our clinic directly, or find our location on Google Maps.",
  },
};

export const SEOHead: React.FC<SEOProps> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentMeta = pageSEOMap[pathname] || pageSEOMap['/'];
    const activeTitle = title || currentMeta.title;
    const activeDesc = description || currentMeta.description;

    document.title = activeTitle;

    // Update meta description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', activeDesc);

    // Update Open Graph tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', activeTitle);
    }
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', activeDesc);
    }
  }, [pathname, title, description]);

  return null;
};
