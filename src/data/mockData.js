import service1 from "../assets/services/service1.jpg";
import service2 from "../assets/services/service2.jpg";
import service3 from "../assets/services/service3.jpg";
import service4 from "../assets/services/service4.jpg";
import service5 from "../assets/services/service5.jpg";
import service6 from "../assets/services/service6.jpg";
import service7 from "../assets/services/service7.jpg";
import service8 from "../assets/services/service8.jpg";
import service9 from "../assets/services/service9.jpg";
import service10 from "../assets/services/service10.jpg";
import service11 from "../assets/services/service11.jpg";
import service12 from "../assets/services/service12.jpg";
import service13 from "../assets/services/service13.jpg";
import service14 from "../assets/services/service14.jpg";
import service15 from "../assets/services/service15.jpg";
import service16 from "../assets/services/service16.jpg";

// blog images import
import blog1 from "../assets/blogs/blog1.jpg";
import blog2 from "../assets/blogs/blog2.jpg";
import blog3 from "../assets/blogs/blog3.jpg";

// doctors images import 
import doctor1 from "../assets/doctors/doctor1.jpg"
import doctor2 from "../assets/doctors/doctor2.jpg"
import doctor3 from "../assets/doctors/doctor3.jpg"
import doctor4 from "../assets/doctors/doctor4.jpg"
import doctor5 from "../assets/doctors/doctor5.jpg"
import doctor6 from "../assets/doctors/doctor6.jpg"
import doctor7 from "../assets/doctors/doctor7.jpg"
import doctor8 from "../assets/doctors/doctor8.jpg"
import doctor9 from "../assets/doctors/doctor9.jpg"
import doctor10 from "../assets/doctors/doctor10.jpg"
import doctor11 from "../assets/doctors/doctor11.jpg"
import doctor12 from "../assets/doctors/doctor12.jpg"
import doctor13 from "../assets/doctors/doctor13.jpg"
import doctor14 from "../assets/doctors/doctor14.jpg"
import doctor15 from "../assets/doctors/doctor15.jpg"
import doctor16 from "../assets/doctors/doctor16.jpg"


