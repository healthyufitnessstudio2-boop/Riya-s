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
      <div className="flex items-center justify-around gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-center transition-all duration-200 rounded-xl ${
                  isActive
                    ? 'bg-[#0866E9] text-white font-bold px-3 py-1.5 shadow-md shadow-[#0866E9]/40 gap-1.5 shrink-0'
                    : 'text-slate-400 hover:text-white p-2 hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={isActive ? "w-4 h-4 shrink-0" : "w-5 h-5 shrink-0"} />
                  {isActive && (
                    <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileActionBar;
