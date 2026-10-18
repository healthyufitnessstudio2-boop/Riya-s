import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Activity, UserCheck, Award, MapPin } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Treatments', path: '/treatments', icon: Activity },
    { label: 'Specialist', path: '/about', icon: UserCheck },
    { label: 'Stories', path: '/stories', icon: Award },
    { label: 'Contact', path: '/contact', icon: MapPin },
  ];

  // Standard 5-Item Floating Navigation on all pages
  return (
    <nav 
      aria-label="Floating mobile page navigation"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-slate-950/95 backdrop-blur-xl border border-white/15 rounded-2xl py-1.5 px-2 shadow-2xl shadow-black/60 select-none pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="grid grid-cols-5 gap-1 items-center text-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-sky-400 font-bold bg-white/10 shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 font-medium'
                }`
              }
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] leading-tight tracking-tight truncate w-full">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileActionBar;
