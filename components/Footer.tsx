export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Remy. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/RemyBate" target="_blank" className="hover:text-indigo-600">GitHub</a>
          <a href="#" className="hover:text-indigo-600">LinkedIn</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