export const servicesData = [
  {
    id: "cardiology",
    icon: "HT",
    image: service1,
    tag: "Heart Care",
    category: "Cardiology",
    title: "Cardiology & Cardiac Care",
    description: "Complete diagnosis and treatment of heart-related conditions including CAD, heart failure, arrhythmias, and emergency cardiac intervention.",
    details: "Our Cardiology department offers 24/7 cardiac emergency intervention, catheterization labs, non-invasive cardiac diagnostics, and post-cardiac rehabilitation. Equipped with state-of-the-art echocardiography, 12-lead ECG, stress testing, and nuclear imaging.",
    price: "From ₹800",
    timing: "24/7 Emergency",
    rating: 4.9,
    reviewsCount: 184,
    treatments: ["Angioplasty & Stenting", "Echocardiogram (ECG/ECHO)", "Pacemaker Implantation", "Heart Failure Management", "TMT Stress Testing"]
  },
  {
    id: "neurology",
    icon: "NR",
    image: service2,
    tag: "Brain & Spine",
    category: "Neurology",
    title: "Neurology & Neurosurgery",
    description: "Specialized care for disorders of the brain, spinal cord, peripheral nerves, and neuromuscular system with advanced neuro-imaging.",
    details: "We specialize in acute stroke management, epilepsy evaluation, Parkinson's disease therapy, complex spine surgeries, and memory care. Supported by 3T MRI, digital EEG, and intraoperative neuro-monitoring.",
    price: "From ₹900",
    timing: "Mon - Sat (8 AM - 8 PM)",
    rating: 4.8,
    reviewsCount: 142,
    treatments: ["Stroke Thrombolysis", "Epilepsy Management", "Migraine & Headache Care", "Parkinson's Therapy", "Spine Decompression"]
  },
  {
    id: "orthopedics",
    icon: "OR",
    image: service3,
    tag: "Bone & Joint",
    category: "Orthopedics",
    title: "Orthopedics & Joint Replacement",
    description: "Comprehensive treatment for bone fractures, joint arthritis, ligament injuries, spine disorders, and robotic joint replacement surgery.",
    details: "Providing minimally invasive arthroscopic surgeries, total knee and hip replacements, complex trauma care, and dedicated sports medicine rehabilitation programs for patients of all ages.",
    price: "From ₹850",
    timing: "Mon - Sat (9 AM - 7 PM)",
    rating: 4.9,
    reviewsCount: 165,
    treatments: ["Robotic Knee Replacement", "ACL/Ligament Repair", "Arthroscopy Surgery", "Fracture & Trauma Surgery", "Spinal Fusion"]
  },
  {
    id: "pediatrics",
    icon: "PD",
    image: service4,
    tag: "Child Care",
    category: "Pediatrics",
    title: "Pediatrics & Child Health",
    description: "Holistic healthcare for newborns, infants, children, and adolescents in a warm, child-friendly atmosphere.",
    details: "Our pediatric unit features a Level III NICU, pediatric intensive care unit (PICU), growth monitoring, childhood immunization drives, and specialized pediatric surgery.",
    price: "From ₹700",
    timing: "Mon - Sun (8 AM - 9 PM)",
    rating: 4.9,
    reviewsCount: 210,
    treatments: ["Newborn Care & NICU", "Childhood Vaccination", "Pediatric Asthma Care", "Growth & Development Check", "Pediatric Surgery"]
  },
  {
    id: "general",
    icon: "GM",
    image: service5,
    tag: "Primary Care",
    category: "General Medicine",
    title: "Internal & General Medicine",
    description: "Comprehensive management of acute illnesses, fever, lifestyle diseases, diabetes, hypertension, and routine health checks.",
    details: "Focusing on preventive medicine, chronic health disease management, multi-system disorders, and routine adult health screenings with personalized medical counseling.",
    price: "From ₹600",
    timing: "24/7 Available",
    rating: 4.7,
    reviewsCount: 195,
    treatments: ["Diabetes & Thyroid Management", "Hypertension Control", "Fever & Infection Care", "Comprehensive Health Checkups", "Preventive Health Screening"]
  },
  {
    id: "emergency",
    icon: "ER",
    image: service6,
    tag: "24/7 Response",
    category: "Emergency",
    title: "24/7 Emergency & Trauma Care",
    description: "Round-the-clock emergency medical department equipped for cardiac resuscitation, accident trauma, and critical care transport.",
    details: "Our Level 1 Trauma center features dedicated emergency triage, resuscitation bays, mobile ICU ambulances, point-of-care diagnostics, and immediate surgical theatre access.",
    price: "24/7 Emergency",
    timing: "Open 24 Hours / 365 Days",
    rating: 4.9,
    reviewsCount: 320,
    treatments: ["Accident Trauma Resuscitation", "Cardiac Arrest Response", "Poisoning & Overdose Care", "Emergency Airway Control", "ICU Ambulance Dispatch"]
  },
  {
    id: "gynecology",
    icon: "GY",
    image: service7,
    tag: "Women Health",
    category: "Gynecology",
    title: "Gynecology & Obstetrics",
    description: "Complete women's healthcare, prenatal care, painless labor delivery, laparoscopic surgeries, and menopause guidance.",
    details: "Dedicated state-of-the-art birthing suites, high-risk pregnancy monitoring, infertility counseling, hysteroscopy, and preventive cervical screening (Pap smear).",
    price: "From ₹850",
    timing: "Mon - Sat (9 AM - 8 PM)",
    rating: 4.9,
    reviewsCount: 178,
    treatments: ["Normal & C-Section Delivery", "High-Risk Pregnancy Care", "Laparoscopic Hysterectomy", "PCOS & Hormonal Therapy", "Pap Smear & Well-Woman Check"]
  },
  {
    id: "dental",
    icon: "DN",
    image: service8,
    tag: "Dental Health",
    category: "Dental Care",
    title: "Dental Surgery & Cosmetic Dentistry",
    description: "Advanced dental treatments including painless root canals, dental implants, invisible aligners, teeth whitening, and smile design.",
    details: "Equipped with digital intraoral scanners, painless laser dentistry, 3D Cone Beam CT imaging, and sterile operating environments for restorative and aesthetic dental work.",
    price: "From ₹500",
    timing: "Mon - Sat (10 AM - 7 PM)",
    rating: 4.8,
    reviewsCount: 130,
    treatments: ["Root Canal Treatment (RCT)", "Dental Implants", "Invisible Braces / Aligners", "Teeth Whitening & Scaling", "Wisdom Tooth Extraction"]
  },
  {
    id: "oncology",
    icon: "ON",
    image: service9,
    tag: "Specialist Care",
    category: "Oncology",
    title: "Oncology & Cancer Care",
    description: "Multidisciplinary cancer diagnosis, chemotherapy daycare, targeted immunotherapy, surgical oncology, and radiation planning.",
    details: "Comprehensive cancer center offering personalized tumor board reviews, precision chemotherapy, organ-preserving cancer surgery, targeted gene therapy, and supportive palliative care.",
    price: "From ₹1000",
    timing: "Mon - Sat (9 AM - 6 PM)",
    rating: 4.9,
    reviewsCount: 98,
    treatments: ["Chemotherapy & Daycare Unit", "Surgical Tumor Resection", "Targeted Immunotherapy", "Early Cancer Screening", "PET-CT Scan Diagnostics"]
  },
  {
    id: "ophthalmology",
    icon: "EY",
    image: service10,
    tag: "Vision Care",
    category: "Ophthalmology",
    title: "Ophthalmology & Eye Surgery",
    description: "Advanced eye care services including Femto-LASIK vision correction, phaco cataract surgery, glaucoma management, and retina care.",
    details: "Equipped with micro-incision cataract surgery systems, OCT retina scanner, computer vision syndrome clinics, and pediatric squint correction.",
    price: "From ₹650",
    timing: "Mon - Sat (9 AM - 6 PM)",
    rating: 4.8,
    reviewsCount: 112,
    treatments: ["Laser Cataract Surgery", "LASIK Vision Correction", "Glaucoma Pressure Check", "Retinal OCT Imaging", "Pediatric Eye Screening"]
  },
  {
    id: "ent",
    icon: "ENT",
    image: service11,
    tag: "Ear Nose Throat",
    category: "ENT",
    title: "ENT & Head-Neck Surgery",
    description: "Expert diagnosis and surgical care for hearing loss, sinus conditions, snoring, voice disorders, and thyroid neck nodules.",
    details: "Features endoscopic sinus surgery, micro-ear surgery, cochlear implant consultations, sleep apnea evaluation, and speech therapy coordination.",
    price: "From ₹700",
    timing: "Mon - Sat (9:30 AM - 6:30 PM)",
    rating: 4.8,
    reviewsCount: 104,
    treatments: ["Endoscopic Sinus Surgery", "Micro Tympanoplasty (Ear)", "Tonsillectomy & Adenoids", "Voice & Throat Endoscopy", "Hearing Loss Assessment"]
  },
  {
    id: "gastroenterology",
    icon: "GI",
    image: service12,
    tag: "Digestive Care",
    category: "Gastroenterology",
    title: "Gastroenterology & Endoscopy",
    description: "Specialized care for stomach, liver, pancreas, and intestinal disorders with diagnostic and therapeutic endoscopy.",
    details: "Offering upper GI endoscopy, colonoscopy, ERCP for gallstones, fatty liver clinics, and treatment for IBS, acidity, and ulcerative colitis.",
    price: "From ₹900",
    timing: "Mon - Sat (9 AM - 6 PM)",
    rating: 4.9,
    reviewsCount: 128,
    treatments: ["Diagnostic Endoscopy & Colonoscopy", "Fatty Liver & Hepatitis Care", "ERCP & Gallbladder Care", "Acid Reflux & IBS Therapy", "Polyp Removal"]
  },
  {
    id: "pulmonology",
    icon: "PL",
    image: service13,
    tag: "Respiratory Care",
    category: "Pulmonology",
    title: "Pulmonology & Chest Medicine",
    description: "Comprehensive diagnosis for asthma, COPD, pneumonia, sleep apnea, lung infections, and post-COVID pulmonary rehab.",
    details: "Features computerized spirometry pulmonary function tests (PFT), flexible video bronchoscopy, sleep study lab, and critical respiratory care units.",
    price: "From ₹850",
    timing: "Mon - Sat (9 AM - 7 PM)",
    rating: 4.9,
    reviewsCount: 115,
    treatments: ["Asthma & COPD Care", "Pulmonary Function Test (PFT)", "Polysomnography (Sleep Study)", "Bronchoscopy Procedure", "Allergy Desensitization"]
  },
  {
    id: "nephrology",
    icon: "NP",
    image: service14,
    tag: "Kidney Care",
    category: "Nephrology",
    title: "Nephrology & Dialysis Unit",
    description: "Dedicated renal care center providing 24/7 hemodialysis, kidney stone lithotripsy, and chronic kidney disease management.",
    details: "State-of-the-art dialysis center with ultra-pure water treatment plant, vascular access surgery, renal biopsy facilities, and kidney transplant preparation.",
    price: "From ₹850",
    timing: "24/7 Dialysis Unit",
    rating: 4.8,
    reviewsCount: 136,
    treatments: ["24/7 Hemodialysis Unit", "Kidney Stone Laser Lithotripsy", "Chronic Kidney Disease (CKD) Care", "Hypertension & Kidney Care", "AV Fistula Surgery"]
  },
  {
    id: "dermatology",
    icon: "DM",
    image: service15,
    tag: "Skin & Hair",
    category: "Dermatology",
    title: "Dermatology & Cosmetology",
    description: "Clinical skin treatment for acne, eczema, psoriasis, hair loss PRP therapy, laser skin rejuvenation, and scar reduction.",
    details: "Combines medical dermatology with advanced aesthetic laser treatments, chemical peels, hair transplant consultation, and mole evaluation.",
    price: "From ₹750",
    timing: "Mon - Sat (10 AM - 7 PM)",
    rating: 4.9,
    reviewsCount: 152,
    treatments: ["PRP Hair Restoration", "Acne & Scar Laser Treatment", "Eczema & Psoriasis Therapy", "Anti-Aging & Skin Rejuvenation", "Mole & Wart Removal"]
  },
  {
    id: "radiology",
    icon: "RD",
    image: service16,
    tag: "Diagnostics",
    category: "Radiology",
    title: "Radiology & Advanced Imaging",
    description: "High-precision diagnostic imaging center featuring 3T MRI, 128-slice CT scan, 4D Ultrasound, Digital X-Ray, and Pathology Lab.",
    details: "Fast accurate digital reports integrated with hospital PACS system for immediate consultation by specialists around the clock.",
    price: "From ₹700",
    timing: "24/7 Diagnostics",
    rating: 4.7,
    reviewsCount: 220,
    treatments: ["3T MRI Scan", "128-Slice Cardiac CT Scan", "4D Color Doppler Ultrasound", "Digital Mammography", "Full Body DEXA Scan"]
  }
];

