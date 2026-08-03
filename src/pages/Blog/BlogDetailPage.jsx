import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import MetaSEO from '../../components/SEO/MetaSEO';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FinalCTABanner from '../../components/CTA/FinalCTABanner';
import { BLOG_POSTS } from '../../data/blogData';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackCallClick } from '../../services/analytics';
import { triggerQuickWhatsApp } from '../../services/whatsapp';
import './BlogDetailPage.css';

const BlogDetailPage = () => {
  const { postSlug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === postSlug) || BLOG_POSTS[0];

  return (
    <div className="blog-detail-page">
      <MetaSEO 
        title={post.title} 
        description={post.excerpt}
      />

      <Breadcrumb items={[
        { label: 'Blog', path: '/blog' },
        { label: post.title }
      ]} />

      <article className="section-padding">
        <div className="container">
          <div className="blog-article-wrapper card-base">
            <div className="article-header">
              <span className="blog-category-chip">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="article-meta">
                <span><User size={16} /> {post.author}</span>
                <span><Calendar size={16} /> {post.date}</span>
                <span><Clock size={16} /> {post.readTime}</span>
              </div>
            </div>

            <div 
              className="article-body-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Embedded In-Article CTA Box */}
            <div className="article-cta-box card-base">
              <h3>Need Professional Appliance Repair in Navi Mumbai?</h3>
              <p>Don't risk DIY errors! Call SERVIXA HOME for a ₹99 doorstep inspection by certified engineers.</p>
              <div className="article-cta-buttons">
                <a 
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="btn btn-call"
                  onClick={() => trackCallClick('BlogArticleCTA')}
                >
                  <Phone size={16} />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button 
                  onClick={() => triggerQuickWhatsApp(`Hello Servixa Home, I read your article "${post.title}" and need doorstep repair.`)}
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </div>

            <div className="article-back-link">
              <Link to="/blog" className="btn btn-outline">
                <ArrowLeft size={16} />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <FinalCTABanner />
    </div>
  );
};

export default BlogDetailPage;
