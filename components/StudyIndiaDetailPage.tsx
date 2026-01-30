import React from 'react';
import { StudyIndiaDetailData } from '../types.ts';
import ContactForm from './ContactForm.tsx';

interface StudyIndiaDetailPageProps {
  data: StudyIndiaDetailData;
}

const StudyIndiaDetailPage: React.FC<StudyIndiaDetailPageProps> = ({ data }) => {
  if (!data) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900 animate-fade-in">
      <div className="w-24 h-24 bg-brand-light dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <i className="fa-solid fa-graduation-cap text-4xl text-brand-gold"></i>
      </div>
      <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4">Content Updating</h2>
      <p className="text-gray-500 font-medium max-w-md">We are curating the details for this program.</p>
      <button onClick={() => window.location.hash = '#/contact'} className="mt-8 px-8 py-4 bg-brand-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-gold transition-all">Contact Us</button>
    </div>
  );

  return (
    <div className="bg-white dark:bg-slate-900 font-sans pb-0 animate-fade-in">
      {/* 1. Cinematic Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.heroImage} 
            className="w-full h-full object-cover transform scale-105 animate-[kenburns_20s_infinite_alternate]" 
            alt={data.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent dark:from-slate-900/90 dark:via-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 text-left">
             <span className="inline-block px-4 py-2 rounded-lg bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-[11px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                Admission Open 2025
             </span>
             <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-xl">
               {data.title.split(':')[0]}
             </h1>
             <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed border-l-4 border-brand-gold pl-6">
               Experience world-class education with a rich cultural heritage.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-16 pb-20">
        
        {/* 2. Overview & Why (2x2 Grid Structure as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Left: Intro */}
           <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700 h-full">
              <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 flex items-center">
                 <span className="bg-blue-50 dark:bg-slate-700 p-3 rounded-xl mr-4 text-brand-blue dark:text-brand-gold"><i className="fa-solid fa-book-open"></i></span>
                 Program Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-medium leading-loose text-justify">
                 <p>{data.intro}</p>
              </div>
           </div>
           
           {/* Right: Why India */}
           <div className="bg-brand-blue text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
              <h3 className="text-2xl font-black mb-8 relative z-10 flex items-center">
                 <i className="fa-solid fa-star text-brand-gold mr-3"></i> {data.why.title}
              </h3>
              <ul className="space-y-4 relative z-10 flex-grow">
                 {data.why.points.slice(0, 6).map((point, idx) => (
                   <li key={idx} className="flex items-start">
                      <i className="fa-solid fa-circle-check text-brand-gold mt-1.5 mr-3 text-sm shrink-0"></i>
                      <p className="text-sm font-medium leading-relaxed opacity-90">{point}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* 3. The Specific 3-Card Row (Grid) from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
           {/* Card 1: International Applicants (White) */}
           <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all">
              <h3 className="text-lg font-black text-brand-blue dark:text-white mb-6 flex items-start">
                 <i className="fa-solid fa-globe text-brand-gold mt-1 mr-3"></i> 
                 <span>{data.international.title}</span>
              </h3>
              <ul className="space-y-4 relative">
                 <div className="absolute top-2 bottom-2 left-[5px] w-0.5 bg-gray-100 dark:bg-slate-700"></div>
                 {data.international.points.map((pt, i) => (
                    <li key={i} className="pl-6 relative">
                       <span className="absolute left-0 top-1.5 w-3 h-0.5 bg-gray-300 dark:bg-slate-500"></span>
                       <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{pt}</p>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Card 2: Imperative Dates (Dark Blue from Screenshot) */}
           <div className="bg-[#02385A] text-white p-8 rounded-[2rem] shadow-lg flex flex-col">
              <h3 className="text-2xl font-black mb-8 flex items-start">
                 <i className="fa-regular fa-calendar text-brand-gold mt-1 mr-3"></i>
                 <span>{data.dates.title}</span>
              </h3>
              <div className="space-y-4 flex-grow">
                 {data.dates.points.map((pt, i) => (
                   <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-colors">
                      <p className="text-sm font-bold leading-relaxed">{pt}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Card 3: Why Pick Govt (White) */}
           <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all">
              <div className="mb-6">
                 <p className="text-sm font-bold text-gray-500 uppercase">Why Pick Govt.</p>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white flex items-center mt-1">
                    <i className="fa-solid fa-landmark text-brand-gold mr-3"></i> {data.govt.title.replace('Why Pick Govt. ', '')}
                 </h3>
              </div>
              <ul className="space-y-4">
                 {data.govt.points.map((pt, i) => (
                   <li key={i} className="flex items-start">
                      <i className="fa-solid fa-caret-right text-brand-gold mt-1 mr-3"></i>
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* 4. Essentials Grid (Eligibility, Documents, Duration) - Maintaining Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm">
                 <div className="w-12 h-12 bg-green-50 dark:bg-slate-700 text-green-600 rounded-xl flex items-center justify-center text-xl mb-6">
                    <i className="fa-solid fa-list-check"></i>
                 </div>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white mb-4">{data.eligibility.title}</h3>
                 <ul className="space-y-3">
                    {data.eligibility.points.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start">
                         <i className="fa-solid fa-check text-green-500 mt-1 mr-2 text-xs"></i>
                         <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{point}</span>
                      </li>
                    ))}
                 </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm">
                 <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6">
                    <i className="fa-solid fa-folder-open"></i>
                 </div>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white mb-2">{data.documents.title}</h3>
                 <p className="text-xs text-gray-400 font-bold mb-4 uppercase">{data.documents.subtitle}</p>
                 <div className="flex flex-wrap gap-2">
                    {data.documents.points.map((point, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-600 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300">
                         {point.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                 </div>
            </div>

             <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-700 shadow-sm">
                 <div className="w-12 h-12 bg-purple-50 dark:bg-slate-700 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-6">
                    <i className="fa-regular fa-clock"></i>
                 </div>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white mb-4">{data.duration.title}</h3>
                 <ul className="space-y-3">
                    {data.duration.cards.map((text, idx) => (
                      <li key={idx} className="text-sm font-bold text-gray-600 dark:text-gray-400 border-l-2 border-purple-300 pl-3">
                         {text}
                      </li>
                    ))}
                 </ul>
              </div>
        </div>

      </div>

      {/* 5. Dedicated Dark Contact Section (Matching Screenshot 2) */}
      <div className="w-full bg-[#02385A] py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-[#02385A] rounded-[2rem] p-4 md:p-8">
                 {/* 
                     Using theme="dark" here to ensure white text titles and white inputs
                     so it matches the screenshot look on the dark background.
                 */}
                 <ContactForm theme="dark" />
             </div>
         </div>
      </div>

    </div>
  );
};

export default StudyIndiaDetailPage;