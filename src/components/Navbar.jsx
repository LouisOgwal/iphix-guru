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

        {/* grouped under services context instead of cluttering nav */}
        <a href="#booking">Book</a>
        <a href="#contact">Contact</a>

        <a href="https://wa.me/254745054505" target="_blank" rel="noreferrer">
          <button className="btn">WhatsApp</button>
        </a>

      </div>

    </div>
  );
}