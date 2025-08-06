import React, { useState } from 'react';
import {
  Menu,
  X,
  Heart,
  Users,
  BookOpen,
  Target,
  MapPin,
  Mail,
  GraduationCap,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans text-lg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl xl:max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
          <div className="flex items-center">
            <GraduationCap className="h-9 w-9 text-orange-600 mr-3" />
            <span className="font-bold text-3xl sm:text-4xl tracking-tight">Basti Ki Pathshala</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-orange-600 px-2 py-1 text-xl font-semibold transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-orange-600 px-2 py-1 text-xl font-semibold transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('volunteer')} className="bg-orange-600 text-white px-6 py-2 rounded-lg text-xl font-semibold hover:bg-orange-700 transition-colors">
              Volunteer
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-orange-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-orange-600 text-xl font-semibold text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-orange-600 text-xl font-semibold text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('volunteer')} className="bg-orange-600 text-white px-4 py-2 rounded-lg text-xl font-semibold hover:bg-orange-700 transition-colors text-left">
                Volunteer
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Home Page Section */}
      <section id="home" className="pt-28 bg-gradient-to-br from-orange-50 to-blue-50 w-full">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Breaking Barriers Through
              <span className="text-orange-600"> Education</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Basti Ki Pathshala Foundation is a Government-registered organization dedicated to 
              providing quality education to children in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('volunteer')}
                className="bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-orange-700 transition-colors"
              >
                Join Our Mission
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-lg font-semibold text-xl hover:bg-orange-600 hover:text-white transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-16 relative">
            <img 
              src="/orphanage.jpg" 
              alt="Children learning in community classroom" 
              className="rounded-2xl shadow-2xl w-full h-80 sm:h-[28rem] md:h-[32rem] object-cover"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-8 rounded-2xl shadow-lg w-80 flex items-center justify-center">
              <Heart className="h-10 w-10 text-red-500 mr-4" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-lg text-gray-600">Children Impacted</div>
              </div>
            </div>
          </div>
        </div>
        {/* Impact Stats */}
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-lg text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-lg text-gray-600">Learning Centers</div>
            </div>
            <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-lg text-gray-600">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section id="about" className="py-24 bg-white w-full">
  <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
        About Basti Ki Pathshala
      </h2>
      <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto">
        A Government-registered grassroots organization transforming lives through education.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-5">Our Story</h3>
        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
          Basti Ki Pathshala Foundation is a Government-registered organization, established under the 
          Indian Societies Act of 1860. We are a grassroots organization dedicated to breaking the 
          barriers of education in underserved communities.
        </p>
        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
          Founded with a mission to provide quality education to children living in slum areas, we 
          strive to create a nurturing learning environment where every child has the opportunity to thrive. 
          Through innovative teaching methods, community engagement, and partnerships, we empower children 
          with the knowledge and skills they need to build a brighter future.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
          <h4 className="font-bold text-xl text-gray-900 mb-2">"We Work Together"</h4>
          <p className="text-lg text-gray-700">
            Our commitment extends beyond the classroom as we work towards bridging the educational 
            gap and fostering long-term sustainable change in the lives of marginalized families.
          </p>
        </div>
      </div>
      <div>
        <img 
          src="/about.jpg" 
          alt="Community volunteers teaching children" 
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-gray-50 p-10 rounded-2xl">
        <Target className="h-12 w-12 text-orange-600 mb-5" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          To provide quality education to children living in slum areas and create a nurturing 
          learning environment where every child has the opportunity to thrive academically, 
          socially, and mentally.
        </p>
      </div>
      <div className="bg-gray-50 p-10 rounded-2xl">
        <Users className="h-12 w-12 text-green-600 mb-5" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe education is the pathway out of poverty and a tool for empowerment. 
          Through community-driven change, we envision a world where every child has access 
          to quality education.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Volunteer Form Section */}
<section id="volunteer" className="py-24 bg-gray-50 w-full">
  <div className="max-w-[90rem] mx-auto px-6 sm:px-8">
    <div className="text-center mb-14">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
        Join as a Volunteer
      </h2>
      <p className="text-xl sm:text-2xl text-gray-700">
        Be part of the change. Help us transform lives through education.
      </p>
    </div>
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-14 w-full">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-lg font-semibold text-gray-700 mb-2">
              Volunteer Role *
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
            >
              <option value="">Select a role</option>
              <option value="teaching">Teaching & Education</option>
              <option value="web-development">Web Development</option>
              <option value="strategy-research">Strategy & Research</option>
              <option value="technical-leadership">Technical Leadership</option>
              <option value="community-outreach">Community Outreach</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
            Why do you want to volunteer with us?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-lg"
            placeholder="Tell us about your motivation and how you'd like to contribute..."
          ></textarea>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-bold text-xl text-gray-900 mb-2">What You'll Get:</h4>
          <ul className="text-lg text-gray-700 space-y-1">
            <li>• Certificate of completion after commitment period</li>
            <li>• Recommendation letter for outstanding volunteers</li>
            <li>• Flexible working hours and remote opportunities</li>
            <li>• Transformative experience making real impact</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-600 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-orange-700 transition-colors shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


      {/* Footer */}
<footer className="bg-gray-900 text-white py-14 w-full">
  <div className="max-w-6xl xl:max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">

      {/* Left Section */}
      <div className="text-left w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <GraduationCap className="h-8 w-8 text-orange-500 mr-2" />
          <span className="font-bold text-2xl sm:text-3xl">Basti Ki Pathshala</span>
        </div>
        <p className="text-base text-gray-400 mb-4 leading-relaxed">
          A Government-registered grassroots organization breaking barriers through education. 
          Transforming communities one child at a time.
        </p>
      </div>

      {/* Center - Quick Links */}
      <div className="w-full md:w-1/3 text-center">
        <h3 className="font-bold text-xl mb-5">Quick Links</h3>
        <ul className="space-y-3 text-lg text-gray-400">
          <li>
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('volunteer')} className="hover:text-white transition-colors">
              Volunteer
            </button>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="text-right w-full md:w-1/3">
        <h3 className="font-bold text-xl mb-5">Contact & Follow</h3>
        <div className="space-y-4 text-lg text-gray-400">
          <div className="flex justify-end items-center">
            <MapPin className="h-6 w-6 mr-2" />
            <span>New Delhi, India</span>
          </div>
          <div className="flex justify-end items-center">
            <Mail className="h-6 w-6 mr-2" />
            <span>info@bastikipathshala.org</span>
          </div>
          <div className="pt-2 flex justify-end space-x-4">
            <a 
              href="https://www.bastikipathshala.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/bastikipathshala.ngo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/bastikipathshala"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-lg text-gray-400">
      <p>&copy; 2025 Basti Ki Pathshala Foundation. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;