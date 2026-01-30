import { Destination, Office, Blog, Testimonial, College, CollegeDetailData, ProgramDetailData, MBBSDetailData, StudyIndiaDetailData, Service } from './types';

export const LOGO_URL = "https://www.iexplaineducation.com/wp-content/uploads/2023/04/Logo-2-scaled-e1684926432756-768x307.jpg";
export const HERO_IMG_URL = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200";

export const PRIVACY_POLICY_CONTENT = `
<h3>1. Introduction</h3>
<p>Welcome to iExplain Education. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your personal information when you visit our website or use our services.</p>
<p>We collect basic information such as name, email, and phone number when you fill out forms on our site. This is used solely to provide counseling services.</p>
`;

export const TERMS_CONTENT = `
<h3>1. Acceptance of Terms</h3>
<p>By accessing and using the iExplain Education website and services, you agree to be bound by these Terms and Conditions.</p>
<p>All content provided is for informational purposes. We strive for accuracy but cannot guarantee admission as it depends on university criteria.</p>
`;

export const OFFICE_ADDRESSES: Office[] = [
  { 
    state: "Uttar Pradesh", 
    city: "Noida (HQ)", 
    slug: "noida-hq",
    address: "#301, World Trade Tower (WTT), Sector 16, Noida - 201301", 
    phone: "+91 97738 47799", 
    lat: 28.5708, 
    lng: 77.3260,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.957388755013!2d77.3235652755026!3d28.571068875701777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50742d4a53d%3A0xc682914104085489!2sWave%20Silver%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  { state: "Uttarakhand", city: "Dehradun", slug: "dehradun", address: "3rd Floor, Puspa Tower, 52 Subhash Road, Dehradun", phone: "+91 97738 47799", lat: 30.3165, lng: 78.0322 },
  { state: "Maharashtra", city: "Pune", slug: "pune", address: "601, Karan Victoria, Shivaji Nagar, Pune - 411005", phone: "+91 97738 47799", lat: 18.5204, lng: 73.8567 },
  { state: "Rajasthan", city: "Kota", slug: "kota", address: "Pratham Residency, New Jawahar Nagar, Kota, Rajasthan", phone: "+91 97738 47799", lat: 25.2138, lng: 75.8648 },
  { state: "Bihar", city: "Patna", slug: "patna", address: "3rd Floor, Sudama Bhawan, Hira Panna Lane, Boring Road, Patna", phone: "+91 97738 47799", lat: 25.5941, lng: 85.1376 }
];

export const FOOTER_COLLEGES = {
  mbbs: [
    { country: 'Russia', names: ['Kazan Federal University', 'Bashkir State Medical University', 'Orenburg State Medical University', 'Crimea Federal University', 'First Moscow State Medical University'] },
    { country: 'Georgia', names: ['Tbilisi State Medical University', 'Batumi Shota Rustaveli State University', 'David Tvildiani Medical University', 'European University Georgia'] },
    { country: 'Philippines', names: ['University of Santo Tomas', 'AMA School of Medicine', 'Our Lady of Fatima University', 'University of the East Ramon Magsaysay'] },
    { country: 'Bangladesh', names: ['Dhaka National Medical College', 'Bangladesh Medical College', 'Jahurul Islam Medical College', 'Holy Family Red Crescent Medical College'] },
    { country: 'Nepal', names: ['Tribhuvan University Institute of Medicine', 'Kathmandu University School of Medical Sciences', 'B.P. Koirala Institute of Health Sciences', 'Patan Academy of Health Sciences'] },
    { country: 'Kazakhstan', names: ['Al-Farabi Kazakh National University', 'Kazakh National Medical University', 'Astana Medical University', 'South Kazakhstan Medical Academy'] },
    { country: 'Uzbekistan', names: ['Tashkent Medical Academy', 'Samarkand State Medical University', 'Bukhara State Medical Institute', 'Andijan State Medical Institute'] }
  ],
  study: [
    { country: 'USA', names: ['Northeastern University', 'Arizona State University', 'New York University', 'University of Texas at Austin', 'University of Southern California'] },
    { country: 'UK', names: ['University of Leeds', 'University of Manchester', 'University of Birmingham', 'University of Warwick', 'Kings College London'] },
    { country: 'Australia', names: ['University of Melbourne', 'Monash University', 'University of Sydney', 'Deakin University', 'RMIT University'] },
    { country: 'Canada', names: ['University of Toronto', 'University of British Columbia', 'McGill University', 'York University', 'Seneca College'] },
    { country: 'Ireland', names: ['Trinity College Dublin', 'University College Dublin', 'Dublin City University', 'University of Limerick'] },
    { country: 'New Zealand', names: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'Auckland University of Technology'] },
    { country: 'Dubai', names: ['University of Birmingham Dubai', 'Middlesex University Dubai', 'Heriot-Watt University Dubai', 'Manipal Academy of Higher Education Dubai'] }
  ]
};

