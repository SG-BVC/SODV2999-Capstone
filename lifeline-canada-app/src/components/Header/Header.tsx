// components/Header/index.tsx
import { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import Logo from './Logo';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="absolute sm:sticky top-0 z-50 w-full">
      {/* Modern gradient with mesh effect */}
      <div className="absolute inset-0 ">
        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-60"
          // style={{
          //   backgroundImage: `radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%), 
          //             radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 50%)`,
          // }}

          style={{
            backgroundImage: `radial-gradient( #cfc0da 100%, transparent 100%)`,
          }}
        ></div>
      </div>

      {/* Clean glassmorphism */}
      <div className="relative bg-white/8 backdrop-blur-xl border-b border-white/20">
        <div className="flex h-26 w-full items-center justify-between px-6">
          <Logo />
          <nav className="flex items-center">
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
          </nav>
        </div>
      </div>
    </header>
  );
}
