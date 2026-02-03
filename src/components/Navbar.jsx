export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a className="brand" href="/#home">
          <img className="brand-logo" src="/image/logo.png" alt="AnantaByte logo" />
          <span>Antanta Byte</span>
        </a>

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
