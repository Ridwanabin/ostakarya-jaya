export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl text-blue-900">Ostakarya Jaya</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
