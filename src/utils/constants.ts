import { Course, Testimonial } from '@/types';

export const APP_NAME = 'Placement Lab';
export const APP_DESCRIPTION = 'Your career guidance and job-oriented learning platform';
export const LOGO_URL =
  'https://github.com/user-attachments/assets/b89da58b-4c8d-4d1f-a8af-cad81aa17f6c';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Essential Pack',
    slug: 'essential-pack',
    description: 'Perfect for beginners. Get started with fundamental skills.',
    originalPrice: 699,
    discountedPrice: 219,
    category: 'essential',
    color: 'from-green-400 to-green-600',
    badge: '🟢',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    features: [
      'Resume Building',
      'Resume Review by Experts',
      'Mock Interviews',
      'Git and GitHub Basics',
      'Project Guidance',
      'WhatsApp Job Alerts',
      'Certificate of Completion',
    ],
    tools: ['Git', 'GitHub', 'Resume Tools', 'Interview Prep'],
    timeline: '4 weeks',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Professional Pack',
    slug: 'professional-pack',
    description: 'Advanced skills for mid-level professionals.',
    originalPrice: 999,
    discountedPrice: 699,
    category: 'professional',
    color: 'from-blue-400 to-blue-600',
    badge: '🔵',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    features: [
      'Portfolio Building',
      'Advanced Resume + ATS Optimization',
      'LinkedIn Profile Optimization',
      'Multiple Mock Interviews with Experts',
      'DSA Basics',
      'System Design Intro',
      'LeetCode Practice',
      'Tests and Assignments',
      'WhatsApp Job Alerts',
    ],
    tools: ['DSA', 'LeetCode', 'LinkedIn', 'System Design', 'JavaScript'],
    timeline: '8 weeks',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Advanced Career Pack',
    slug: 'advanced-career-pack',
    description: 'Comprehensive training for senior positions.',
    detailDescription:
      'Master Data Structures & Algorithms from the very basics to advanced interview-level concepts. Learn problem-solving techniques, optimize coding logic, and prepare for top product-based company interviews with structured learning and guided practice.',
    originalPrice: 6000,
    discountedPrice: 999,
    category: 'advanced',
    color: 'from-purple-400 to-purple-600',
    badge: '🟣',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504233?w=500&h=300&fit=crop',
    features: [
      'DSA (Data Structures & Algorithms) — From Scratch to Advanced',
      'Advanced Portfolio Building',
      'Advanced Resume + ATS Optimization',
      'LinkedIn Profile Optimization',
      'Multiple Mock Interviews with Experts',
      'LeetCode Practice & Coding Preparation',
      'Tests & Assignments',
      'WhatsApp Job Alerts',
      'System Design Fundamentals',
      'One Tech Stack (As Per Your Choice)',
      'Communication & Soft Skills Training',
      'Advanced Real-World Projects',
      'Complete Interview Training',
      'Career Counseling & Guidance',
      'Lifetime Access',
    ],
    tools: ['Advanced DSA', 'System Design', 'Full Stack', 'DevOps', 'AI/ML'],
    timeline: '12 weeks',
    tracks: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Complete Industry Training',
    slug: 'complete-industry-training',
    description:
      'Master everything required to crack top tech jobs with structured training in DSA, full stack development, interview preparation, system design, and real-world coding practices.',
    originalPrice: 36999,
    discountedPrice: 9999,
    category: 'guaranteed',
    color: 'from-red-400 to-red-600',
    badge: '🚀',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    features: [
      'Data Structures & Algorithms (DSA)',
      'Full Stack Development',
      'Interview Preparation',
      'System Design',
      'Real-World Coding Practices',
      '💻 DSA From Scratch to Advanced',
      'Problem-solving techniques',
      'LeetCode practice sessions',
      'Weekly coding challenges',
      'Company-level interview questions',
      '🛠 Advanced Development Training',
      'Preferred tech stack selection',
      'Advanced projects',
      'Industry-standard architecture',
      'Real-world workflows',
      'Portfolio-ready applications',
      '📄 Resume & ATS Optimization',
      'ATS-friendly resume that stands out',
      'Recruiter-focused highlights',
      '🔗 LinkedIn & Job Profile Optimization',
      'Recruiter-friendly LinkedIn profile',
      'Stronger online presence',
      '🎯 Weekly Mock Interviews',
      'Technical mock interviews',
      'HR interview sessions',
      'Expert feedback & improvement guidance',
      '🧠 Expert Mentorship',
      'Career growth guidance',
      'Learning roadmap',
      'Interview strategy',
      'Industry insights',
      '📚 Tests, Assignments & Practice',
      'Weekly assessments',
      'Coding assignments',
      'Practical implementation tasks',
      'Interview-focused practice',
      '📱 WhatsApp Job Alerts',
      'Job openings',
      'Internship opportunities',
      'Hiring drives',
      'Off-campus opportunities',
      '🗣 Communication & Interview Skills',
      'Communication training',
      'HR interview preparation',
      'Professional interaction skills',
      'Confidence-building sessions',
      '🏆 Career Counseling & Placement Assistance',
      'Job applications support',
      'Career planning',
      'Interview scheduling',
      'Placement opportunities',
      '💼 Pay After Placement Model',
      '⏳ Program Duration: 6-month intensive training',
      '🌟 Salary Guarantee: minimum 12 LPA focus',
      '♾ Lifetime access to recordings, resources, updates, and practice materials',
    ],
    tools: [
      'DSA',
      'Full Stack',
      'System Design',
      'Interview Prep',
      'Resume Optimization',
      'LinkedIn',
      'Mock Interviews',
      'Career Coaching',
    ],
    timeline: '6 months',
    tracks: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Menon',
    role: 'Software Engineer · 8 LPA',
    company: 'TCS',
    message:
      'Placement Lab rebuilt my resume, practiced weekly mock interviews, and helped me crack my first offer with confidence.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ananya Iyer',
    role: 'Backend Developer · 6 LPA',
    company: 'Cognizant',
    message:
      'The structured roadmap and mentorship made everything clear. I landed a 6 LPA role within 10 weeks of joining.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rohit Verma',
    role: 'Full Stack Engineer · 12 LPA',
    company: 'Amazon',
    message:
      'From DSA to system design, every module was interview-focused. I secured a 12 LPA offer in my target role.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sneha Kulkarni',
    role: 'Data Analyst · 10 LPA',
    company: 'Accenture',
    message:
      'The resume + LinkedIn upgrade and placement support were game changers. I moved into a 10 LPA role quickly.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop',
    rating: 5,
  },
];

