export default function Contact() {
  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>Contact Us</h2>

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          textAlign: "center",
          lineHeight: "2",
          background: "rgba(255,255,255,0.04)",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)"
        }}
      >

        <p>📍 Nairobi, Kenya</p>

        <p>
          📞{" "}
          <a href="tel:+254745054505" style={{ color: "#00e5ff", textDecoration: "none" }}>
            +254 745 054 505
          </a>
        </p>

        <p>
          💬{" "}
          <a href="https://wa.me/254745054505" target="_blank" style={{ color: "#00ffa3", textDecoration: "none" }}>
            Chat on WhatsApp
          </a>
        </p>

        <p>
          📧{" "}
          <a href="mailto:godfreymboya941@gmail.com" style={{ color: "#00e5ff", textDecoration: "none" }}>
            godfreymboya941@gmail.com
          </a>
        </p>

        <p style={{ opacity: 0.6, marginTop: "15px", fontSize: "13px" }}>
          We respond quickly to all repair inquiries and bookings.
        </p>

        {/* 🔥 SEO BOOST (HIDDEN) */}
        <p style={{ display: "none" }}>
          iPhone Repair Services in Nairobi. Looking for professional iPhone repair in Nairobi?
          We offer fast, reliable, and affordable solutions for all iPhone problems.
          Keywords: iPhone repair Nairobi, iPhone technician Nairobi, phone repair near me,
          Apple repair services Nairobi.
        </p>

      </div>
    </div>
  );
}