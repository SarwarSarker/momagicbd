import React from "react";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const blogPosts = [
  {
    image:
      "https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "The Future of Global Billing Solutions",
    excerpt:
      "Discover how the latest innovations in fintech are transforming international payment systems and what it means for businesses worldwide.",
    date: "May 15, 2025",
    author: "Sarah Johnson",
  },
  {
    image:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Why IVR is Essential for Modern Businesses",
    excerpt:
      "Explore how Interactive Voice Response systems are revolutionizing customer service and operational efficiency in diverse industries.",
    date: "May 8, 2025",
    author: "Michael Chen",
  },
  {
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Harnessing AI to Revolutionize Learning for Kids",
    excerpt:
      "Learn how artificial intelligence is transforming educational platforms and creating personalized learning experiences for children.",
    date: "April 29, 2025",
    author: "Priya Patel",
  },
];

const BlogPost: React.FC<BlogPostProps> = ({
  image,
  title,
  excerpt,
  date,
  author,
}) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <CiCalendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <FiUser className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          href="/"
          className="inline-block font-medium bg-[#f0f9ff] text-[#0284c7] py-2 px-4 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section id="blogs" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Blog & Insights
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Stay updated with the latest trends, insights, and news from the
            tech world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-[#0284c7] rounded-xl py-4 px-6 border-2 border-[#0284c7] hover:bg-[#f0f9ff] ">
            Read More Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
