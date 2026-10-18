// Central Data Repository for Siya's Physiotherapy & Rehabilitation Centre
// Built to match CityCare Hospital's rich interactive structure, tailored for Physiotherapy & Rehab.

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  regNumber: string;
  photo: string;
  bio: string;
  quote: string;
  specializations: string[];
  certifications: string[];
  education: string[];
  consultationTimings: string;
}

export interface TreatmentDepartment {
  id: string;
  name: string;
  shortName: string;
  category: string;
  iconName: string;
  cardGradient: string;
  borderColor: string;
  iconBg: string;
  badgeColor: string;
  image: string;
  shortDesc: string;
  overview: string;
  conditionsTreated: string[];
  commonProcedures: string[];
  diagnosticCapabilities: string;
  expectedOutcomes: string[];
  sessionsAvg: string;
}

export interface RehabPackage {
  id: string;
  name: string;
  targetAudience: string;
  badgeText: string;
  badgeColor: string;
  sessionsCount: string;
  duration: string;
  price: string;
  popular?: boolean;
  shortDesc: string;
  detailedOverview: string;
  keyInclusions: string[];
  clinicalAssessments: string[];
  homeGuidance: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  iconName: string;
  image: string;
  description: string;
  keyFeatures: string[];
}

export interface PatientReview {
  id: string;
  patientName: string;
  ageGender: string;
  conditionTreated: string;
  rating: number;
  date: string;
  verified: boolean;
  testimonial: string;
  recoveryMilestone: string;
}

// ==========================================
// CLINIC IDENTITY & CONTACT INFORMATION
// ==========================================
export const CLINIC_INFO = {
  name: "Siya’s Physiotherapy & Rehabilitation Centre",
  shortName: "Siya's Physiotherapy",
  tagline: "Restore Mobility. Eliminate Pain. Reclaim Your Life.",
  subTagline: "Expert Clinical Physiotherapy, Spine Rehabilitation, and Sports Reconditioning with 1-on-1 Personalized Care.",
  
  // Mandatory exact phone & email
  phone: "+919281410305",
  phoneDisplay: "+91 92814 10305",
  whatsappNumber: "919281410305",
  whatsappDisplay: "+91 92814 10305",
  email: "hello@idesign4u.in",

  // Single Branch Campus
  branch: {
    name: "Siya's Physiotherapy & Rehabilitation Centre",
    subtitle: "Main Integrated Rehabilitation Campus",
    line1: "Opposite Civil Hospital, Near Royal Plaza",
    locality: "Station Road, City Centre",
    city: "Hubballi / Karnataka",
    pincode: "580020",
    fullAddress: "Opposite Civil Hospital, Near Royal Plaza, Station Road, City Centre, 580020",
    landmark: "Directly opposite Civil Hospital Main Gate",
    timings: "Monday – Saturday: 08:30 AM – 08:30 PM | Sunday: 09:00 AM – 01:00 PM (Prior Appointment)",
    mapUrl: "https://maps.google.com/?q=Siya+Physiotherapy+Rehabilitation+Centre",
    googleEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.452655198904!2d75.132890!3d15.364710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzUzLjAiTiA3NcKwMDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
    phone: "+919281410305",
    email: "hello@idesign4u.in",
  },

  // Operating Hours
  hours: [
    { days: "Monday – Friday", morning: "08:30 AM – 01:30 PM", evening: "04:30 PM – 08:30 PM" },
    { days: "Saturday", morning: "09:00 AM – 02:00 PM", evening: "04:00 PM – 08:00 PM" },
    { days: "Sunday", morning: "09:00 AM – 01:00 PM", evening: "Closed (Urgent On-Call Only)" },
  ]
};

