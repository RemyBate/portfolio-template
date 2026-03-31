import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          Remy<span className="text-violet-600">Dev</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-violet-600 font-medium"
          >
            Landing Page
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-violet-600 font-medium"
          >
            About Me
          </Link>

          <Link
            href="/projects"
            className="text-gray-700 hover:text-violet-600 font-medium"
          >
            Projects
          </Link>

          <Link
            href="/resume"
            className="text-gray-700 hover:text-violet-600 font-medium"
          >
            Resume
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-violet-600 font-medium"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
