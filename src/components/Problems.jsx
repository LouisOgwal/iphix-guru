import { useState } from "react";

export default function Problems() {
  const [selected, setSelected] = useState(null);

  const problems = [
    {
      title: "Network & Connectivity",
      desc: "No service, weak signal, Wi-Fi/Bluetooth issues, SIM errors.",
      details: `Common issues include:

• No service or weak signal
• Wi-Fi or Bluetooth not working
• SIM card errors

Our Solution:
We diagnose baseband faults, repair signal-related components, and restore full network connectivity.`
    },
    {
      title: "Battery & Charging",
      desc: "Fast drain, overheating, not charging, shutdowns.",
      details: `Common issues include:

• Fast battery drain
• Phone not charging
• Overheating
• Unexpected shutdowns
• Slow charging

Our Solution:
Battery replacement, charging port repair, and power management fixes.`
    },
    {
      title: "Camera Issues",
      desc: "Blurry images, black screen, shaky camera, flash failure.",
      details: `Common issues include:

• Blurry or unfocused images
• Camera not opening (black screen)
• Shaky or vibrating camera
• Flash not working

Our Solution:
Camera module replacement and lens cleaning to restore clear quality.`
    },
    {
      title: "Display & Touch",
      desc: "Unresponsive touch, flickering, black/white screen.",
      details: `Common issues include:

• Unresponsive touchscreen
• Screen flickering or lines
• Black or white screen

Our Solution:
Screen replacement using high-quality parts.`
    },
    {
      title: "Performance Issues",
      desc: "Lagging, freezing, slow speed.",
      details: `Common issues include:

• Slow speed or lagging
• Frequent freezing
• App crashes

Our Solution:
System optimization and software repair.`
    },
    {
      title: "Software Issues",
      desc: "iOS errors, stuck logo, update failures.",
      details: `Common issues include:

• iOS update failures
• Stuck on Apple logo
• Storage full errors

Our Solution:
System restore and safe software repair.`
    },
    {
      title: "Audio Issues",
      desc: "No sound, distorted audio.",
      details: `Common issues include:

• No sound during calls or media
• Distorted or crackling audio

Our Solution:
Speaker, microphone, and audio IC repair.`
    },
    {
      title: "Hardware Issues",
      desc: "Buttons, charging port, Face ID issues.",
      details: `Common issues include:

• Faulty buttons (power, volume)
• Charging port damage
• Face ID / Touch ID not working

Our Solution:
Precision hardware repair and part replacement.`
    }
  ];

  // 🔥 SAME WHATSAPP LOGIC STYLE AS SERVICES (CONSISTENT UI SYSTEM)
  const handleRequest = (item) => {
    const message =
`🛠 NEW REPAIR REQUEST - GuruPhix

📱 Issue Type: ${item.title}

🧾 Issue Description:
${item.desc}

📌 Detailed Notes:
${item.details}

🚀 Action Required: Diagnose & Repair ASAP`;

    const phone = "254745054505";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>
        Common iPhone Problems We Fix
      </h2>

      <p style={{ textAlign: "center", opacity: 0.7, marginBottom: "40px" }}>
        Tap any issue to view details and request repair.
      </p>

      <div className="grid grid-3">

        {problems.map((p, i) => (
          <div
            key={i}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(p)}
          >
            <h3>{p.title}</h3>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              {p.desc}
            </p>
          </div>
        ))}

      </div>

      {/* 🔥 MODAL (UPGRADED TO MATCH SERVICES.JSX STYLE) */}
      {selected && (
        <div style={overlay}>
          <div style={modal}>

            <h2 style={{ marginBottom: "10px" }}>
              {selected.title}
            </h2>

            <p style={{ whiteSpace: "pre-line", opacity: 0.85 }}>
              {selected.details}
            </p>

            <button
              className="btn"
              onClick={() => handleRequest(selected)}
              style={{ marginTop: "20px", width: "100%" }}
            >
              Request via WhatsApp
            </button>

            <button
              onClick={() => setSelected(null)}
              style={closeBtn}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

/* ===== MODAL STYLES (MATCH SERVICES EXACTLY) ===== */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
};

const modal = {
  background: "#111",
  padding: "30px",
  borderRadius: "16px",
  width: "90%",
  maxWidth: "500px",
  border: "1px solid rgba(255,255,255,0.1)"
};

const closeBtn = {
  marginTop: "10px",
  width: "100%",
  padding: "10px",
  background: "transparent",
  border: "1px solid white",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer"
};