// ==========================================
// DOCTOR: EXACTLY 1 DOCTOR (DR. ALISTAIR WRIGHT)
// ==========================================
export const LEAD_DOCTOR: Doctor = {
  id: "dr-alistair-wright",
  name: "Dr. Alistair Wright",
  title: "Chief Physiotherapist & Clinical Director",
  qualifications: "BPT, MPT (Musculoskeletal & Sports Rehab), MIAP, COMT",
  experience: "12+ Years Clinical Excellence",
  regNumber: "IAP/MSK/2014/3910",
  photo: "/images/dr_male.jpg",
  bio: "Dr. Alistair Wright is an acclaimed musculoskeletal and sports rehabilitation specialist dedicated to restoring pain-free movement without dependency on painkillers or unnecessary surgeries. With over 12 years of clinical excellence, Dr. Alistair has treated over 1,500+ patients ranging from athletes with acute ligament tears to individuals recovering from severe disc prolapse, cervical spondylosis, and stroke. His clinical methodology blends manual spine mobilization, computerized mechanical decompression, and evidence-based functional kinetic retraining.",
  quote: "My goal is never temporary symptom suppression. We identify the root biomechanical impairment, restore natural joint mechanics, and recondition supporting stabilizers so pain never returns.",
  specializations: [
    "Advanced Non-Surgical Spine Decompression (Cervical & Lumbar)",
    "Knee Osteoarthritis & Post-Op Joint Replacement Rehab",
    "Sports Kinetic Chain Reconditioning & Return-to-Play Testing",
    "Certified Orthopedic Manual Therapy (Maitland & Mulligan)",
    "Trigger Point Dry Needling & Myofascial Release",
    "Post-Stroke Neuro-Developmental Rehabilitation (NDT)"
  ],
  certifications: [
    "Master of Physiotherapy (MPT) in Musculoskeletal & Sports Disorders",
    "Certified Orthopedic Manual Therapist (COMT - London Institute)",
    "Dry Needling Practitioner Certification (DNP)",
    "Kinesiology Taping Specialist (KTS)",
    "Member of Indian Association of Physiotherapists (MIAP)"
  ],
  education: [
    "MPT - Master of Physiotherapy (First Class Distinction)",
    "BPT - Bachelor of Physiotherapy",
    "Fellowship in Non-Surgical Spinal Decompression"
  ],
  consultationTimings: "Mon - Sat: 9:30 AM – 1:00 PM & 4:30 PM – 8:00 PM"
};

// Array of 1 doctor for components that map over doctors
export const DOCTORS: Doctor[] = [LEAD_DOCTOR];

// ==========================================
// CLINIC STATS (CITYCARE STYLE)
// ==========================================
export const CLINIC_STATS = [
  {
    id: "patients",
    value: "1,500+",
    label: "Patients Rehabilitated",
    subtext: "From acute pain to active mobility",
    iconName: "Users"
  },
  {
    id: "success",
    value: "98.4%",
    label: "Clinical Success Rate",
    subtext: "Pain reduction without surgery",
    iconName: "ShieldCheck"
  },
  {
    id: "experience",
    value: "10+ Yrs",
    label: "Clinical Experience",
    subtext: "Certified Orthopedic & Neuro care",
    iconName: "Award"
  },
  {
    id: "sessions",
    value: "100%",
    label: "Dedicated 1-on-1 Sessions",
    subtext: "Individual focus, no rushed care",
    iconName: "HeartHandshake"
  }
];

