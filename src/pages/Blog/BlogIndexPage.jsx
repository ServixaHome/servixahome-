import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BLOG_POSTS } from '../../data/blogData';
import './BlogIndexPage.css';

const BlogIndexPage = () => {
  return (
    <div className="blog-index-page">
      <MetaSEO 
        title="Appliance Care & Repair Blog | Servixa Home Navi Mumbai" 
        description="Read expert maintenance tips for Washing Machines, Air Conditioners, Refrigerators, and Microwaves from SERVIXA HOME certified repair engineers."
      />

      <Breadcrumb items={[{ label: 'Blog' }]} />

      <section className="blog-hero-banner text-center">
        <div className="container">
          <span className="hero-tag"><BookOpen size={16} /> Expert Appliance Care Guide</span>
          <h1>Appliance Maintenance & Repair Blog</h1>
          <p>Practical tips, maintenance guides, and expert advice to extend the lifespan of your home appliances.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="blog-posts-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card card-base">
                <div className="blog-category-chip">{post.category}</div>
                <h2 className="blog-post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta-row">
                  <span><User size={14} /> {post.author}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more-btn">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
};

export default BlogIndexPage;
