import { Mail, Phone, Briefcase, Code, User, Star, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="bg-white text-blue-600 p-4 text-center text-xl font-bold shadow-lg">
        My Online CV
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16">
      <img
  src="/aldi.jpg" 
  alt="Profile"
  className="w-40 h-40 mx-auto rounded-full shadow-lg border-4 border-white"
/>

        <h1 className="text-3xl font-bold mt-4">John Doe</h1>
        <p className="text-white/80 text-lg">Full Stack Developer</p>
      </section>

      {/* About Section */}
      <section className="p-8 bg-white shadow-lg rounded-lg mx-4 text-gray-800">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <User size={24} /> About Me
        </h2>
        <p className="mt-2">
          Saya adalah pengembang web dengan pengalaman dalam Next.js dan Tailwind CSS.
          Saya menyukai desain modern dan UX yang menarik.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-8 mx-4 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
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
      <section className="p-8 bg-white shadow-lg rounded-lg mx-4 mt-4 text-gray-800">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase size={24} /> Services
        </h2>
        <p className="mt-2">Saya menawarkan layanan pembuatan website modern dan responsif.</p>
      </section>

      {/* Portfolio Section */}
      <section className="p-8 mx-4 mt-4 bg-white shadow-lg rounded-lg text-gray-800">
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
      <section className="p-8 bg-white shadow-lg rounded-lg mx-4 mt-4 text-gray-800">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Send size={24} /> Contact
        </h2>
        <p className="mt-2 flex items-center gap-2">
          <Mail size={20} /> johndoe@email.com
        </p>
        <p className="mt-2 flex items-center gap-2">
          <Phone size={20} /> +62 812-3456-7890
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/80 text-sm py-4">
        © 2024 John Doe. All rights reserved.
      </footer>
    </div>
  );
}