const generatePlaceholder = (name: string, type: string) => ({
  name, location: 'Global Campus', type: 'Public/Private', established: '1900s',
  image: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1200',
  intro: `${name} is a premier institution known for its academic excellence.`,
  highlights: ['World Class Infrastructure', 'Global Recognition'],
  eligibility: ['10+2 with 50% Marks', 'Valid Passport'],
  admissionProcess: ['Submit Application', 'Document Verification'],
  documents: ['Passport', 'Transcripts'],
  fees: { structure: [{ label: 'Tuition Fee', value: 'Contact for details' }], note: 'Fees subject to change.' },
  courses: [type === 'MBBS Abroad' ? 'MBBS' : 'Undergraduate Programs'],
  studentLife: ['Sports Complex', 'Library'],
  placements: ['Global Career Opportunities'],
  gallery: []
});

const DETAILED_COLLEGES: Record<string, CollegeDetailData> = {
  "kazan-federal-university": {
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    type: "Public Federal University",
    established: "1804",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    intro: "Kazan Federal University (KFU) is one of the oldest universities in Russia...",
    highlights: ["2nd Oldest University in Russia", "WHO & NMC Recognized"],
    eligibility: ["Minimum 50% marks in PCB", "NEET Qualified"],
    admissionProcess: ["Application", "Admission Letter"],
    documents: ["10th & 12th Marksheets", "Passport"],
    fees: { structure: [{ label: "Tuition Fee", value: "468,000 RUB" }], note: "Exchange rate fluctuates." },
    courses: ["MBBS"],
    studentLife: ["Hostels", "Sports"],
    placements: ["FMGE/NExT eligible"],
    gallery: ["https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"]
  },
  "northeastern-university": {
    name: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    type: "Private Research University",
    established: "1898",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
    intro: "Northeastern University is a top-tier private research university...",
    highlights: ["#1 in Co-op", "Tier 1 Research"],
    eligibility: ["High School Diploma", "GPA 3.0+"],
    admissionProcess: ["Common App", "Fee Payment"],
    documents: ["Transcripts", "SOP"],
    fees: { structure: [{ label: "Tuition", value: "$60,000/year" }], note: "Varies by program" },
    courses: ["CS", "Business"],
    studentLife: ["300+ Orgs"],
    placements: ["High Employability"],
    gallery: ["https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600"]
  }
};

const allMbbsNames = FOOTER_COLLEGES.mbbs.flatMap(c => c.names);
const allStudyNames = FOOTER_COLLEGES.study.flatMap(c => c.names);
allMbbsNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS Abroad');
});
allStudyNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'Study Abroad');
});
export const COLLEGE_DETAILS = DETAILED_COLLEGES;

export const ABOUT_US_CONTENT = { intro: `Welcome to iExplain Education...`, vision: { title: "Opening Doors...", text: "..." }, mission: { title: "Empowering Minds...", points: [] } };
export const CORE_VALUES_FULL = [{ title: "Integrity", desc: "..." }];
export const TEAM_MEMBERS = [{ name: "Sunil Baranwal", role: "Director", image: "https://ui-avatars.com/api/?name=Sunil+Baranwal" }];

