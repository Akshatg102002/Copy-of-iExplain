import React from 'react';

const TEAM_MEMBERS = [
  { name: "SUNIL BARANWAL", role: "DIRECTOR", image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/4.png" },
  { name: "SUSHANT GUPTA", role: "DIRECTOR", image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/5.png" },
  { name: "SAKSHI AGARWAL", role: "DIRECTOR", image: "http://www.iexplaineducation.com/wp-content/uploads/2023/06/6.png" }
];

const CORE_VALUES = [
  { title: "Integrity", desc: "We uphold the highest ethical standards, ensuring transparency, honesty, and fairness in our interactions with students, parents, and educational institutions." },
  { title: "Student-Centered Approach", desc: "Our focus is always on the individual student. We prioritize their needs, aspirations, and well-being, tailoring our guidance and support to their unique requirements." },
  { title: "Trust", desc: "Trust is the foundation of our relationships. We work diligently to build and maintain trust with students and their families by delivering on our promises and acting in their best interests." },
  { title: "Professionalism", desc: "We maintain a high level of professionalism in every aspect of our work. Our counsellors are knowledgeable, experienced, and dedicated to providing accurate and up-to-date information." },
  { title: "Collaboration", desc: "We believe in the power of collaboration. We work closely with students, parents, and educational institutions to foster partnerships that lead to successful educational journeys." },
  { title: "Long-Term Relationships", desc: "We value long-term relationships with our students and their families, supporting them throughout their educational endeavours and celebrating their achievements." }
];

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 font-sans selection:bg-brand-gold/30">
      {/* 1. Intro Section */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 uppercase leading-tight">
                Transforming Dreams <br />
                <span className="text-brand-gold">Into Reality</span>
              </h2>
              <div className="prose prose-md text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-none">
                <p>Welcome to <strong>iExplain Education</strong>! We are committed to helping students achieve their educational dreams. Our approach is student-centric, focusing on individual strengths, needs, and aspirations.</p>
                <p className="mt-3">We provide <strong>Authentic insights, Accurate information, and Comprehensive guidance</strong> to ensure students thrive across their educational journeys.</p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-video lg:aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 shadow-xl border-4 border-white dark:border-slate-800">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Cards - Matching image_f47ae1.png */}
      <section className="py-10 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-slate-700 text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <i className="fa-solid fa-eye text-brand-gold text-lg"></i>
                </div>
                <h3 className="text-xl font-black text-brand-blue dark:text-white uppercase tracking-tighter">Our Vision</h3>
              </div>
              <h4 className="text-brand-blue dark:text-white font-bold text-lg mb-6 leading-tight">Opening Doors to a World of Possibilities: Your Pathway to Success.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We aim to provide personalized guidance so every student can pursue the best educational opportunities, transform lives, and shape successful careers.</p>
            </div>

            <div className="bg-[#042f44] p-8 lg:p-10 rounded-[2.5rem] shadow-xl text-white text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fa-solid fa-bullseye text-brand-gold text-lg"></i>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Our Mission</h3>
              </div>
              <p className="text-white/90 font-bold text-sm mb-6 leading-relaxed">Empowering Minds, Transforming Futures. We provide personalized guidance, expert advice, and support tailored to each student's aspirations and goals.</p>
              <ul className="space-y-4">
                {['Personalized Guidance', 'Expert Advice', 'Transformative Support'].map((title, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <p className="text-white/80 text-[11px] leading-normal">
                      <strong className="text-white uppercase tracking-wider">{title}:</strong> {title === 'Personalized Guidance' ? 'Understanding unique aspirations, strengths, and challenges.' : title === 'Expert Advice' ? 'Staying updated with education trends to provide accurate information.' : 'Guiding students to success and fulfilling educational journeys.'}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section - Matching image_f47340.png */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-tight">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <i className="fa-solid fa-caret-right text-brand-gold text-2xl mt-1"></i>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-brand-gold mb-3">{val.title}</h4>
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Section - Centered, reduced bottom margin */}
      <section className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-gold/30 mb-4 shadow-sm">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-black text-brand-blue dark:text-white mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.2em]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;