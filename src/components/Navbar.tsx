export default function Navbar() {
  return (
    <nav className="navbar page-enter" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Christine Flores home">
        <span className="brand-mark">CF</span>
        <span>Christine Flores</span>
      </a>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