// ==========================================
// PHYSIOTHERAPY TREATMENT DEPARTMENTS
// ==========================================
export const TREATMENTS: TreatmentDepartment[] = [
  {
    id: "spine-back-pain",
    name: "Spine & Back Pain Rehabilitation",
    shortName: "Back & Spine",
    category: "Musculoskeletal & Spine",
    iconName: "Activity",
    cardGradient: "from-sky-50/70 via-blue-50/30 to-white",
    borderColor: "hover:border-sky-300",
    iconBg: "bg-sky-50 text-sky-600 group-hover:bg-sky-600",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    image: "/images/physio_spine.jpg",
    shortDesc: "Evidence-based non-surgical therapy for lumbar disc herniation, sciatica nerve pain, spine stenosis, and chronic muscle spasms.",
    overview: "Our flagship Spine Rehabilitation Program provides lasting relief for both acute disc bulges and chronic lower back pain. Combining computerized spinal decompression, manual lumbar facet mobilization, and deep multifidus core muscle activation, we relieve pressure from irritated nerve roots and strengthen the natural spinal support architecture.",
    conditionsTreated: [
      "Lumbar Disc Prolapse & Sciatica Nerve Radiation",
      "Facet Joint Arthrosis & Lumbar Spondylosis",
      "Postural Kyphosis, Scoliosis & Lordosis Flaws",
      "Chronic Muscular Spasms & Quadratus Lumborum Strain",
      "Sacroiliac (SI) Joint Dysfunction",
      "Post-Discectomy & Laminectomy Surgical Recovery"
    ],
    commonProcedures: [
      "Computerized Mechanical Lumbar Decompression",
      "Maitland & Mulligan Manual Spinal Mobilization",
      "McKenzie Mechanical Diagnosis and Therapy (MDT)",
      "Deep Core Multifidus & Transversus Abdominis Retraining",
      "Interferential Current Therapy (IFT) & Ultrasound",
      "Ergonomic Sitting & Kinetic Workstation Assessment"
    ],
    diagnosticCapabilities: "Comprehensive Digital Posture Mapping, Neural Provocation Testing, Straight Leg Raise Goniometry, Lumbar Range of Motion Tracking.",
    expectedOutcomes: [
      "90%+ reduction in radiating leg sciatica pain",
      "Restoration of pain-free sitting and bending flexibility",
      "Stabilized core preventing future disc recurrence"
    ],
    sessionsAvg: "6 – 10 Sessions"
  },
  {
    id: "knee-joint-rehab",
    name: "Knee Joint & Osteoarthritis Care",
    shortName: "Knee & Joint",
    category: "Orthopedic & Joint Preservation",
    iconName: "Zap",
    cardGradient: "from-teal-50/70 via-emerald-50/30 to-white",
    borderColor: "hover:border-teal-300",
    iconBg: "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    image: "/images/physio_knee.jpg",
    shortDesc: "Specialized joint decompression, cartilage preservation, and quad strengthening for knee osteoarthritis, meniscus, and ACL tears.",
    overview: "Whether dealing with age-related degenerative knee osteoarthritis or an acute sports ligament strain, our targeted joint protocol strengthens the entire kinetic chain from hip stabilizers to ankle balance. This decompresses the knee joint cartilage, improves synovial fluid nutrition, and delays or prevents knee replacement surgeries.",
    conditionsTreated: [
      "Grade 1 to Grade 3 Knee Osteoarthritis (Wear & Tear)",
      "Patellofemoral Pain Syndrome (Runner’s Knee)",
      "Meniscus Tears & Chondromalacia Patellae",
      "ACL, PCL, MCL & LCL Ligament Strains",
      "Bakers Cyst & Synovial Joint Effusion",
      "Post Total Knee Replacement (TKR) Rehabilitation"
    ],
    commonProcedures: [
      "Patellar Gliding & Tibiofemoral Joint Distraction",
      "Vastus Medialis Oblique (VMO) Quadriceps Activation",
      "Class-4 High-Intensity Deep Laser for Joint Inflammation",
      "Closed Kinetic Chain Functional Loading Exercises",
      "Therapeutic Cryotherapy & Dynamic Kinesio Taping",
      "Gait Realignment & Flat-Foot Orthotic Correction"
    ],
    diagnosticCapabilities: "Goniometric Joint Angle Assessment, Functional Lachman & McMurray Testing, Weight-Bearing Gait Symmetry Analysis.",
    expectedOutcomes: [
      "Significant relief in morning knee stiffness",
      "Pain-free climbing of stairs and walking endurance",
      "Restored knee flexion and extension range"
    ],
    sessionsAvg: "8 – 12 Sessions"
  },
  {
    id: "cervical-neck-shoulder",
    name: "Cervical Neck & Shoulder Pain",
    shortName: "Neck & Shoulder",
    category: "Cervical & Postural Rehab",
    iconName: "Crosshair",
    cardGradient: "from-indigo-50/70 via-purple-50/30 to-white",
    borderColor: "hover:border-indigo-300",
    iconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    image: "/images/physio_neck.jpg",
    shortDesc: "Targeted decompression for tech-neck stiffness, cervical spondylosis, radiating arm tingling, and frozen shoulder capsulitis.",
    overview: "Prolonged screen hours, poor sleeping posture, and age-related disc degeneration compress delicate cervical nerve roots, causing headaches, shoulder tightness, and radiating arm weakness. Our protocol releases suboccipital tension, mobilizes frozen scapular joints, and re-educates upper back posture.",
    conditionsTreated: [
      "Cervical Spondylosis & Disc Bulge with Radiculopathy",
      "Text-Neck Syndrome & Forward Head Posture",
      "Adhesive Capsulitis (Frozen Shoulder - Stage 1 to 3)",
      "Rotator Cuff Tendinitis & Impingement Syndrome",
      "Cervicogenic Headaches & Upper Trapezius Spasms",
      "Thoracic Outlet Syndrome & Brachial Nerve Tension"
    ],
    commonProcedures: [
      "Gentle Computerized Cervical Traction",
      "Suboccipital Manual Release & Scapular Gliding",
      "Glenohumeral Joint Mobilization (Maitland Grade I-IV)",
      "Trigger Point Dry Needling for Rhomboids & Trapezius",
      "Postural Wall Angels & Deep Neck Flexor Retraining",
      "Therapeutic Heat & High-Frequency Ultrasound Modality"
    ],
    diagnosticCapabilities: "Spurling's Cervical Compression Test, Upper Limb Tension Tests (ULTT), Scapular Dyskinesis Evaluation.",
    expectedOutcomes: [
      "Complete alleviation of tension headaches and neck tightness",
      "Restoration of overhead arm reach in frozen shoulder",
      "Corrected upright cervical spine alignment"
    ],
    sessionsAvg: "6 – 10 Sessions"
  },
  {
    id: "sports-injury-rehab",
    name: "Sports Injury & Athletic Return-to-Play",
    shortName: "Sports Injury",
    category: "Performance & Athletic Recovery",
    iconName: "Flame",
    cardGradient: "from-amber-50/70 via-orange-50/30 to-white",
    borderColor: "hover:border-amber-300",
    iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    image: "/images/physio_sports.jpg",
    shortDesc: "Fast-track recovery for sprains, muscle tears, shin splints, tennis elbow, and sport-specific biomechanical training.",
    overview: "Engineered for active individuals, runners, badminton/cricket athletes, and gym enthusiasts. We provide immediate phase-1 pain and edema control, followed by high-speed eccentric strengthening, agility drills, and return-to-sport clearance testing to ensure peak athletic performance without fear of re-injury.",
    conditionsTreated: [
      "Ankle Inversion Sprains & ATFL Ligament Tears",
      "Hamstring, Quadriceps & Calf Muscle Strains",
      "Tennis Elbow (Lateral Epicondylitis) & Golfer’s Elbow",
      "Rotator Cuff Sports Tears & Labral Injuries",
      "Shin Splints (Medial Tibial Stress Syndrome) & Plantar Fasciitis",
      "Achilles Tendonitis & Jumper’s Knee"
    ],
    commonProcedures: [
      "P.O.L.I.C.E. Acute Phase Management & Lymphatic Drainage",
      "Eccentric Tendon Loading & Heavy Slow Resistance (HSR)",
      "Proprioception, Agility Ladder & Plyometric Drills",
      "Rigid Sports Strapping & Elastic Kinesiology Taping",
      "Deep Tissue Instrument Assisted Soft Tissue Mobilization (IASTM)",
      "Biomechanical Video Movement Breakdown"
    ],
    diagnosticCapabilities: "Single-Leg Hop Testing, Y-Balance Functional Testing, Dynamic Movement Screening, Muscle Dynamometry.",
    expectedOutcomes: [
      "Safe, confident return to competitive sports and running",
      "Zero scar tissue stiffness and restored explosive strength",
      "Substantially reduced re-injury likelihood"
    ],
    sessionsAvg: "8 – 14 Sessions"
  },
  {
    id: "neuro-rehabilitation",
    name: "Neurological & Stroke Rehabilitation",
    shortName: "Neuro Rehab",
    category: "Neurological Sciences",
    iconName: "ShieldAlert",
    cardGradient: "from-rose-50/70 via-pink-50/30 to-white",
    borderColor: "hover:border-rose-300",
    iconBg: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    image: "/images/physio_neuro.jpg",
    shortDesc: "Neuro-plasticity driven rehabilitation for ischemic stroke hemiplegia, Parkinson's disease, facial Bell's palsy, and balance disorders.",
    overview: "Leveraging the brain's innate neuroplasticity, our specialized neuro rehabilitation focuses on repetitive task-oriented training. We help patients re-learn lost motor skills, improve balance, reduce muscle spasticity, and regain functional independence in daily life with utmost dignity.",
    conditionsTreated: [
      "Post-Stroke Hemiplegia / Hemiparesis Recovery",
      "Parkinson’s Disease Tremors, Rigidity & Shuffling Gait",
      "Bell’s Palsy & Facial Nerve Weakness",
      "Balance Disorders, Vestibular Ataxia & Fall Risk",
      "Peripheral Neuropathy & Diabetic Nerve Weakness",
      "Spinal Cord Injury (Paraplegia) Functional Training"
    ],
    commonProcedures: [
      "Neuro-Developmental Technique (NDT / Bobath Protocol)",
      "Motor Re-learning Program (MRP) & Task-Specific Training",
      "Parallel Bar Gait Training & Body-Weight Supported Walking",
      "Functional Electrical Stimulation (FES) for Foot Drop",
      "Vestibular Balance & Head Movement Drills",
      "Facial Muscle Stimulation & Neuromuscular Re-education"
    ],
    diagnosticCapabilities: "Berg Balance Scale (BBS), Timed Up and Go (TUG), Modified Ashworth Spasticity Scale, Functional Independence Measure (FIM).",
    expectedOutcomes: [
      "Improved walking stability and reduced fall hazards",
      "Enhanced hand grasp and self-care independence",
      "Optimized muscle tone and spasticity reduction"
    ],
    sessionsAvg: "15 – 30 Sessions"
  },
  {
    id: "modern-modalities-facilities",
    name: "Advanced Electrotherapy & Pain Modalities",
    shortName: "Modern Modalities",
    category: "Advanced Technology",
    iconName: "Cpu",
    cardGradient: "from-emerald-50/70 via-teal-50/30 to-white",
    borderColor: "hover:border-emerald-300",
    iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/images/physio_modalities.jpg",
    shortDesc: "Class-4 Laser, Dual-Channel IFT, Therapeutic Ultrasound, and TENS for deep cellular repair and non-invasive pain relief.",
    overview: "We invest in world-standard therapeutic modalities to accelerate healing times by up to 40%. These painless, non-invasive treatments penetrate deep into chronic inflammatory tissues to stimulate micro-circulation, desensitize hyperactive pain nerves, and jumpstart natural cellular tissue regeneration.",
    conditionsTreated: [
      "Acute Muscle Spasms & Painful Trigger Points",
      "Chronic Tendonitis, Bursitis & Synovitis",
      "Deep Tissue Fibrosis & Joint Stiffness",
      "Post-Traumatic Swelling & Edema Resorption",
      "Non-Healing Soft Tissue Strains",
      "Neuropathic Tingling & Burning Sensation"
    ],
    commonProcedures: [
      "Class-4 High-Power Therapeutic Laser Bio-stimulation",
      "Interferential Current Therapy (IFT) Vector Sweep",
      "1 MHz & 3 MHz Dual-Frequency Pulsed Therapeutic Ultrasound",
      "Transcutaneous Electrical Nerve Stimulation (TENS)",
      "Moist Thermotherapy & Cryo-Pneumatic Compression",
      "Cupping Therapy & Instrument Myofascial Release"
    ],
    diagnosticCapabilities: "Thermal Tissue Response Monitoring, Pain Scale VAS Rating, Real-time Biofeedback.",
    expectedOutcomes: [
      "Immediate reduction in acute localized pain & inflammation",
      "Speeded absorption of joint swelling and hematomas",
      "Deep cellular tissue regeneration"
    ],
    sessionsAvg: "5 – 8 Sessions"
  }
];

