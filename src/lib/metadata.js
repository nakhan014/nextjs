// Utility function to generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords,
  path = '',
  image = '/og-image.jpg'
}) {
  const baseUrl = 'https://myco.com';
  const fullTitle = `${title} | MyCo`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    canonical: url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "MyCo",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: "Professional Web Development & Digital Marketing Services",
    description: "Expert web development, mobile app development, e-commerce solutions, and digital marketing services. Transform your business with MyCo's innovative digital solutions.",
    keywords: "web development, mobile app development, e-commerce, digital marketing, SEO, web design, online marketing, professional websites",
    path: "",
  },
  services: {
    title: "Our Services - Web Development & Digital Marketing",
    description: "Comprehensive web development, mobile app development, e-commerce solutions, and digital marketing services. Professional services to grow your business online.",
    keywords: "web development services, mobile app development, e-commerce development, digital marketing, SEO services, web design, custom software",
    path: "/services",
  },
  about: {
    title: "About Us - Professional Web Development Team",
    description: "Learn about MyCo's experienced team of web developers, designers, and digital marketing experts. We transform ideas into impactful digital solutions.",
    keywords: "about us, web development team, digital marketing experts, professional web designers, MyCo company, experienced developers",
    path: "/about",
  },
  contact: {
    title: "Contact Us - Get Your Project Started",
    description: "Contact MyCo for a free consultation on your web development or digital marketing project. Let's discuss how we can help grow your business.",
    keywords: "contact us, web development consultation, digital marketing quote, project discussion, business growth",
    path: "/contact",
  },
  testimonials: {
    title: "Client Testimonials - Success Stories",
    description: "Read what our satisfied clients say about our web development and digital marketing services. Discover success stories and project results.",
    keywords: "client testimonials, success stories, web development reviews, digital marketing results, customer feedback",
    path: "/testimonials",
  },
  login: {
    title: "Admin Login - MyCo Dashboard",
    description: "Secure admin login portal for MyCo dashboard. Access your admin panel to manage content, products, and website settings.",
    keywords: "admin login, dashboard access, secure portal, content management",
    path: "/login",
  },
};
