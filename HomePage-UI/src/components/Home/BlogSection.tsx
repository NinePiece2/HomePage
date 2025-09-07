"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

const BlogSection: React.FC = () => (
  <section id="blog" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">From the Blog</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 mx-auto mb-8 rounded-full"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-neutral-950/50 rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:border-emerald-500 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
              <a href={post.link} className="flex items-center gap-1 text-sm font-medium text-emerald-500 hover:underline transition-colors">
                Read more <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;