// ==========================================
// REHABILITATION PACKAGES (CITYCARE STYLE)
// ==========================================
export const REHAB_PACKAGES: RehabPackage[] = [
  {
    id: "spine-relief-pack",
    name: "Spine & Sciatica Rapid Recovery Plan",
    targetAudience: "For Chronic & Acute Lower Back, Disc Bulge, and Sciatica Patients",
    badgeText: "Most Popular",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    sessionsCount: "10 Dedicated Sessions",
    duration: "3 to 4 Weeks",
    price: "₹6,499",
    popular: true,
    shortDesc: "Comprehensive spinal decompression, manual mobilization, IFT electrotherapy, and core stabilization protocol.",
    detailedOverview: "Engineered specifically to decompress pinched nerve roots, alleviate agonizing sciatica radiating pain, and recondition deep core stabilizers without surgery or steroid injections.",
    keyInclusions: [
      "10 x Computerized Spinal Decompression / Traction sessions",
      "10 x Advanced IFT & Deep Heat electrotherapy sessions",
      "Manual Lumbar Spine Facet mobilization by Dr. Alistair Wright",
      "Multifidus & Transverse Abdominis muscle activation program",
      "Personalized ergonomic desk & sleeping posture prescription",
      "Home Maintenance Exercise Chart + Video access"
    ],
    clinicalAssessments: [
      "Full digital posture and spinal curvature assessment",
      "Neural tension goniometry and disc nerve test",
      "Bi-weekly pain VAS and mobility range re-evaluation"
    ],
    homeGuidance: [
      "Ergonomic lumbar roll setup guidance",
      "Safe lifting and daily movement mechanics",
      "Preventive spine hygiene routine"
    ]
  },
  {
    id: "knee-joint-mobility",
    name: "Knee Osteoarthritis & Joint Preservation",
    targetAudience: "For Knee Arthritis, Meniscus Tears & Stiffness in Adults & Seniors",
    badgeText: "Joint Preservation",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    sessionsCount: "12 Dedicated Sessions",
    duration: "4 Weeks",
    price: "₹7,499",
    popular: false,
    shortDesc: "Joint distraction, therapeutic laser, quad VMO strengthening, and balance drills for pain-free stair climbing.",
    detailedOverview: "A medically proven program to nourish worn cartilage, reduce morning joint stiffness, strengthen supporting knee tendons, and delay or eliminate the need for surgical knee replacement.",
    keyInclusions: [
      "12 x Class-4 Deep Laser / Therapeutic Ultrasound therapy",
      "Patellar mobilization and joint capsule distraction",
      "Targeted Vastus Medialis (VMO) & Gluteal activation drills",
      "Dynamic Balance Mat and Proprioception gait training",
      "Pain-relieving Kinesiology taping as clinically needed",
      "Stair-climbing kinetic mechanics retraining"
    ],
    clinicalAssessments: [
      "Knee joint flexion & extension angle measurement",
      "6-Minute Walk Test (6MWT) endurance evaluation",
      "Quadriceps strength dynamometry"
    ],
    homeGuidance: [
      "Safe low-impact daily exercise routine",
      "Joint preservation recommendations for sitting & standing",
      "Warm/Cold therapy application protocols"
    ]
  },
  {
    id: "sports-return-to-play",
    name: "Athletic Return-To-Play Performance Pack",
    targetAudience: "For Runners, Gym Athletes, Badminton, Cricket & Contact Sports",
    badgeText: "High Performance",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    sessionsCount: "8 Intensive Sessions",
    duration: "2 to 3 Weeks",
    price: "₹5,999",
    popular: false,
    shortDesc: "Aggressive soft tissue recovery, dry needling, plyometrics, and functional return-to-sport clearance testing.",
    detailedOverview: "Designed for active athletes recovering from ligament sprains, muscle tears, or tendinopathies to achieve peak athletic strength, speed, and mental confidence before competitive return.",
    keyInclusions: [
      "8 x High-Intensity Sports Rehab & Strength Reconditioning",
      "Trigger Point Dry Needling & IASTM Scar Tissue Release",
      "Eccentric tendon loading protocols for knee & ankle",
      "Agility ladder, change-of-direction & plyometric drills",
      "Pre-match dynamic sports strapping & protection advice",
      "Return-to-Sport clearance assessment report"
    ],
    clinicalAssessments: [
      "Single-leg triple hop test for limb symmetry (>90% threshold)",
      "Y-Balance athletic core stability test",
      "High-speed video movement mechanics review"
    ],
    homeGuidance: [
      "Pre-workout dynamic warm-up drills",
      "Post-match foam rolling & recovery sequence",
      "Nutritional and hydration recovery guidance"
    ]
  },
  {
    id: "cervical-headache-reboot",
    name: "Cervical Tech-Neck & Frozen Shoulder Care",
    targetAudience: "For IT Professionals, Desk Workers & Frozen Shoulder Patients",
    badgeText: "Ergonomic Focus",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    sessionsCount: "8 Dedicated Sessions",
    duration: "2 to 3 Weeks",
    price: "₹5,499",
    popular: false,
    shortDesc: "Gentle cervical traction, shoulder capsule release, trigger needling, and posture realignment.",
    detailedOverview: "Targets suboccipital stiffness, shoulder restriction, and nagging desk headaches by realigning the cervical spine and opening tight chest and shoulder capsules.",
    keyInclusions: [
      "8 x Gentle Computerized Cervical Traction sessions",
      "Suboccipital release and scapular gliding therapy",
      "Glenohumeral joint mobilization for frozen shoulder range",
      "Trigger point deactivation for upper trapezius spasms",
      "Full digital desk & monitor ergonomics prescription",
      "Micro-break neck stretching routines for office hours"
    ],
    clinicalAssessments: [
      "Cervical rotation and lateral flexion degrees",
      "Overhead shoulder abduction and external rotation angles",
      "Postural forward head angle (craniovertebral angle)"
    ],
    homeGuidance: [
      "Desk monitor height and chair setup rules",
      "Proper pillow and sleep neck alignment",
      "5-minute workday posture reset exercises"
    ]
  }
];

