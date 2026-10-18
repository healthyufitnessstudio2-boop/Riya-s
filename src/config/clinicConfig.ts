import { Treatment, FAQItem, StatMetric } from '../types';

/**
 * CLINIC CONFIGURATION & PLACEHOLDERS
 * 
 * IMPORTANT: To connect official clinic communication lines, replace the placeholders
 * below with the clinic's verified phone number, WhatsApp number, and complete address.
 */
export const clinicConfig = {
  name: "Siya’s Physiotherapy & Rehabilitation Centre",
  shortName: "Siya's Physiotherapy",
  tagline: "Move Better. Feel Stronger. Live Healthier.",
  subTagline: "Expert Physiotherapy & Rehabilitation for a Pain-Free and Active Life.",

  // Contact Information (Configuration Placeholders)
  contact: {
    // International format without '+' or spaces for WhatsApp wa.me link
    whatsappNumber: "919876543210", // Placeholder: replace with official clinic WhatsApp
    whatsappDisplay: "+91 98765 43210",
    
    // Telephone dialer format
    phoneNumber: "+919876543210", // Placeholder: replace with official clinic landline/mobile
    phoneDisplay: "+91 98765 43210",

    email: "contact@siyasphysiotherapy.example.com",
    
    // Clinic Address Placeholder
    address: {
      line1: "123, Main Road, Near ABC Hospital",
      locality: "Your City / Locality",
      city: "City Name",
      pincode: "560001",
      full: "123, Main Road, Near ABC Hospital, Your City, 560001",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.000000000000!2d77.600000!3d12.970000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
      googleMapsSearchUrl: "https://maps.google.com/?q=Physiotherapy+Clinic",
    },

    // Clinic Operating Timings
    hours: [
      { days: "Monday – Saturday", time: "09:00 AM – 08:00 PM" },
      { days: "Sunday", time: "10:00 AM – 02:00 PM (By Prior Appointment Only)" },
    ],
  },

  // Doctor Information (Pending final clinical verification)
  doctor: {
    name: "Dr. Alistair Wright",
    title: "Physiotherapist & Rehabilitation Specialist",
    qualifications: "Bachelor / Master in Physiotherapy (BPT / MPT)",
    experience: "5+ Years of Clinical Experience",
    quote: "Every patient's recovery journey is unique, and I am committed to providing personalised care for a healthier, stronger you.",
    specializations: [
      "Certified in Advanced Manual Therapy",
      "Specialised Training in Sports Rehabilitation",
      "Spine & Postural Rehabilitation",
      "Knee Joint Mobilisation & Strengthening",
      "Evidence-Based Pain Management Protocols",
    ],
    // High-quality illustrative clinical image
    photoUrl: "https://images.unsplash.com/photo-1594824813576-92716182adcf?auto=format&fit=crop&w=800&q=80",
  },

  // Clinic Metrics (Matching Visual Mockup)
  metrics: [
    { value: "500+", label: "Happy Patients", sublabel: "Treated with care" },
    { value: "5+", label: "Years Experience", sublabel: "Clinical excellence" },
    { value: "100%", label: "Personalised Care", sublabel: "Tailored recovery plans" },
  ] as StatMetric[],

  // Visual Reference Badges
  featureBadges: [
    { id: "pain-relief", label: "Pain Relief", icon: "Activity" },
    { id: "faster-recovery", label: "Faster Recovery", icon: "RotateCcw" },
    { id: "improved-mobility", label: "Improved Mobility", icon: "UserCheck" },
    { id: "better-quality", label: "Better Quality of Life", icon: "Sparkles" },
  ],

  // Core Value Pillars ("Why Choose Siya's?")
  whyChooseUs: [
    {
      title: "Experienced Physiotherapist",
      description: "Dedicated clinical expertise offering compassionate, evidence-based assessment and targeted recovery plans.",
      icon: "User",
    },
    {
      title: "Personalised Treatment Plans",
      description: "No generic routines. Every treatment protocol is structured to your specific injury, pain level, and lifestyle goals.",
      icon: "ClipboardCheck",
    },
    {
      title: "Modern Techniques & Equipment",
      description: "State-of-the-art modalities, advanced manual therapy techniques, and functional exercise therapy.",
      icon: "Cpu",
    },
    {
      title: "Friendly & Supportive Environment",
      description: "A welcoming, hygienic clinic space where patient comfort, dignity, and recovery confidence come first.",
      icon: "HeartHandshake",
    },
  ],

  // Primary Treatments (Focusing on Back, Neck, Knee per project mandate)
  treatments: [
    {
      id: "back-pain",
      slug: "back-pain-physiotherapy",
      title: "Back Pain Treatment",
      shortDesc: "Relief from chronic and acute lumbar pain, disc herniation, sciatica, and postural spine stiffness.",
      fullDesc: "Our comprehensive back pain rehabilitation program addresses both acute muscle spasms and long-term degenerative conditions. Using targeted manual mobilization, core spinal stabilization exercises, and electrotherapy modalities, we treat the root mechanical cause of pain rather than just masking symptoms.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "core",
      symptoms: ["Lower back stiffness", "Sciatica radiating down legs", "Pain upon sitting or bending", "Muscle spasms & weakness"],
      interventions: ["Spinal manual therapy", "McKenzie mechanical diagnosis", "Core muscle activation", "Ergonomic & posture advice"],
      expectedOutcomes: ["Marked pain reduction", "Restored flexion & extension", "Spine stability", "Prevention of recurrent flare-ups"],
    },
    {
      id: "neck-pain",
      slug: "neck-shoulder-pain-physiotherapy",
      title: "Neck & Shoulder Pain",
      shortDesc: "Targeted treatment for cervical stiffness, desk-work posture strain, headaches, and frozen shoulder.",
      fullDesc: "Prolonged screen time, cervical spondylosis, and postural faults frequently lead to debilitating neck and shoulder tension. We utilize cervical traction, gentle joint glides, trigger point dry release, and scapular retraining to restore pain-free head and arm movement.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      category: "core",
      symptoms: ["Stiff neck on waking", "Shoulder joint restriction", "Tension headaches & upper back tightness", "Numbness radiating into arms"],
      interventions: ["Cervical mobilization", "Scapulothoracic strengthening", "Trigger point deactivation", "Ergonomic workstation setup"],
      expectedOutcomes: ["Full neck rotation", "Relief from cervicogenic tension", "Shoulder range of motion restoration"],
    },
    {
      id: "knee-pain",
      slug: "knee-pain-rehabilitation",
      title: "Knee Pain Rehabilitation",
      shortDesc: "Strengthen joint stability and recover pain-free mobility for osteoarthritis, ligament sprains, and sports injuries.",
      fullDesc: "Whether suffering from knee osteoarthritis, patellofemoral pain syndrome, or recovering from a meniscus or ligament injury, our guided rehabilitation strengthens the kinetic chain from hips to ankles to decompress the knee joint and restore walking confidence.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      category: "core",
      symptoms: ["Pain when climbing stairs", "Joint clicking & swelling", "Stiffness after prolonged rest", "Difficulty walking long distances"],
      interventions: ["Quadriceps & hamstring balance", "Joint distraction & patellar glides", "Gait retraining & balance drills", "Therapeutic ultrasound & cryotherapy"],
      expectedOutcomes: ["Pain-free stair ascent/descent", "Improved walking endurance", "Joint preservation"],
    },
    // Secondary Treatments (Labeled clearly as pending clinic operational confirmation)
    {
      id: "sports-injury",
      slug: "sports-injury-recovery",
      title: "Sports Injury Recovery",
      shortDesc: "Get back to your active lifestyle safely with sport-specific functional rehabilitation.",
      fullDesc: "Accelerate recovery from ankle sprains, hamstring pulls, tennis elbow, and rotator cuff strains with personalized athletic reconditioning.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      category: "secondary",
      symptoms: ["Acute sports strains", "Ligament instability", "Reduced athletic performance"],
      interventions: ["Plyometric progression", "Proprioception training", "Kinesiology taping"],
      expectedOutcomes: ["Safe return to sport", "Re-injury risk mitigation"],
    },
    {
      id: "post-surgical",
      slug: "post-surgical-rehabilitation",
      title: "Post-Surgical Rehabilitation",
      shortDesc: "Faster and safer recovery following orthopedic surgery, joint replacements, and fractures.",
      fullDesc: "Structured phase-by-phase physical therapy following total knee/hip replacement, ACL reconstruction, or spinal surgery in coordination with your orthopedic surgeon.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      category: "secondary",
      symptoms: ["Post-operative muscle atrophy", "Scar tissue restriction", "Joint stiffness"],
      interventions: ["Safe early mobilization", "Lymphatic drainage", "Progressive resistance exercises"],
      expectedOutcomes: ["Safe functional independence", "Optimal surgical outcome"],
    },
    {
      id: "home-care",
      slug: "home-care-physiotherapy",
      title: "Home Care Physiotherapy",
      shortDesc: "Professional physiotherapy sessions delivered in the comfort and privacy of your home.",
      fullDesc: "For elderly patients, severe post-op recovery, or acute mobility limitations, our therapist brings clinical rehabilitation directly to your residence.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      category: "secondary",
      symptoms: ["Inability to travel to clinic", "Bed-bound rehabilitation needs", "Elderly frailty"],
      interventions: ["Bedside mobilization", "Fall-prevention training", "Caregiver guidance"],
      expectedOutcomes: ["Home environment mobility", "Caregiver peace of mind"],
    },
  ] as Treatment[],

  // Frequently Asked Questions (Matching Visual Mockup)
  faqs: [
    {
      question: "Do I need a doctor's referral to visit Siya's Physiotherapy?",
      answer: "No, a doctor's prescription is not strictly required. As qualified physiotherapy specialists, we conduct a comprehensive independent assessment. However, if you already have physician notes, X-rays, or MRI reports, please bring them along for review.",
      category: "general",
    },
    {
      question: "How many sessions will I need for my recovery?",
      answer: "The number of sessions depends on whether your condition is acute (recent strain) or chronic (long-standing degenerative pain). During your initial consultation, we diagnose the root cause and provide a clear, estimated timeline typically ranging from 3 to 10 sessions.",
      category: "treatment",
    },
    {
      question: "What conditions do you treat at the centre?",
      answer: "We specialize in back pain (sciatica, disc issues), neck & shoulder stiffness (cervical spondylosis, frozen shoulder), and knee joint pain (osteoarthritis, ligament strains). We also manage sports injuries, posture correction, and post-operative recovery.",
      category: "treatment",
    },
    {
      question: "Do you provide home visit physiotherapy?",
      answer: "Yes, home physiotherapy visits are available for patients with acute mobility restrictions, elderly rehabilitation needs, or recent post-surgical procedures. Please contact our reception on WhatsApp to check availability in your area.",
      category: "services",
    },
    {
      question: "What are your consultation charges?",
      answer: "Our initial consultation includes a complete physical evaluation, movement analysis, and your first therapeutic session. Please message us on WhatsApp or call our clinic directly for the exact current consultation fee and package details.",
      category: "pricing",
    },
    {
      question: "How should I dress for my appointment?",
      answer: "Wear comfortable, loose-fitting athletic clothing that allows easy movement and direct visual/tactile assessment of the affected joint or spine area (e.g., track pants, shorts, and a comfortable T-shirt).",
      category: "general",
    },
  ] as FAQItem[],
};

/**
 * HELPER: Build URL-Encoded WhatsApp Message
 * 
 * Formats a clean, structured booking enquiry message that automatically
 * encodes parameters for the WhatsApp Web & Mobile API.
 */
export function buildWhatsAppEnquiryUrl(details?: {
  treatment?: string;
  preferredDate?: string;
  preferredTime?: string;
  patientName?: string;
}): string {
  const phone = clinicConfig.contact.whatsappNumber;
  
  let treatmentText = details?.treatment?.trim() || "[Back pain / Neck pain / Knee pain]";
  let dateText = details?.preferredDate?.trim() || "[Preferred Date]";
  let timeText = details?.preferredTime?.trim() || "[Preferred Time]";
  let nameIntro = details?.patientName?.trim() ? `My name is ${details.patientName.trim()}. ` : "";

  const messageText = 
`Hello Siya’s Physiotherapy & Rehabilitation Centre,

I would like to enquire about an appointment.
${nameIntro}Treatment: ${treatmentText}
Preferred date: ${dateText}
Preferred time: ${timeText}

Please let me know the available appointment slots.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
}

/**
 * HELPER: Telephone Link
 */
export function getPhoneDialUrl(): string {
  return `tel:${clinicConfig.contact.phoneNumber}`;
}
