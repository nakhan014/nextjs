'use client';

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PageMetadata from '@/components/PageMetadata';
import ClientDynamicPagesMenu from '@/components/ClientDynamicPagesMenu';

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Web Design', description: 'Professional web design services to create stunning, responsive websites that engage your audience and drive conversions.' },
    { id: 2, name: 'E-commerce Solutions', description: 'Complete e-commerce development with secure payment processing, inventory management, and user-friendly shopping experiences.' },
    { id: 3, name: 'Mobile Apps', description: 'Native and cross-platform mobile app development for iOS and Android with intuitive user interfaces.' },
    { id: 4, name: 'Online Marketing', description: 'Digital marketing strategies including SEO, social media marketing, and PPC campaigns to grow your business online.' }
  ]);

  return (
    <>
      <PageMetadata 
        title="Professional Web Development & Digital Marketing Services"
        description="Expert web development, mobile app development, e-commerce solutions, and digital marketing services. Transform your business with MyCo's innovative digital solutions."
        keywords="web development, mobile app development, e-commerce, digital marketing, SEO, web design, online marketing, professional websites"
        path=""
      />
      <ClientDynamicPagesMenu />
      <div className="bg-gray-50 text-gray-800 pt-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Professional Web Development & Digital Marketing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MyCo specializes in creating exceptional digital experiences through innovative web design, 
              mobile app development, and strategic online marketing solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </Link>
              <Link href="/services" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Our Services
              </Link>
            </div>
          </header>
        
        {/* Services Section with SEO-optimized content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Digital Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {products.map(product => (
                <article key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link href="/services" className="text-orange-500 hover:text-orange-600 font-medium">
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section with structured data */}
        <section className="py-16 bg-white rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Client Testimonials</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover what our satisfied clients say about our web development and digital marketing services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <article className="bg-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  &quot;MyCo delivered an exceptional website that perfectly captures our brand. Their attention to detail and communication were outstanding!&quot;
                </blockquote>
                <div className="flex items-center">
                  <Image src="https://placehold.co/60x60/FFFBEB/f46d22?text=JD" alt="Jane Doe - CEO of Innovate Corp" className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-200" width={60} height={60} />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">Jane Doe</cite>
                    <p className="text-gray-600 text-sm">CEO, Innovate Corp</p>
                  </div>
                </div>
              </article>
              
              {/* Testimonial Card 2 */}
              <article className="bg-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  &quot;The mobile app developed by MyCo has transformed our customer engagement. It&apos;s intuitive, fast, and exactly what we needed.&quot;
                </blockquote>
                <div className="flex items-center">
                  <Image src="https://placehold.co/60x60/FFFBEB/f46d22?text=MS" alt="Mark Smith - Founder of Tech Solutions" className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-200" width={60} height={60} />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">Mark Smith</cite>
                    <p className="text-gray-600 text-sm">Founder, Tech Solutions</p>
                  </div>
                </div>
              </article>
              
              {/* Testimonial Card 3 */}
              <article className="bg-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  &quot;Their online marketing strategies significantly boosted our online presence and sales. Highly recommend their expertise!&quot;
                </blockquote>
                <div className="flex items-center">
                  <Image src="https://placehold.co/60x60/FFFBEB/f46d22?text=AL" alt="Anna Lee - Marketing Director of Global Goods" className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-200" width={60} height={60} />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">Anna Lee</cite>
                    <p className="text-gray-600 text-sm">Marketing Director, Global Goods</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can help grow your business online.
            </p>
            <Link href="/contact" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