// ==========================================
// CLINIC FACILITIES & INFRASTRUCTURE
// ==========================================
export const FACILITIES: Facility[] = [
  {
    id: "electrotherapy-suite",
    name: "Advanced Electrotherapy & Modality Suite",
    category: "Pain Relief Technology",
    iconName: "Cpu",
    image: "/images/physio_modalities.jpg",
    description: "Fully digital dual-channel IFT, TENS, and High-Frequency Ultrasound stations delivering non-invasive, drug-free pain relief for acute spasms and inflammation.",
    keyFeatures: [
      "Multi-wave digital frequency settings",
      "Simultaneous deep heat thermotherapy",
      "Safe, sterile, and individually calibrated"
    ]
  },
  {
    id: "spinal-decompression",
    name: "Computerized Spine Traction & Decompression",
    category: "Spine Care",
    iconName: "Activity",
    image: "/images/physio_spine.jpg",
    description: "Precision lumbar and cervical decompression plinths engineered to gently separate compressed vertebrae and relieve trapped sciatica nerves.",
    keyFeatures: [
      "Microprocessor controlled pull angles",
      "Gentle progressive tension cycle",
      "Real-time safety release controls"
    ]
  },
  {
    id: "gym-rehab-arena",
    name: "Functional Kinetic Gym & Balance Arena",
    category: "Active Rehabilitation",
    iconName: "Dumbbell",
    image: "/images/physio_clinic_main.jpg",
    description: "Spacious rehabilitation arena equipped with Swiss balance spheres, resistance bands, parallel gait walking bars, and agility conditioning equipment.",
    keyFeatures: [
      "Non-slip medical balance flooring",
      "Customizable resistance stations",
      "Gait analysis and mirror biofeedback"
    ]
  },
  {
    id: "private-consultation",
    name: "Private 1-on-1 Clinical Assessment Rooms",
    category: "Patient Comfort & Privacy",
    iconName: "UserCheck",
    image: "/images/physio_neck.jpg",
    description: "Hygienic, sound-insulated consultation cabins for thorough movement evaluations, joint palpation, and private treatment sessions.",
    keyFeatures: [
      "Ergonomic hydraulic examination plinths",
      "Sanitized linens and strict medical hygiene",
      "Calm, stress-free clinical ambiance"
    ]
  }
];

