import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
`🔥 NEW REPAIR BOOKING - GuruPhix

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📱 Device: ${form.device}
📍 Location: ${form.location}
🛠 Issue: ${form.issue}

🚀 Please respond ASAP`;

    const phone = "254745054505";

    // 🔥 SMART DETECTION (mobile vs desktop)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Primary WhatsApp link
    const url = isMobile
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    // 🔥 UNIVERSAL FALLBACK (most reliable)
    const fallbackUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    try {
      const newWindow = window.open(url, "_blank");

      // If popup blocked or failed → fallback
      if (!newWindow || newWindow.closed) {
        window.location.href = fallbackUrl;
      }

    } catch (error) {
      window.location.href = fallbackUrl;
    }
  };

  return (
    // ✅ FIX ADDED HERE
    <div className="section" id="booking">

      <h2 style={{ textAlign: "center" }}>Book a Repair</h2>

      <p style={{ textAlign: "center", opacity: 0.6 }}>
        All bookings are sent instantly to WhatsApp
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={input}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          style={input}
        />

        <input
          name="device"
          placeholder="Device (e.g iPhone 13, Samsung S22)"
          onChange={handleChange}
          style={input}
        />

        {/* 📍 LOCATION */}
        <select
          name="location"
          onChange={handleChange}
          style={{ ...input, cursor: "pointer" }}
        >
          <option value="">Select County in Kenya</option>

          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Kisumu</option>
          <option>Nakuru</option>
          <option>Eldoret (Uasin Gishu)</option>
          <option>Kiambu</option>
          <option>Kajiado</option>
          <option>Machakos</option>
          <option>Nyeri</option>
          <option>Murang’a</option>
          <option>Meru</option>
          <option>Embu</option>
          <option>Tharaka Nithi</option>
          <option>Kirinyaga</option>
          <option>Laikipia</option>
          <option>Nandi</option>
          <option>Bungoma</option>
          <option>Busia</option>
          <option>Siaya</option>
          <option>Homa Bay</option>
          <option>Migori</option>
          <option>Kisii</option>
          <option>Nyamira</option>
          <option>Kakamega</option>
          <option>Vihiga</option>
          <option>Garissa</option>
          <option>Wajir</option>
          <option>Mandera</option>
          <option>Isiolo</option>
          <option>Marsabit</option>
          <option>Turkana</option>
          <option>West Pokot</option>
          <option>Samburu</option>
          <option>Trans Nzoia</option>
          <option>Elgeyo Marakwet</option>
          <option>Baringo</option>
          <option>Kericho</option>
          <option>Bomet</option>
          <option>Narok</option>
          <option>Taita Taveta</option>
          <option>Tana River</option>
          <option>Lamu</option>
          <option>Kwale</option>
          <option>Kitui</option>
          <option>Makueni</option>

        </select>

        <textarea
          name="issue"
          placeholder="Describe issue"
          onChange={handleChange}
          style={{ ...input, height: "100px" }}
        />

        <button className="btn">
          Send via WhatsApp
        </button>

      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const formStyle = {
  maxWidth: "600px",
  margin: "auto",
  display: "grid",
  gap: "15px"
};

const input = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(0,0,0,0.4)",
  color: "white",
  outline: "none"
};