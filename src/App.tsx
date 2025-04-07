import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  Globe,
  Shield,
  Monitor,
  Megaphone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/*   {/* Navigation */}
      <nav
        className={`relative w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-white/90 backdrop-blur-lg border-b border-white/10'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="/logo.png"
            alt="Digital Solutions"
            className="h-20 w-auto"
          />
          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-lg text-green-500 hover:text-[#36C1D3] transition-colors"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-lg text-green-500 hover:text-[#36C1D3] transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-lg text-green-500 hover:text-[#36C1D3] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://wa.me/27639034514"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#36C1D3] text-white px-4 py-2 rounded-full text-xl hover:bg-[#84C44C] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
      <div className="h-2 bg-green-500/50 blur-lg animate-[pulseGreenShadow_2s_ease-in-out_infinite]"></div>
      <style jsx>{`
  @keyframes pulseGreenShadow {
    0% {
      box-shadow: 0 0 10px rgba(52, 199, 89, 0.5);
    }
    50% {
      box-shadow: 0 0 10px rgba(54, 193, 211, 0.5);
    }
    100% {
      box-shadow: 0 0 10px rgba(52, 199, 89, 0.5);
    }
  }
`}</style>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We build digital solutions that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36C1D3] to-[#84C44C]">
                Innovate. Elevate. Dominate.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Our amazing, next-level website is coming soon but for now here
              are our services web development, marketing, cybersecurity, and IT
              support. You focus on growth with higher efficiency and security.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/27639034514"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#36C1D3] to-[#84C44C] px-8 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <a
                href="https://form.jotform.com/250964030453048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Globe className="h-8 w-8 text-[#36C1D3]" />}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies."
            />
            <ServiceCard
              icon={<Megaphone className="h-8 w-8 text-[#36C1D3]" />}
              title="Marketing"
              description="Digital marketing strategies to grow your online presence."
            />
            <ServiceCard
              icon={<Shield className="h-8 w-8 text-[#36C1D3]" />}
              title="Cybersecurity"
              description="Protect your business with advanced security solutions."
            />
            <ServiceCard
              icon={<Monitor className="h-8 w-8 text-[#36C1D3]" />}
              title="IT Support"
              description="24/7 technical support and IT infrastructure management."
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            4 Reasons Why You Should Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36C1D3] to-[#84C44C]">
              {' '}
              Digital Solutions
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ReasonCard
              title="We believe in full-service solutions"
              description="From development to maintenance, we handle everything so you can focus on your business growth."
            />
            <ReasonCard
              title="We focus on measurable results"
              description="Our strategies are data-driven, ensuring you get the best return on your investment."
            />
            <ReasonCard
              title="We provide 24/7 support"
              description="Our team is always available to help you with any technical issues or questions."
            />
            <ReasonCard
              title="We use cutting-edge technology"
              description="Stay ahead of the competition with our modern tech stack and innovative solutions."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-[#36C1D3]" />
                    <a href="tel:+27639034514" className="hover:text-[#36C1D3]">
                      +27 639 034 514
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#36C1D3]" />
                    <a
                      href="mailto:sales@digitalsolutionssa.com"
                      className="hover:text-[#36C1D3]"
                    >
                      sales@digitalsolutionssa.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#36C1D3]" />
                    Three Rivers, Vereeniging
                  </p>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#36C1D3] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#36C1D3] transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#36C1D3] transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#36C1D3] to-[#84C44C] py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/27639034514"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <MessageCircle size={24} />
      </a>

      {/* Footer */}
      <footer className="py-12  border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="/whatsapp.jpg"
                alt="Digital Solutions"
                className="h-20 w-auto"
              />
              <p className="mt-2 text-gray-400">Innovate. Elevate. Dominate.</p>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>© 2025 Digital Solutions SA. All rights reserved.</p>
              <p>Three Rivers, Vereeniging</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ReasonCard({ title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-4">
        <CheckCircle className="h-6 w-6 text-[#36C1D3] flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
