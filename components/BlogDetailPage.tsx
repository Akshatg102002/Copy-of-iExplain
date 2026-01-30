
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants.tsx';
import { db, collection, query, getDocs } from '../firebase.ts';
import ContactForm from './ContactForm.tsx';

interface BlogDetailPageProps {
  slug: string;
}

// Helper to recreate slug logic locally if needed, or import
const createSlug = (text: string) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      
      // 1. Try finding in local constants first (fastest)
      const localPost = BLOG_POSTS.find(p => createSlug(p.title) === slug);
      if (localPost) {
        setPost(localPost);
        setLoading(false);
        return;
      }

      // 2. Try fetching from Firebase
      try {
        const q = query(collection(db, 'blogs'));
        const querySnapshot = await getDocs(q);
        const firebasePost = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() as any }))
          .find(p => createSlug(p.title) === slug);

        if (firebasePost) {
          setPost(firebasePost);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!post) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900">
      <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 text-gray-400">
        <i className="fa-solid fa-file-circle-xmark text-3xl"></i>
      </div>
      <h2 className="text-2xl font-black text-brand-blue dark:text-white mb-2">Article Not Found</h2>
      <p className="text-gray-500 mb-6">The article you are looking for does not exist or has been moved.</p>
      <a href="#/blog-list" className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all">Back to Blogs</a>
    </div>
  );

  // Social Share URLs
  const currentUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;
  
  return (
    <div className="bg-white dark:bg-slate-900 pb-20 animate-fade-in font-sans">
      
      {/* Progress Bar (Optional visual flair) */}
      <div className="fixed top-0 left-0 h-1 bg-brand-gold z-[100] w-full origin-left scale-x-0 animate-[progress_1s_ease-out_forwards]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
           <a href="#/" className="hover:text-brand-blue dark:hover:text-white transition-colors">Home</a>
           <span className="mx-2">/</span>
           <a href="#/blog-list" className="hover:text-brand-blue dark:hover:text-white transition-colors">Blogs</a>
           <span className="mx-2">/</span>
           <span className="text-brand-gold">{post.category || 'Article'}</span>
        </div>

        {/* Featured Image */}
        <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 relative group">
           <img 
             src={post.img} 
             alt={post.title} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        </div>

        {/* Header Content (Below Image) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              {post.category || 'Insights'}
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-brand-blue dark:text-white mb-8 leading-tight">
             {post.title}
           </h1>
           
           <div className="flex items-center justify-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400 border-y border-gray-100 dark:border-slate-800 py-6">
              <div className="flex items-center">
                 <div className="w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mr-3 text-brand-blue dark:text-white">
                    <i className="fa-solid fa-user text-xs"></i>
                 </div>
                 <span>{post.author || 'Admin'}</span>
              </div>
              <div className="flex items-center">
                 <i className="fa-regular fa-calendar mr-2"></i>
                 <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                 <i className="fa-regular fa-clock mr-2"></i>
                 <span>{post.readTime || '5 min read'}</span>
              </div>
           </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-medium leading-loose
             prose-headings:text-brand-blue dark:prose-headings:text-white prose-headings:font-black
             prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
             prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
             prose-p:mb-6 prose-a:text-brand-gold hover:prose-a:text-brand-blue
             prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
             prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-10">
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Social Share */}
        <div className="mt-16 pt-10 border-t border-gray-100 dark:border-slate-800">
           <h3 className="text-center text-sm font-black text-brand-blue dark:text-white uppercase tracking-widest mb-6">Share this article</h3>
           <div className="flex justify-center gap-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                 <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-400/20">
                 <i className="fa-brands fa-twitter"></i>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                 <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href={`https://wa.me/?text=${shareText} ${currentUrl}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                 <i className="fa-brands fa-whatsapp"></i>
              </a>
           </div>
        </div>

        {/* Author Bio (Optional) */}
        <div className="mt-16 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-[2rem] flex items-center gap-6">
           <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-black shrink-0">
              {post.author ? post.author.charAt(0) : 'A'}
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">About The Author</p>
              <h4 className="text-lg font-bold text-brand-blue dark:text-white mb-2">{post.author || 'iExplain Editor'}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                 Expert counselor and education analyst with over 10 years of experience in guiding students for international admissions.
              </p>
           </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-brand-blue rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl font-black mb-6">Inspired by this story?</h2>
               <p className="text-lg text-white/80 font-medium mb-10">Start your own journey today. Get free counseling from our experts and secure your seat in top universities.</p>
               
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-left">
                   <ContactForm theme="dark" />
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetailPage;