export const doctorsData = [
  {
    id: "dr-rahul-sharma",
    name: "Dr. Rahul Sharma",
    speciality: "Senior Cardiologist",
    department: "Cardiology",
    experience: "15 Years",
    rating: 4.9,
    reviewsCount: 142,
    consultationFee: "₹800",
    availability: "Available Today",
    timing: "10:00 AM - 02:00 PM",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology), FACC",
    bio: "Dr. Rahul Sharma is a renowned Senior Cardiologist with over 15 years of experience performing complex coronary angioplasties, pacemaker implantations, and non-invasive cardiac care.",
    image: doctor1
  },
  {
    id: "dr-priya-patil",
    name: "Dr. Priya Patil",
    speciality: "Senior Neurologist",
    department: "Neurology",
    experience: "12 Years",
    rating: 4.8,
    reviewsCount: 118,
    consultationFee: "₹900",
    availability: "Available Today",
    timing: "11:00 AM - 04:00 PM",
    qualifications: "MBBS, MD, DM (Neurology)",
    bio: "Dr. Priya Patil specializes in movement disorders, acute stroke intervention, neuromuscular rehabilitation, and epilepsy management with over 12 years of clinical excellence.",
    image: doctor2
  },
  {
    id: "dr-amit-deshmukh",
    name: "Dr. Amit Deshmukh",
    speciality: "Robotic Joint & Orthopedic Surgeon",
    department: "Orthopedics",
    experience: "18 Years",
    rating: 4.9,
    reviewsCount: 175,
    consultationFee: "₹850",
    availability: "Mon - Sat",
    timing: "09:00 AM - 01:00 PM",
    qualifications: "MBBS, MS (Orthopedics), M.Ch (UK)",
    bio: "Dr. Amit Deshmukh is a pioneer in computer-navigated robotic knee replacements, complex joint arthroscopy, and sports traumatology.",
    image: doctor3
  },
  {
    id: "dr-neha-kulkarni",
    name: "Dr. Neha Kulkarni",
    speciality: "Senior Pediatrician & Child Specialist",
    department: "Pediatrics",
    experience: "11 Years",
    rating: 4.9,
    reviewsCount: 190,
    consultationFee: "₹700",
    availability: "Available Today",
    timing: "04:00 PM - 08:00 PM",
    qualifications: "MBBS, MD (Pediatrics), DCH",
    bio: "Dr. Neha Kulkarni offers compassionate child healthcare, infant nutrition guidance, growth tracking, and pediatric allergy treatment.",
    image: doctor4
  },
  {
    id: "dr-rohan-joshi",
    name: "Dr. Rohan Joshi",
    speciality: "Consultant General Physician",
    department: "General Medicine",
    experience: "14 Years",
    rating: 4.7,
    reviewsCount: 130,
    consultationFee: "₹600",
    availability: "Available Today",
    timing: "09:00 AM - 05:00 PM",
    qualifications: "MBBS, MD (Internal Medicine)",
    bio: "Dr. Rohan Joshi focuses on diabetes care, metabolic disorders, infectious disease treatment, and adult preventive wellness programs.",
    image: doctor5
  },
  {
    id: "dr-sneha-mehta",
    name: "Dr. Sneha Mehta",
    speciality: "Senior Gynecologist & Obstetrician",
    department: "Gynecology",
    experience: "16 Years",
    rating: 4.9,
    reviewsCount: 162,
    consultationFee: "₹850",
    availability: "Mon - Sat",
    timing: "10:00 AM - 03:00 PM",
    qualifications: "MBBS, MS (Obstetrics & Gynecology), DNB",
    bio: "Dr. Sneha Mehta is an expert in high-risk pregnancies, minimally invasive laparoscopic gynecological surgeries, and fertility management.",
    image: doctor6
  },
  {
    id: "dr-karan-shah",
    name: "Dr. Karan Shah",
    speciality: "Consultant Dental Surgeon",
    department: "Dental Care",
    experience: "10 Years",
    rating: 4.8,
    reviewsCount: 95,
    consultationFee: "₹500",
    availability: "Available Today",
    timing: "11:00 AM - 07:00 PM",
    qualifications: "BDS, MDS (Maxillofacial Surgery)",
    bio: "Dr. Karan Shah provides painless root canal therapies, dental implants, aligners, and aesthetic smile rehabilitation.",
    image: doctor7
  },
  {
    id: "dr-anjali-more",
    name: "Dr. Anjali More",
    speciality: "Dermatologist & Cosmetologist",
    department: "Dermatology",
    experience: "12 Years",
    rating: 4.9,
    reviewsCount: 154,
    consultationFee: "₹750",
    availability: "Tue - Sun",
    timing: "02:00 PM - 07:00 PM",
    qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    bio: "Dr. Anjali More is an acclaimed dermatologist specializing in laser skin therapies, anti-aging solutions, hair loss PRP, and acne control.",
    image: doctor8
  },
  {
    id: "dr-rajesh-verma",
    name: "Dr. Rajesh Verma",
    speciality: "Senior Medical Oncologist",
    department: "Oncology",
    experience: "17 Years",
    rating: 4.9,
    reviewsCount: 88,
    consultationFee: "₹1000",
    availability: "Mon - Fri",
    timing: "10:00 AM - 02:00 PM",
    qualifications: "MBBS, MD, DM (Medical Oncology), ECMO",
    bio: "Dr. Rajesh Verma is a distinguished Senior Medical Oncologist with 17+ years of clinical experience specializing in precision chemotherapy, targeted immunotherapy, surgical oncology, and comprehensive cancer care.",
    image: doctor9
  },
  {
    id: "dr-meera-nambiar",
    name: "Dr. Meera Nambiar",
    speciality: "Ophthalmologist & Cornea Specialist",
    department: "Ophthalmology",
    experience: "13 Years",
    rating: 4.8,
    reviewsCount: 106,
    consultationFee: "₹650",
    availability: "Available Today",
    timing: "09:30 AM - 01:30 PM",
    qualifications: "MBBS, MS (Ophthalmology), FICO (UK)",
    bio: "Dr. Meera Nambiar is an eye microsurgeon with expertise in robotic laser cataract surgery, LASIK, and corneal graft procedures.",
    image: doctor10
  },
  {
    id: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra",
    speciality: "ENT & Head Neck Surgeon",
    department: "ENT",
    experience: "14 Years",
    rating: 4.8,
    reviewsCount: 114,
    consultationFee: "₹700",
    availability: "Mon - Sat",
    timing: "10:00 AM - 04:00 PM",
    qualifications: "MBBS, MS (ENT), DNB",
    bio: "Dr. Vikram Malhotra is an expert in endoscopic sinus surgeries, sleep apnea treatments, hearing loss restoration, and thyroid surgery.",
    image: doctor11
  },
  {
    id: "dr-sunita-rao",
    name: "Dr. Sunita Rao",
    speciality: "Consultant Gastroenterologist",
    department: "Gastroenterology",
    experience: "15 Years",
    rating: 4.9,
    reviewsCount: 132,
    consultationFee: "₹900",
    availability: "Available Today",
    timing: "11:00 AM - 03:00 PM",
    qualifications: "MBBS, MD, DM (Gastroenterology)",
    bio: "Dr. Sunita Rao specializes in advanced diagnostic endoscopy, fatty liver management, irritable bowel disease, and digestive disorders.",
    image: doctor12
  },
  {
    id: "dr-kabir-mehta",
    name: "Dr. Kabir Mehta",
    speciality: "Consultant Nephrologist",
    department: "Nephrology",
    experience: "13 Years",
    rating: 4.8,
    reviewsCount: 97,
    consultationFee: "₹850",
    availability: "Mon - Sat",
    timing: "10:00 AM - 02:00 PM",
    qualifications: "MBBS, MD, DM (Nephrology)",
    bio: "Dr. Kabir Mehta leads our hemodialysis and kidney stone management programs with extensive experience in renal replacement therapies.",
    image: doctor13
  },
  {
    id: "dr-swati-deshpande",
    name: "Dr. Swati Deshpande",
    speciality: "Consultant Psychiatrist & Behavioral Health",
    department: "Psychiatry",
    experience: "11 Years",
    rating: 4.9,
    reviewsCount: 110,
    consultationFee: "₹800",
    availability: "Mon - Sat",
    timing: "02:00 PM - 07:00 PM",
    qualifications: "MBBS, MD (Psychiatry), DPM",
    bio: "Dr. Swati Deshpande provides holistic mental health counseling, stress management, clinical depression therapy, and anxiety control.",
    image: doctor14
  },
  {
    id: "dr-siddharth-roy",
    name: "Dr. Siddharth Roy",
    speciality: "Pulmonologist & Critical Care Specialist",
    department: "Pulmonology",
    experience: "15 Years",
    rating: 4.9,
    reviewsCount: 125,
    consultationFee: "₹850",
    availability: "Available Today",
    timing: "09:00 AM - 01:00 PM",
    qualifications: "MBBS, MD (Pulmonary Medicine), FCCP",
    bio: "Dr. Siddharth Roy is a chest specialist focusing on asthma, COPD management, sleep apnea studies, and intensive respiratory care.",
    image: doctor15
  },
  {
    id: "dr-divya-nair",
    name: "Dr. Divya Nair",
    speciality: "Senior Radiologist & Diagnostic Imaging",
    department: "Radiology",
    experience: "10 Years",
    rating: 4.7,
    reviewsCount: 89,
    consultationFee: "₹700",
    availability: "Available Today",
    timing: "08:00 AM - 04:00 PM",
    qualifications: "MBBS, MD (Radio-Diagnosis)",
    bio: "Dr. Divya Nair specializes in 3T MRI interpretation, cardiac CT scans, 4D ultrasound, and cross-sectional diagnostic imaging.",
    image: doctor16
  }
];

