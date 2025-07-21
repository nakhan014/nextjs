'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't show footer on login page
  if (pathname === '/login') {
    return null;
  }
  
  return <Footer />;
}
