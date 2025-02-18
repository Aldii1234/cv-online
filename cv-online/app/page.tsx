import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Briefcase, Code, User, Star, Send, Menu } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="bg-white text-blue-600 p-4 shadow-lg flex justify-between items-center">
        <div className="text-xl font-bold">My CV</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#portfolio" className="hover:text-purple-600">Portfolio</a>
          <a href="#services" className="hover:text-purple-600">Layanan</a>
          <a href="#contact" className="hover:text-purple-600">Kontak</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-blue-600 py-4 px-6 flex flex-col space-y-4 shadow-lg">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#portfolio" className="hover:text-purple-600">Portfolio</a>
          <a href="#services" className="hover:text-purple-600">Layanan</a>
          <a href="#contact" className="hover:text-purple-600">Kontak</a>
        </div>
      )}

      <div className="container mx-auto max-w-4xl p-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="flex justify-center">
            <Image 
              src="/aldi.jpg" 
              alt="Aldi Denaldi"
              width={160} 
              height={160} 
              className="rounded-full shadow-lg border-4 border-white"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mt-4">Aldi Denaldi</h1>
          <p className="text-white/80 text-lg">Prodi Sistem Informasi</p>
        </section>

        {/* About Section */}
        <section id="about" className="p-6 bg-white shadow-lg rounded-lg text-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <User size={24} /> About Me
          </h2>
          <p className="mt-2">
            Saya adalah pengembang web dengan pengalaman dalam Next.js dan Tailwind CSS.
            Saya menyukai desain modern dan UX yang menarik.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="p-6 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code size={24} /> Skills
          </h2>
          <ul className="mt-2 list-disc pl-5">
            <li>JavaScript / TypeScript</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js & Express</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className="p-6 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase size={24} /> Services
          </h2>
          <p className="mt-2">Saya menawarkan layanan pembuatan website modern dan responsif.</p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="p-6 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Star size={24} /> Portfolio
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-300 h-40 flex items-center justify-center rounded-lg shadow-md">
              <p>Project 1</p>
            </div>
            <div className="bg-gray-300 h-40 flex items-center justify-center rounded-lg shadow-md">
              <p>Project 2</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-6 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Send size={24} /> Contact
          </h2>
          <p className="mt-2 flex items-center gap-2">
            <Mail size={20} /> denaldialdi4@email.com
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Phone size={20} /> +62 831-0964-3743
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-white/80 text-sm py-4 mt-6">
        © {new Date().getFullYear()} Aldi Denaldi. All rights reserved.
      </footer>
    </div>
  );
}