export const healthPackages = [
  {
    id: "pkg-basic",
    name: "Basic Health Screening",
    price: "₹1,499",
    originalPrice: "₹2,999",
    discount: "50% OFF",
    testsCount: "45+ Parameters",
    popular: false,
    description: "Essential annual screening package designed for routine wellness checkups.",
    features: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar",
      "Lipid Profile (Cholesterol)",
      "Kidney Function Test (KFT)",
      "Liver Function Test (LFT)",
      "Doctor Consultation"
    ]
  },
  {
    id: "pkg-cardiac",
    name: "Executive Heart Care",
    price: "₹3,999",
    originalPrice: "₹7,500",
    discount: "46% OFF",
    testsCount: "65+ Parameters",
    popular: true,
    description: "In-depth cardiac assessment for early detection of heart risk factors.",
    features: [
      "12-Lead ECG & ECHO Scan",
      "TMT Treadmill Stress Test",
      "Cardiac Biomarkers (Hs-CRP)",
      "Advanced Lipid Sub-fractions",
      "HbA1c Diabetes Profile",
      "Senior Cardiologist Consultation"
    ]
  },
  {
    id: "pkg-women",
    name: "Women Total Wellness",
    price: "₹2,999",
    originalPrice: "₹5,800",
    discount: "48% OFF",
    testsCount: "55+ Parameters",
    popular: false,
    description: "Comprehensive health package tailored for female hormonal and bone health.",
    features: [
      "Complete Thyroid Profile (T3, T4, TSH)",
      "Vitamin D3 & B12 Screening",
      "Pap Smear Screening",
      "Calcium & Iron Markers",
      "Abdomen & Pelvis Ultrasound",
      "Gynecologist Consultation"
    ]
  },
  {
    id: "pkg-senior",
    name: "Senior Citizen Shield",
    price: "₹4,499",
    originalPrice: "₹8,900",
    discount: "50% OFF",
    testsCount: "75+ Parameters",
    popular: false,
    description: "Complete health evaluation for seniors focusing on vital organ safety.",
    features: [
      "Full Body DEXA Bone Density",
      "Comprehensive KFT & LFT",
      "Uric Acid & Joint Markers",
      "Chest X-Ray & ECG",
      "Eye & Dental Screening",
      "Physician & Diet Counseling"
    ]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Rajesh K. Singhania",
    location: "Mumbai",
    rating: 5,
    treatment: "Angioplasty & Heart Surgery",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "The cardiac team at MediCare saved my life during an unexpected cardiac emergency. Dr. Rahul Sharma and the ICU staff were extremely attentive and professional!"
  },
  {
    id: 2,
    name: "Pooja Deshpande",
    location: "Pune",
    rating: 5,
    treatment: "Maternity & Delivery",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "I had a wonderful experience during the birth of my daughter. Dr. Sneha Mehta and the nursing staff treated us like family. Clean rooms and compassionate care!"
  },
  {
    id: 3,
    name: "Sunil Verma",
    location: "Thane",
    rating: 5,
    treatment: "Robotic Knee Replacement",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "I suffered from severe knee pain for 5 years. Dr. Amit Deshmukh performed robotic knee replacement and I was walking comfortably within two weeks!"
  },
  {
    id: 4,
    name: "Anita Saxena",
    location: "Navi Mumbai",
    rating: 5,
    treatment: "Pediatric Care",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    comment: "Dr. Neha Kulkarni is the best pediatrician we have ever met. She handles children with immense patience and explains every treatment clearly."
  }
];