// ==========================================
// PATIENT OUTCOMES & REVIEWS
// ==========================================
export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    patientName: "Rajesh S. Kulkarni",
    ageGender: "48 / Male",
    conditionTreated: "Severe L4-L5 Disc Herniation with Sciatica",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    testimonial: "I was advised spine surgery by two surgeons due to unbearable leg pain. Dr. Alistair Wright thoroughly examined my MRI, gave me immense confidence, and started his 10-session spinal decompression protocol. Within 4 sessions, the shooting pain vanished, and today I am back to work pain-free without any surgery!",
    recoveryMilestone: "100% Pain Relief & Return to Work (Non-Surgical)"
  },
  {
    id: "rev-2",
    patientName: "Meenakshi Deshpande",
    ageGender: "59 / Female",
    conditionTreated: "Bilateral Knee Osteoarthritis (Grade 3)",
    rating: 5,
    date: "1 month ago",
    verified: true,
    testimonial: "Climbing stairs to my first-floor apartment was pure torture. Dr. Wright’s knee joint distraction techniques, laser sessions, and muscle strengthening made my knees feel so much lighter. I can now walk 3 kilometers every morning and climb stairs easily without support.",
    recoveryMilestone: "Pain-Free Stair Climbing & Daily Walking"
  },
  {
    id: "rev-3",
    patientName: "Vikram Patil",
    ageGender: "26 / Male",
    conditionTreated: "Rotator Cuff Tear & Frozen Shoulder",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    testimonial: "I injured my shoulder during cricket practice and couldn't lift my arm past 45 degrees. Dr. Wright used dry needling and manual capsule mobilization. Within 3 weeks, I recovered 100% overhead reach and bowled in our league match last Sunday!",
    recoveryMilestone: "Full Overhead Mobility & Return to Cricket"
  },
  {
    id: "rev-4",
    patientName: "Pooja Hegde",
    ageGender: "34 / Female",
    conditionTreated: "Chronic Cervical Spondylosis & Migraine",
    rating: 5,
    date: "2 months ago",
    verified: true,
    testimonial: "Working 10 hours daily on laptop caused intense neck stiffness and weekly migraines. The posture correction, cervical traction, and ergonomic guidance at Siya's Physiotherapy changed my life. I haven't had a single headache in the last two months.",
    recoveryMilestone: "Zero Migraines & Restored Neck Flexibility"
  }
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS (FAQS)
// ==========================================
export const FAQS = [
  {
    id: "faq-1",
    question: "Do I need a doctor’s prescription or referral before visiting?",
    answer: "No, a prior doctor's referral is not mandatory. Dr. Alistair Wright conducts an independent, detailed orthopedic and neurological assessment during your first consultation. However, if you already have X-rays, MRI scans, or doctor reports, please bring them along."
  },
  {
    id: "faq-2",
    question: "How many physiotherapy sessions will I realistically need?",
    answer: "Most acute musculoskeletal issues (recent neck or lower back sprains) show significant improvement within 3 to 6 sessions. Long-standing degenerative conditions or post-operative joint rehabilitation typically benefit from 8 to 12 structured sessions."
  },
  {
    id: "faq-3",
    question: "How can I book an appointment with Dr. Alistair Wright?",
    answer: "You can book directly using the 'Book Appointment' button on this website, call us directly at +919281410305, or click the WhatsApp button to message our clinic concierge instantly."
  },
  {
    id: "faq-4",
    question: "Are your treatments painful?",
    answer: "Our modern techniques are gentle and designed to alleviate pain, not create it. While deep muscle releases or mobilization of stiff joints may cause slight therapeutic soreness, we constantly monitor your comfort throughout each session."
  },
  {
    id: "faq-5",
    question: "Do you offer home visit physiotherapy?",
    answer: "Yes, dedicated home rehabilitation visits are available for elderly patients, acute post-surgical cases, or stroke survivors unable to travel to the clinic. Please contact our reception at +919281410305 to check slot availability."
  }
];

