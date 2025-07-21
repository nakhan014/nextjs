import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://myco.com'),
  title: {
    default: "MyCo - Professional Web Development & Digital Marketing Services",
    template: "%s | MyCo"
  },
  description: "Expert web development, mobile app development, e-commerce solutions, and digital marketing services. Transform your business with MyCo's innovative digital solutions.",
  keywords: "web development, mobile app development, e-commerce, digital marketing, SEO, web design, online marketing, professional websites",
  author: "MyCo",
  robots: "index, follow",
  openGraph: {
    title: "MyCo - Professional Web Development & Digital Marketing Services",
    description: "Expert web development, mobile app development, e-commerce solutions, and digital marketing services. Transform your business with MyCo's innovative digital solutions.",
    url: "https://myco.com",
    siteName: "MyCo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyCo - Professional Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCo - Professional Web Development & Digital Marketing Services",
    description: "Expert web development, mobile app development, e-commerce solutions, and digital marketing services.",
    images: ["/twitter-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MyCo",
    "description": "Professional web development and digital marketing services",
    "url": "https://myco.com",
    "logo": "https://myco.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/myco",
      "https://twitter.com/myco",
      "https://linkedin.com/company/myco"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Professional website design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Complete e-commerce platform development and integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, social media marketing, and online advertising services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://myco.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <Script src="https://cdn.tailwindcss.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'Inter, sans-serif', scrollBehavior: 'smooth' }}
      >
        <ErrorBoundary>
          <ConditionalNavbar />
          {children}
          <ConditionalFooter />
        </ErrorBoundary>
      </body>
    </html>


 
    
    
  );
}
