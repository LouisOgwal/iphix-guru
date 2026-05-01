export default function Navbar() {
  return (
    <div className="navbar">

      <h2>
        Guru<span style={{ color: "#00e5ff" }}>Phix</span>
      </h2>

      <div className="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#problems">Problems</a>
        <a href="#whyus">Why Us</a>
        <a href="#gallery">Work</a>
        <a href="#booking">Book</a>
        <a href="#contact">Contact</a>

        <a href="https://wa.me/254745054505" target="_blank" rel="noreferrer">
          <button className="btn">WhatsApp Us</button>
        </a>

      </div>

    </div>
  );
}