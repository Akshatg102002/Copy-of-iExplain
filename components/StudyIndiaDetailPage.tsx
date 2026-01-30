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
    <div className="bg-white dark:bg-slate-900 font-sans pb-20 animate-fade-in">
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
          <div className="hidden md:block md:w-1/3">
             {/* Decorative floating card */}
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue text-xl"><i className="fa-solid fa-user-graduate"></i></div>
                   <div>
                      <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Total Seats</p>
                      <p className="text-2xl font-black text-white">1,05,000+</p>
                   </div>
                </div>
                <div className="h-px bg-white/20 my-4"></div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white text-xl"><i className="fa-solid fa-university"></i></div>
                   <div>
                      <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Medical Colleges</p>
                      <p className="text-2xl font-black text-white">600+</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-20">
        
        {/* 2. Overview & Why (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Left: Intro */}
           <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
              <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 flex items-center">
                 <span className="bg-blue-50 dark:bg-slate-700 p-3 rounded-xl mr-4 text-brand-blue dark:text-brand-gold"><i className="fa-solid fa-book-open"></i></span>
                 Program Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-medium leading-loose">
                 <p>{data.intro}</p>
              </div>
           </div>
           
           {/* Right: Why India (List) */}
           <div className="lg:col-span-5 bg-brand-blue text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
              <h3 className="text-2xl font-black mb-8 relative z-10 flex items-center">
                 <i className="fa-solid fa-star text-brand-gold mr-3"></i> {data.why.title}
              </h3>
              <ul className="space-y-4 relative z-10">
                 {data.why.points.slice(0, 5).map((point, idx) => (
                   <li key={idx} className="flex items-start">
                      <i className="fa-solid fa-circle-check text-brand-gold mt-1.5 mr-3 text-sm shrink-0"></i>
                      <p className="text-sm font-medium leading-relaxed opacity-90">{point}</p>
                   </li>
                 ))}
              </ul>
              <button onClick={() => window.location.hash = '#contact'} className="mt-8 self-start px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all relative z-10">
                 Apply Now
              </button>
           </div>
        </div>

        {/* 3. Essentials Bento Grid */}
        <div>
           <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-blue dark:text-white">Admission <span className="text-brand-gold">Essentials</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {/* Duration Card */}
              <div className="bg-gradient-to-br from-purple-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2rem] border border-purple-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                 <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl mb-6">
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

              {/* Eligibility Card */}
              <div className="bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2rem] border border-green-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-xl mb-6">
                    <i className="fa-solid fa-list-check"></i>
                 </div>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white mb-4">{data.eligibility.title}</h3>
                 <ul className="space-y-3">
                    {data.eligibility.points.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start">
                         <i className="fa-solid fa-check text-green-500 mt-1 mr-2 text-xs"></i>
                         <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{point}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Documents Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-[2rem] border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all lg:row-span-1">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl mb-6">
                    <i className="fa-solid fa-folder-open"></i>
                 </div>
                 <h3 className="text-xl font-black text-brand-blue dark:text-white mb-2">{data.documents.title}</h3>
                 <p className="text-xs text-gray-400 font-bold mb-4 uppercase">{data.documents.subtitle}</p>
                 <div className="flex flex-wrap gap-2">
                    {data.documents.points.map((point, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-600 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300">
                         {point.split(' ').slice(0, 3).join(' ')}...
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* 4. Admission Process Horizontal Stepper */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-gray-100 dark:border-slate-700">
           <div className="text-center mb-12">
             <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">Your Roadmap</span>
             <h3 className="text-3xl font-black text-brand-blue dark:text-white mt-2">{data.process.title}</h3>
           </div>
           
           <div className="relative">
              {/* Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-slate-700 -translate-y-1/2 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                 {data.process.steps.map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-4 border-brand-light dark:border-slate-600 group-hover:border-brand-gold transition-colors flex items-center justify-center text-xl font-black text-brand-blue dark:text-white shadow-lg mb-6 relative">
                         {idx + 1}
                         {/* Connector for Mobile */}
                         {idx !== data.process.steps.length - 1 && (
                           <div className="md:hidden absolute bottom-[-32px] left-1/2 w-1 h-8 bg-gray-100 dark:bg-slate-700 -translate-x-1/2"></div>
                         )}
                      </div>
                      <h4 className="text-lg font-bold text-brand-blue dark:text-white mb-2">Step {idx + 1}</h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 max-w-xs">{step}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 5. Cost vs Benefits (Side-by-Side Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Economical */}
           <div className="group relative bg-[#fffbeb] dark:bg-yellow-900/10 p-10 rounded-[2.5rem] border border-yellow-100 dark:border-yellow-900/30 overflow-hidden hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    <i className="fa-solid fa-piggy-bank"></i>
                 </div>
                 <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-6">{data.economical.title}</h3>
                 <ul className="space-y-4">
                    {data.economical.points.slice(0, 4).map((pt, i) => (
                       <li key={i} className="flex items-start text-sm font-bold text-gray-700 dark:text-gray-300">
                          <i className="fa-solid fa-check text-yellow-500 mt-1 mr-3"></i>
                          {pt}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
           
           {/* Advantages */}
           <div className="group relative bg-[#f0f9ff] dark:bg-sky-900/10 p-10 rounded-[2.5rem] border border-sky-100 dark:border-sky-900/30 overflow-hidden hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    <i className="fa-solid fa-trophy"></i>
                 </div>
                 <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-6">{data.advantages.title}</h3>
                 <ul className="space-y-4">
                    {data.advantages.points.slice(0, 4).map((pt, i) => (
                       <li key={i} className="flex items-start text-sm font-bold text-gray-700 dark:text-gray-300">
                          <i className="fa-solid fa-check text-sky-500 mt-1 mr-3"></i>
                          {pt}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        {/* 6. Info Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* International */}
           <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-lg font-black text-brand-blue dark:text-white mb-4 flex items-center">
                 <i className="fa-solid fa-globe text-brand-gold mr-2"></i> {data.international.title}
              </h3>
              <ul className="space-y-2">
                 {data.international.points.slice(0, 3).map((pt, i) => (
                    <li key={i} className="text-sm font-medium text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-gray-100 dark:border-slate-600">{pt}</li>
                 ))}
              </ul>
           </div>

           {/* Dates */}
           <div className="bg-brand-blue text-white p-8 rounded-[2rem] shadow-lg">
              <h3 className="text-lg font-black mb-4 flex items-center"><i className="fa-regular fa-calendar mr-2 text-brand-gold"></i> {data.dates.title}</h3>
              <ul className="space-y-3">
                 {data.dates.points.map((pt, i) => (
                   <li key={i} className="text-xs font-bold bg-white/10 p-2 rounded-lg">{pt}</li>
                 ))}
              </ul>
           </div>

           {/* Govt Colleges */}
           <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-lg font-black text-brand-blue dark:text-white mb-4 flex items-center"><i className="fa-solid fa-landmark mr-2 text-brand-gold"></i> {data.govt.title}</h3>
              <ul className="space-y-2">
                 {data.govt.points.map((pt, i) => (
                   <li key={i} className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center">
                      <i className="fa-solid fa-caret-right text-brand-gold mr-2"></i> {pt}
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Explore India - Masonry-ish Tags */}
        <div className="bg-gray-50 dark:bg-slate-800/50 p-10 rounded-[2.5rem]">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h3 className="text-2xl font-black text-brand-blue dark:text-white">{data.explore.title}</h3>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Did you know?</p>
           </div>
           <div className="flex flex-wrap gap-3">
              {data.explore.points.map((pt, i) => (
                 <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-100 dark:border-slate-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform cursor-default">
                    {pt}
                 </span>
              ))}
           </div>
        </div>

        {/* 7. Final CTA */}
        <div className="bg-brand-blue rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Study in India?</h2>
               <p className="text-lg text-white/80 font-medium mb-10">Get free counseling from our experts and secure your seat in the top universities.</p>
               
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                   <ContactForm />
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StudyIndiaDetailPage;