export default function NavBar() {
  return (
    <nav className="flex justify-center gap-6 p-4 border-b">
      <a href="/" className="hover:underline">Home</a>
      <a href="/issues" className="hover:underline">Issues</a>
      <a href="/about" className="hover:underline">About</a>
    </nav>
  );
}