// ==========================================
// RECOVERY STORIES (CASE STUDIES FOR STORIES PAGE)
// ==========================================
export const RECOVERY_STORIES = [
  {
    id: "story-1",
    patientName: "Ramesh Sharma",
    age: "52 Years",
    occupation: "Senior Accountant",
    condition: "Lumbar Disc Bulge with Sciatica",
    image: "/images/physio_spine.jpg",
    duration: "4 Weeks (10 Sessions)",
    symptoms: "Inability to sit more than 15 minutes, severe shooting pain down the right leg, sleep disturbance.",
    treatmentApplied: "Computerized spinal decompression, Maitland lumbar facet mobilization, core activation and McKenzie extension exercises.",
    clinicalResult: "Pain scale reduced from 9/10 to 0/10. Returned to 8-hour workday with full spinal flexibility."
  },
  {
    id: "story-2",
    patientName: "Sunita Kamat",
    age: "63 Years",
    occupation: "Homemaker",
    condition: "Bilateral Knee Osteoarthritis (Stage 3)",
    image: "/images/physio_knee.jpg",
    duration: "5 Weeks (12 Sessions)",
    symptoms: "Severe joint crunching, unable to bend knees or sit on floor, extreme pain when climbing stairs.",
    treatmentApplied: "Patellar joint distraction, class-4 deep laser therapy, closed kinetic chain quad exercises and gait balance training.",
    clinicalResult: "Knee flexion restored from 80° to 125°. Able to walk 2 km daily without pain or knee braces."
  },
  {
    id: "story-3",
    patientName: "Arun Nair",
    age: "29 Years",
    occupation: "Marathon Runner & Software Engineer",
    condition: "Patellar Tendinitis & IT Band Friction Syndrome",
    image: "/images/physio_sports.jpg",
    duration: "3 Weeks (8 Sessions)",
    symptoms: "Sharp anterior knee pain while running, unable to complete 5km training sessions.",
    treatmentApplied: "Eccentric quadriceps decline loading, dry needling to lateral retinaculum, running gait realignment.",
    clinicalResult: "Completed a 21km Half Marathon 6 weeks post-rehab with personal best timing."
  },
  {
    id: "story-4",
    patientName: "Ananya Joshi",
    age: "36 Years",
    occupation: "Graphic Designer",
    condition: "Severe Cervical Spondylosis with Frozen Shoulder",
    image: "/images/physio_neck.jpg",
    duration: "3.5 Weeks (9 Sessions)",
    symptoms: "Inability to raise left arm, constant neck and upper back burning, frequent tension migraines.",
    treatmentApplied: "Cervical traction, glenohumeral capsular stretching, ergonomic workstation recalibration.",
    clinicalResult: "Full 180° arm elevation achieved. Completely pain-free and discontinued all pain relievers."
  }
];

// Helper to construct WhatsApp link with custom message (strictly clinic name)
export function buildWhatsAppLink(message?: string): string {
  const defaultMsg = "Hello Siya's Physiotherapy & Rehabilitation Centre, I would like to book a consultation appointment. Please share available slots.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`;
}

export function buildCallLink(): string {
  return `tel:${CLINIC_INFO.phone}`;
}