export const faqData = [
  {
    id: 1,
    category: "Appointments",
    question: "How can I book an appointment with a specialist?",
    answer: "You can easily book an appointment online using our interactive Appointment Booking tool, or call our dedicated helpline at +91 98765 43210. Walk-ins are also welcome at our OPD reception."
  },
  {
    id: 2,
    category: "Emergency",
    question: "Are emergency and ambulance services available 24/7?",
    answer: "Yes, our Emergency and Trauma Department operates 24 hours a day, 365 days a year with advanced mobile ICU ambulances and emergency physicians on standby."
  },
  {
    id: 3,
    category: "Insurance",
    question: "Does MediCare offer cashless insurance hospitalization?",
    answer: "Yes! We partner with over 30 leading insurance TPA providers including Star Health, ICICI Lombard, Max Bupa, HDFC Ergo, Care Health, and SBI General for cashless hospital admissions."
  },
  {
    id: 4,
    category: "Diagnostics",
    question: "When will I receive my diagnostic test reports?",
    answer: "Routine blood and pathology test reports are delivered within 4-6 hours via SMS/Email. MRI, CT Scan, and Ultrasound reports are finalized within 12 hours by our senior radiologists."
  },
  {
    id: 5,
    category: "Visiting Hours",
    question: "What are the hospital visiting hours for patient relatives?",
    answer: "Visiting hours for general wards are 11:00 AM - 01:00 PM and 05:00 PM - 07:00 PM daily. ICU visiting hours are strictly restricted to 04:00 PM - 05:00 PM for patient safety."
  }
];

export const blogArticles = [
  {
    id: 1,
    title: "10 Essential Tips to Keep Your Heart Healthy After 40",
    category: "Cardiology",
    date: "Oct 02, 2026",
    readTime: "4 min read",
    image: blog1,
    summary: "Discover key lifestyle habits, dietary choices, and preventive screenings to protect your cardiovascular wellness."
  },
  {
    id: 2,
    title: "Understanding Childhood Immunity & Vaccination Schedules",
    category: "Pediatrics",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    image: blog2,
    summary: "A comprehensive guide for parents on essential childhood vaccines, nutrition boost, and seasonal precautions."
  },
  {
    id: 3,
    title: "Modern Advances in Minimal Invasive Robotic Surgery",
    category: "Orthopedics",
    date: "Sep 24, 2026",
    readTime: "6 min read",
    image: blog3,
    summary: "Learn how robotic-assisted joint surgeries offer faster recovery, minimal pain, and superior implant longevity."
  }
];