export const INDIA_COURSES_DETAILED: Record<string, StudyIndiaDetailData> = {
  "mbbs": {
    title: "Study MBBS in India for Indian Students : MBBS Fees & MBBS Admission in India",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    intro: "MBBS in India is one of the highly preferred courses by medical aspirants worldwide. The strong education structure, sincere professors, and top-hole medical universities in India are paving the way for success.",
    why: {
      title: "Why MBBS in India?",
      points: [
        "Medical universities in India are some of the finest and prominent ones in the world.",
        "There are over 600+ medical universities and colleges in India."
      ]
    },
    duration: {
      title: "Duration of MBBS in India",
      cards: [
        "MBBS in India has a tenure of 5.5 years. It includes 4.5 years of classroom study, and the last year is for an internship."
      ]
    },
    eligibility: {
      title: "Eligibility Criteria for MBBS in India",
      points: [
        "The candidate must be of 17 years of age at the time of MBBS admission in India.",
        "The candidate must not exceed the age of 25 years."
      ]
    },
    documents: {
      title: "Documents Required for MBBS in India",
      subtitle: "Medical candidate must keep all the following documents ready for seeking MBBS admission in India:",
      points: [
        "Medical candidates must possess valid mark sheets of class 10th and class 12th.",
        "NEET scorecard is an essential requirement."
      ]
    },
    process: {
      title: "Process of Admission for MBBS in India",
      steps: [
        "You must complete Class XII with Physics, Chemistry, and Biology.",
        "The student must qualify in NEET for admission in MBBS."
      ]
    },
    economical: {
      title: "Economical MBBS India",
      points: [
        "India offers an economical MBBS if the medical student can clear the NEET exam."
      ]
    },
    advantages: {
      title: "Advantages of MBBS in India",
      points: [
        "India is ranked among the top medical, educational facilities in the world."
      ]
    },
    international: {
      title: "International Students",
      points: [
        "India welcomes students from all over the world.",
        "Reserved seats for NRI students in many colleges."
      ]
    },
    dates: {
      title: "Important Dates",
      points: [
        "NEET Exam: usually in May.",
        "Counseling: Starts in June/July."
      ]
    },
    govt: {
      title: "Government Colleges",
      points: [
        "AIIMS New Delhi",
        "MAMC New Delhi",
        "KGMC Lucknow"
      ]
    },
    explore: {
      title: "Explore India",
      points: [
        "Rich culture and heritage.",
        "Diverse landscapes and climates."
      ]
    }
  }
};

export const STUDENT_SERVICES_DATA: Service[] = [
  {
    id: "career-counseling",
    title: "Career Counseling",
    desc: "Expert guidance to help you choose the right career path and university.",
    icon: "fa-solid fa-comments",
    fullDesc: "Our expert counselors analyze your profile to suggest the best universities and courses that align with your career goals and budget."
  },
  {
    id: "university-selection",
    title: "University Selection",
    desc: "We help you select the best universities based on rankings, budget, and location.",
    icon: "fa-solid fa-building-columns",
    fullDesc: "With over 500+ universities in our network, we ensure you get admitted to a top-tier institution."
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    desc: "Complete support for visa application, documentation, and interview preparation.",
    icon: "fa-brands fa-cc-visa",
    fullDesc: "Our visa success rate is 99%. We guide you through the complex documentation and interview process."
  },
  {
    id: "travel-assistance",
    title: "Travel Assistance",
    desc: "Flight bookings, forex, and pre-departure briefings for a smooth journey.",
    icon: "fa-solid fa-plane-departure",
    fullDesc: "We assist with economical flight tickets, forex cards, and ensure you have all essentials before flying."
  }
];

export const COUNTRY_DETAILS: any = {}; // Placeholder if needed