export const PARTNER_COMPANIES = [
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'HCL Tech', logo: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'Juspay', logo: 'https://logo.clearbit.com/juspay.in' },
  { name: 'CRED', logo: 'https://logo.clearbit.com/cred.club' },
  { name: 'Voltas', logo: 'https://logo.clearbit.com/voltas.com' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com' },
  { name: 'Jio', logo: 'https://logo.clearbit.com/jio.com' },
  { name: 'PhonePe', logo: 'https://logo.clearbit.com/phonepe.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Deloitte', logo: 'https://logo.clearbit.com/deloitte.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
];

export const HERO_TEXTS = [
  'Land your first offer in months, not years.',
  'Recruiter-ready resumes built with you.',
  'Mock interviews until you feel unstoppable.',
  'Industry mentors, real projects, real results.',
  'Crack interviews with confidence and clarity.',
  'Placement support until you join your dream team.',
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/919876543210',
  instagram: 'https://instagram.com/placementlab',
  twitter: 'https://twitter.com/placementlab',
  linkedin: 'https://linkedin.com/company/placementlab',
};

export const EMAIL_TEMPLATES = {
  welcome: {
    subject: 'Welcome to Placement Lab 🚀',
    template: (courseTitle: string) => `
Hello,

Thank you for joining Placement Lab and enrolling in ${courseTitle}.

Your journey starts now. Stay consistent, stay focused, and success will follow.

We're excited to have you on board. Here's what's next:
1. Access your course dashboard
2. Complete your profile
3. Join our WhatsApp community for daily updates

If you have any questions, feel free to reach out to our support team.

Best regards,
The Placement Lab Team
    `,
  },
};
