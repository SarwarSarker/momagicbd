import { FiSmartphone, FiZap } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GoServer } from 'react-icons/go';

export const appData = {
    "partnerLogos": [
      { "name": "Telco Partner 1", "logo": "/gp_logo.png" },
      { "name": "Telco Partner 2", "logo": "/gp_logo.png" },
      { "name": "Telco Partner 3", "logo": "/gp_logo.png" },
      { "name": "MFS Partner 1", "logo": "/gp_logo.png" },
      { "name": "MFS Partner 2", "logo": "/gp_logo.png" },
      { "name": "OEM Partner", "logo": "/gp_logo.png" }
    ],
    "benefitsList": [
      "Trusted by telcos, fintechs, and media companies",
      "Full-service platform: billing, content, distribution",
      "Built for Bangladesh's real devices and networks",
      "Feature phone + smartphone focus",
      "Proven revenue generation and growth tools",
      "End-to-end technical support and implementation",
      "Regulatory compliance and security",
      "Telco-grade reliability and uptime"
    ],
    "products": [
      {
        "title": "IVR Platform",
        "description": "Voice-based user engagement for contests, content, and subscriptions.",
        "link": "#",
        "color": "from-blue-500 to-indigo-600",
        "imageUrl": "https://images.pexels.com/photos/6893825/pexels-photo-6893825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "A2P SMS Gateway",
        "description": "Reliable, secure messaging for alerts, OTPs, and transactions.",
        "link": "#",
        "color": "from-green-500 to-emerald-600",
        "imageUrl": "https://images.pexels.com/photos/4047333/pexels-photo-4047333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "QuizMuiz",
        "description": "AI-powered quiz platform — fun, fast, and monetized via DCB.",
        "link": "#",
        "color": "from-purple-500 to-pink-600",
        "imageUrl": "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "mKiddo",
        "description": "A bilingual learning app for kids — games, stories, and early education.",
        "link": "#",
        "color": "from-yellow-500 to-orange-600",
        "imageUrl": "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "XoshPlay",
        "description": "Instant-access feature phone games — no install needed.",
        "link": "#",
        "color": "from-red-500 to-rose-600",
        "imageUrl": "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "Jante Chai",
        "description": "AI-generated Bangla content — news, facts, and more.",
        "link": "#",
        "color": "from-sky-500 to-cyan-600",
        "imageUrl": "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        "title": "Hullor",
        "description": "Telco-powered digital marketplace for content and micro-products.",
        "link": "#",
        "color": "from-fuchsia-500 to-violet-600",
        "imageUrl": "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    "services": [
      {
        icon: <FiZap className="h-6 w-6" />,
        title: 'Direct Carrier Billing (DCB)',
        description: 'Instant airtime payments for games, subscriptions, and digital content.',
        category: 'Payments',
        features: ['Multiple carrier integration', 'Real-time processing', 'Automated reconciliation'],
      },
      {
        icon: <FaRegHeart className="h-6 w-6" />,
        title: 'Premium SMS (PSMS)',
        description: 'Telco-integrated monetization via shortcodes and bulk services.',
        category: 'Messaging',
        features: ['Shortcode management', 'Bulk SMS capabilities', 'Campaign tracking'],
      },
      {
        icon: <FiSmartphone className="h-6 w-6" />,
        title: 'OEM App Development',
        description: 'Custom Android apps preloaded on devices — optimized for growth and monetization.',
        category: 'Development',
        features: ['Native Android apps', 'Performance optimization', 'Analytics integration'],
      },
      {
        icon: <AiOutlineBarChart className="h-6 w-6" />,
        title: 'Advertising (DSP & Telco Traffic)',
        description: 'High-performance campaigns using operator-level targeting.',
        category: 'Marketing',
        features: ['Operator targeting', 'Real-time bidding', 'Campaign optimization'],
      },
      {
        icon: <GoServer className="h-6 w-6" />,
        title: 'Billing Infrastructure',
        description: 'Full-stack platforms for telco charging, reporting, and revenue sharing.',
        category: 'Infrastructure',
        features: ['Scalable architecture', 'Multi-tenant support', 'Real-time reporting'],
      },
    ]
  }
  