export const BLOG_POSTS: Blog[] = [
  {
    id: "1",
    title: "Top 5 Countries for MBBS Abroad in 2025",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "Jan 15, 2025",
    category: "MBBS Abroad",
    author: "Admin",
    content: "Russia, Georgia, and Kazakhstan remain top choices...",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "How to Crack NEET 2025: Expert Tips",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800",
    date: "Jan 10, 2025",
    category: "Entrance Exams",
    author: "Dr. Sharma",
    content: "Consistency is key to cracking NEET...",
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Study in UK Without IELTS",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    date: "Jan 05, 2025",
    category: "Study Abroad",
    author: "Admin",
    content: "Many UK universities accept MOI instead of IELTS...",
    readTime: "6 min"
  }
];

export const STUDY_ABROAD_DETAILED: Record<string, ProgramDetailData> = {
  "usa": {
    title: "Study in USA",
    tagline: "Land of Opportunities",
    heroImage: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80&w=1600",
    content: "<h3>Why Study in USA?</h3><p>The USA is home to the world's top universities...</p>",
    faqs: [{ question: "Is SAT mandatory?", answer: "Not for all universities, many are test-optional." }]
  }
};

export const MBBS_ABROAD_DETAILED: Record<string, MBBSDetailData> = {
  "russia": {
    title: "MBBS in Russia",
    heroImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1600",
    intro: {
      text: "Russia offers high-quality medical education at affordable costs...",
      image: "https://images.unsplash.com/photo-1584036561566-b45238f2e26f?auto=format&fit=crop&q=80&w=600"
    },
    highlights: [{ title: "Duration", value: "6 Years" }, { title: "Medium", value: "English" }],
    topUniversities: ["Kazan Federal University", "Bashkir State Medical University"],
    facts: { intro: "Russia is the largest country in the world...", list: ["High Literacy Rate", "Advanced Healthcare"] },
    documents: [{ icon: "fa-passport", label: "Passport" }, { icon: "fa-file", label: "Mark sheets" }],
    advantages: ["Low Tuition Fees", "WHO Recognized"],
    studentLife: { intro: "Vibrant student life...", list: ["Indian Food Available", "Heated Hostels"] }
  }
};

export const EXAMS_DETAILED: any = {
  "neet-ug": {
    title: "NEET UG 2025",
    overview: "National Eligibility cum Entrance Test for medical aspirants.",
    eligibility: ["10+2 with PCB", "Age 17+"]
  }
};

export const MEGA_MENU_DATA = {
  "STUDY ABROAD": [
    { name: "USA", link: "#/study-abroad/usa", code: "US" },
    { name: "UK", link: "#/study-abroad/uk", code: "GB" },
    { name: "Canada", link: "#/study-abroad/canada", code: "CA" },
    { name: "Australia", link: "#/study-abroad/australia", code: "AU" },
    { name: "Germany", link: "#/study-abroad/germany", code: "DE" }
  ],
  "MBBS ABROAD": [
    { name: "Russia", link: "#/mbbs-abroad/russia", code: "RU" },
    { name: "Georgia", link: "#/mbbs-abroad/georgia", code: "GE" },
    { name: "Kazakhstan", link: "#/mbbs-abroad/kazakhstan", code: "KZ" },
    { name: "Philippines", link: "#/mbbs-abroad/philippines", code: "PH" },
    { name: "Bangladesh", link: "#/mbbs-abroad/bangladesh", code: "BD" }
  ],
  "STUDY IN INDIA": [
    { name: "MBBS", link: "#/study-india/mbbs", icon: "fa-solid fa-user-doctor" },
    { name: "Engineering", link: "#/study-india/engineering", icon: "fa-solid fa-gears" },
    { name: "Management", link: "#/study-india/management", icon: "fa-solid fa-briefcase" }
  ],
  "ENTRANCE EXAMS": [
    { name: "NEET UG", link: "#/exams/neet-ug", icon: "fa-solid fa-stethoscope" },
    { name: "JEE Main", link: "#/exams/jee-main", icon: "fa-solid fa-calculator" },
    { name: "IELTS", link: "#/exams/ielts", icon: "fa-solid fa-language" }
  ]
};

