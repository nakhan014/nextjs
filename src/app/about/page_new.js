import { generatePageMetadata, pageMetadata } from '@/lib/metadata';
import Image from 'next/image';

// Generate metadata for this page
export async function generateMetadata() {
  return generatePageMetadata(pageMetadata.about);
}

export default function About() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About MyCo - Your Digital Success Partner
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a team of passionate digital experts dedicated to transforming businesses 
            through innovative web development, mobile applications, and strategic digital marketing.
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x400/FFFBEB/f46d22?text=Our+Team" alt="MyCo team of web developers and digital marketing experts" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story & Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between businesses and their digital potential, 
              MyCo has grown into a trusted partner for companies seeking to establish a strong online presence. 
              Our team combines technical expertise with creative innovation to deliver solutions that drive real results.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We specialize in creating custom web applications, mobile apps, e-commerce platforms, 
              and comprehensive digital marketing strategies that help businesses grow, engage customers, 
              and achieve their goals in the digital marketplace.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence, transparent communication, and long-term partnerships 
              has made us the preferred choice for businesses looking to transform their digital presence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose MyCo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl text-orange-500 mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and creative solutions to deliver exceptional results.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-orange-500 mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Partnership</h3>
              <p className="text-gray-600">We build lasting relationships with our clients based on trust, transparency, and mutual success.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-orange-500 mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every project, ensuring quality and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
