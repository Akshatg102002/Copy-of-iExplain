import React, { useState, useRef, useMemo } from 'react';
import { POPULAR_COLLEGES, COUNTRY_ICONS } from '../constants';

const PopularColleges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'MBBS Abroad' | 'Study Abroad'>('MBBS Abroad');
  const [selectedCountry, setSelectedCountry] = useState('Russia');
  const sliderRef = useRef<HTMLDivElement>(null);

  // Extract available countries per category
  const mbbsCountries = useMemo(() => 
    [...new Set(POPULAR_COLLEGES.filter(c => c.category === 'MBBS Abroad').map(c => c.country))], 
  []);

  const studyAbroadCountries = useMemo(() => 
    [...new Set(POPULAR_COLLEGES.filter(c => c.category === 'Study Abroad').map(c => c.country))], 
  []);

  const currentCountryIcons = COUNTRY_ICONS.filter(icon => 
    activeTab === 'MBBS Abroad' 
      ? mbbsCountries.includes(icon.name) 
      : studyAbroadCountries.includes(icon.name)
  );

  const handleTabChange = (tab: 'MBBS Abroad' | 'Study Abroad') => {
    setActiveTab(tab);
    const available = tab === 'MBBS Abroad' ? mbbsCountries : studyAbroadCountries;
    if (available.length > 0) {
      setSelectedCountry(available[0]);
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  const filteredColleges = POPULAR_COLLEGES.filter(
    college => college.category === activeTab && college.country === selectedCountry
  );

  return (
    <section className="py-16 bg-white dark:bg-slate-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 uppercase tracking-tight">
            Popular <span className="text-brand-gold">Colleges</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mb-8 mx-auto rounded-full"></div>

          <div className="flex justify-center space-x-12 border-b border-gray-100 dark:border-slate-800 pb-4">
            {(['MBBS Abroad', 'Study Abroad'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-lg font-bold pb-4 relative transition-colors ${
                  activeTab === tab ? 'text-brand-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold' : 'text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Country Selector Slider */}
        <div className="relative mb-12 flex justify-center">
          {/* Only show arrows if there's enough content to scroll */}
          <button onClick={() => scrollSlider('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-brand-blue dark:text-white hover:bg-brand-gold transition-all"><i className="fa-solid fa-chevron-left"></i></button>

          <div 
            ref={sliderRef} 
            className="flex items-center space-x-8 overflow-x-auto no-scrollbar pb-6 px-14 scroll-smooth justify-center w-full"
          >
            {currentCountryIcons.map(country => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
                className={`flex flex-col items-center shrink-0 transition-all ${selectedCountry === country.name ? 'scale-110' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 ${selectedCountry === country.name ? 'bg-brand-gold text-white shadow-xl' : 'bg-gray-100 dark:bg-slate-800 text-brand-blue dark:text-white'}`}>
                  <i className={country.icon}></i>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${selectedCountry === country.name ? 'text-brand-gold' : 'text-gray-500'}`}>{country.name}</span>
              </button>
            ))}
          </div>

          <button onClick={() => scrollSlider('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-brand-blue dark:text-white hover:bg-brand-gold transition-all"><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {filteredColleges.map((college, i) => (
            <div key={i} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={college.image} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5 text-center bg-gray-50 dark:bg-slate-800/50 border-t min-h-[80px] flex items-center justify-center">
                <h3 className="text-sm font-bold text-brand-blue dark:text-white line-clamp-2">{college.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularColleges;