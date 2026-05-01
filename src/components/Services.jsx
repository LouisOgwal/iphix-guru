import { useState } from "react";

const services = [

  {
    title: "Screen Damage / Display Issues",
    desc: "Cracked screen, flickering, touch failure.",
    details:
      "We replace and restore damaged displays using premium quality parts with full calibration."
  },
  {
    title: "Battery Problems",
    desc: "Fast draining, overheating, shutdowns.",
    details:
      "Battery replacement and power optimization."
  },
  {
    title: "Charging Issues",
    desc: "Not charging or loose port.",
    details:
      "Charging port repair and power IC fixes."
  },
  {
    title: "Water / Liquid Damage",
    desc: "Liquid exposure or corrosion.",
    details:
      "Ultrasonic cleaning and board recovery."
  },
  {
    title: "Phone Not Turning On",
    desc: "Dead phone or no response.",
    details:
      "Motherboard and power circuit diagnostics."
  },
  {
    title: "Speaker / Audio Issues",
    desc: "No sound or distortion.",
    details:
      "Speaker and audio component repair."
  },
  {
    title: "Microphone Issues",
    desc: "Voice not detected in calls.",
    details:
      "Microphone circuit repair."
  },

  /* ✅ CAMERA FULL DETAIL (kept exactly, no change logic) */
  {
    title: "Camera Issues",
    desc: "Blurry camera, black screen, camera failure.",
    details: `We repair front and rear camera modules and connections.

Common symptoms include:

• Blurry or Out-of-Focus Images  
• Camera Not Opening  
• Shaky or Vibrating Camera  
• Flash Not Working  
• Overheating During Use  
• Poor Image Quality  
• Front or Rear Camera Failure  
• Camera App Freezing or Crashing  
• Dust or Moisture Inside Lens  
• Slow Camera Performance`
  },

  {
    title: "Button Failures",
    desc: "Power or volume buttons not working.",
    details:
      "Physical button and flex cable repair."
  },

  {
    title: "Software Issues",
    desc: "Crashes, freezing, system errors.",
    details:
      "System repair and optimization."
  },
  {
    title: "Boot Loop / Stuck Logo",
    desc: "Phone stuck on startup.",
    details:
      "Firmware repair and system recovery."
  },
  {
    title: "Storage / Performance Issues",
    desc: "Slow phone or low storage.",
    details:
      "System cleanup and optimization."
  },
  {
    title: "Virus / Malware Issues",
    desc: "Popups or unwanted apps.",
    details:
      "Malware removal and security cleanup."
  },

  {
    title: "No Network / SIM Issues",
    desc: "No service or SIM errors.",
    details: `Baseband and network repair.

Fixes:
• No Service / Weak Signal  
• SIM Not Detected  
• Invalid IMEI  
• Network Failure  
• Connectivity Issues`
  },

  {
    title: "WiFi / Bluetooth Issues",
    desc: "Connection failures.",
    details:
      "Wireless module repair and troubleshooting."
  },

  {
    title: "Logic Board Repair",
    desc: "Advanced motherboard faults.",
    details:
      "Microsoldering and IC-level repair."
  },
  {
    title: "Data Recovery",
    desc: "Recover lost files.",
    details:
      "Data extraction from damaged devices."
  }
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  const handleRequest = (service) => {
    const message =
`🛠 NEW REPAIR REQUEST - GuruPhix

📱 Service: ${service.title}

🧾 Issue:
${service.desc}

🚀 Please assist ASAP`;

    const phone = "254745054505";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>
        Our Repair Services
      </h2>

      <p style={{ textAlign: "center", opacity: 0.7, marginBottom: "40px" }}>
        Tap a service to view details and request repair.
      </p>

      <div className="grid grid-3">

        {services.map((s, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelected(s)}
            style={{ cursor: "pointer" }}
          >
            <h3>{s.title}</h3>
            <p style={{ opacity: 0.7 }}>{s.desc}</p>
          </div>
        ))}

      </div>

      {selected && (
        <div style={overlay}>
          <div style={modal}>

            <h2>{selected.title}</h2>

            <p style={{ whiteSpace: "pre-line", opacity: 0.8 }}>
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