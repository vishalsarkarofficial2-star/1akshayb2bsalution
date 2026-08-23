import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogsData';
import { BlogPost } from '../types';
import { BookOpen, User, Calendar, Clock, ArrowRight, Sparkles, Search, Tag } from 'lucide-react';

interface BlogSectionProps {
  onReadArticle: (article: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [blogSearch, setBlogSearch] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const categories = ['All', 'GST & TAX', 'Business Startup', 'Trademark & IP', 'Initial Registration', 'ISO & Quality', 'Import Export', 'Registration & License'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.summary.toLowerCase().includes(blogSearch.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(blogSearch.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="latest-tips-and-trends" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Legal Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
              Latest Tips, Guides &amp; Regulatory Trends
            </h2>
            <p className="text-sm text-slate-600">
              Discover expert advice, style inspiration, and product updates on our blog.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              id="blog-search-input"
              type="text"
              placeholder="Search legal guides & tips..."
              value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0B3D91]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`blog-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B3D91] text-white border-[#0B3D91] shadow-xs font-bold'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-white border border-slate-200 hover:border-[#0B3D91] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group shadow-2xs"
            >
              {/* Image & Badge */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-amber-300 border border-amber-400/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#0B3D91]" />
                      <span className="truncate max-w-[110px]">{post.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">{post.publishDate}</span>

                  <button
                    id={`blog-read-${post.id}`}
                    onClick={() => onReadArticle(post)}
                    className="text-xs font-bold text-[#0B3D91] hover:text-blue-900 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform text-[#F5A623]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All / Pagination Button */}
        {filteredPosts.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              id="blog-view-all-btn"
              onClick={() => setVisibleCount(BLOG_POSTS.length)}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0B3D91] font-bold text-xs uppercase tracking-wider border border-slate-300 hover:border-slate-400 transition-all shadow-xs cursor-pointer"
            >
              View All {BLOG_POSTS.length} Compliance Guides
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