export const DESTINATIONS: Destination[] = [
  {
    id: "usa",
    name: "USA",
    slug: "usa",
    image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80&w=800",
    description: "Home to Ivy League universities and diverse culture.",
    popularCourses: ["Engineering", "Business"]
  },
  {
    id: "uk",
    name: "UK",
    slug: "uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    description: "World-class education with a rich history.",
    popularCourses: ["Law", "Medicine"]
  },
  {
    id: "canada",
    name: "Canada",
    slug: "canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800",
    description: "Welcoming environment and post-study work rights.",
    popularCourses: ["IT", "Nursing"]
  },
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    description: "High quality of life and top-ranked universities.",
    popularCourses: ["Marine Biology", "Accounting"]
  }
];

export const STATS = [
  { label: "Years of Experience", value: "15+" },
  { label: "Students Counseled", value: "10,000+" },
  { label: "University Partners", value: "500+" },
  { label: "Visa Success Rate", value: "99%" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aditi Rao",
    univ: "Kazan Federal University",
    text: "iExplain made my dream of studying MBBS in Russia a reality. Their team guided me at every step.",
    avatar: "https://ui-avatars.com/api/?name=Aditi+Rao&background=random"
  },
  {
    id: "2",
    name: "Rohan Mehta",
    univ: "University of Leeds",
    text: "Professional and transparent. They helped me with my UK visa when I was losing hope.",
    avatar: "https://ui-avatars.com/api/?name=Rohan+Mehta&background=random"
  },
  {
    id: "3",
    name: "Sneha Gupta",
    univ: "Tbilisi State Medical University",
    text: "Best consultants for Georgia. They took care of everything from admission to accommodation.",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=random"
  }
];

export const INDIA_COURSES = [
  { id: "mbbs", title: "MBBS", desc: "Top Govt & Private Colleges", icon: "fa-solid fa-user-doctor" },
  { id: "engineering", title: "Engineering", desc: "B.Tech in CS, IT, ECE", icon: "fa-solid fa-microchip" },
  { id: "management", title: "Management", desc: "MBA, BBA, PGDM", icon: "fa-solid fa-chart-pie" },
  { id: "law", title: "Law", desc: "LLB, BA LLB", icon: "fa-solid fa-scale-balanced" }
];

export const ROADMAP_STEPS = [
  { step: "01", title: "Counseling", desc: "Free profile evaluation", icon: "fa-solid fa-comments" },
  { step: "02", title: "Selection", desc: "University shortlisting", icon: "fa-solid fa-building-columns" },
  { step: "03", title: "Admission", desc: "Application & Offer Letter", icon: "fa-solid fa-file-circle-check" },
  { step: "04", title: "Visa", desc: "Visa filing & Interview", icon: "fa-brands fa-cc-visa" },
  { step: "05", title: "Departure", desc: "Flight & Forex", icon: "fa-solid fa-plane-departure" }
];

export const POPULAR_COLLEGES: College[] = [
  { name: "Kazan Federal University", country: "Russia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
  { name: "Tbilisi State Medical University", country: "Georgia", category: "MBBS Abroad", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" },
  { name: "Harvard University", country: "USA", category: "Study Abroad", image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Oxford", country: "UK", category: "Study Abroad", image: "https://images.unsplash.com/photo-1592280771800-bcf9de2312b4?auto=format&fit=crop&q=80&w=600" }
];

export const COUNTRY_ICONS = [
  { name: "Russia", icon: "fa-solid fa-flag" },
  { name: "Georgia", icon: "fa-solid fa-earth-europe" },
  { name: "USA", icon: "fa-solid fa-flag-usa" },
  { name: "UK", icon: "fa-solid fa-sterling-sign" }
];

export const KNOW_YOUR_DESTINATIONS = [
  { name: "Russia", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=600" },
  { name: "Georgia", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600" },
  { name: "Kazakhstan", image: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=600" }
];