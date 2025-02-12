export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* About Section */}
      <section className="p-10 text-center bg-white shadow-md">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg text-gray-600">Full Stack Developer</p>
      </section>

      {/* Skills Section */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc pl-5">
          <li>JavaScript (React, Next.js, Node.js)</li>
          <li>Tailwind CSS & Bootstrap</li>
          <li>REST API & Database Management</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-white shadow-md">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p>Providing high-quality web development and consulting services.</p>
      </section>

      {/* Portfolio Section */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <p>Check out my projects on <a href="https://github.com/yourgithub" className="text-blue-500">GitHub</a></p>
      </section>

      {/* Contact Section */}
      <section className="p-10 bg-white shadow-md">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: johndoe@example.com</p>
      </section>
    </div>
  );
}
