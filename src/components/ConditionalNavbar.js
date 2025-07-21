'use client';

import { usePathname } from 'next/navigation';
import FrontendNavbar from './FrontendNavbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Don't show navbar on login page
  if (pathname === '/login') {
    return null;
  }
  
  return <FrontendNavbar />;
}
