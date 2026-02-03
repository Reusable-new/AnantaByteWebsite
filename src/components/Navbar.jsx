export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div style={{ fontWeight: 800, color: "#a78bfa" }}>Antanta Byte</div>

        <nav className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/#testimonials">Testimonials</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a className="btn-getstarted" href="/#contact">Get Started</a>
      </div>
    </header>
  );
}
