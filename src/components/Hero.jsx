import { useState } from "react";

export default function Hero() {
  const [showQuote, setShowQuote] = useState(false);
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");

  const phone = "254745054505";

  const sendQuoteRequest = () => {
    const message =
`💰 PRICE ENQUIRY REQUEST - GuruPhix

📱 Device: ${device}
🛠 Issue: ${issue}

👉 Kindly provide estimated cost + repair time.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // optional reset
    setDevice("");
    setIssue("");
    setShowQuote(false);
  };

  return (
    <div
      className="hero relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/media/hero.jpg')",
        backgroundSize: "110%",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="hero-content relative z-10 px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          GuruPhix
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-cyan-400">
          Precision Phone Repair & Advanced Data Recovery
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          We restore dead devices, repair logic boards, and recover lost data using professional tools and microsoldering.
        </p>

        <button className="btn" onClick={() => setShowQuote(true)}>
          Get Repair Quote
        </button>

        {/* QUOTE MODAL */}
        {showQuote && (
          <div style={overlay}>
            <div style={box}>

              <h2>Request Price Estimate</h2>

              <input
                placeholder="Device (e.g iPhone 13)"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                style={input}
              />

              <textarea
                placeholder="Describe issue (screen, charging, software, etc.)"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                style={{ ...input, height: "100px" }}
              />

              <button className="btn" onClick={sendQuoteRequest}>
                Send Request
              </button>

              <button
                onClick={() => setShowQuote(false)}
                style={{
                  marginTop: "8px",
                  background: "transparent",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ================= MODAL STYLES ================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const box = {
  background: "#111",
  padding: "25px",
  borderRadius: "14px",
  width: "90%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  border: "1px solid rgba(0,229,255,0.2)",
};

const input = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(0,0,0,0.4)",
  color: "white",
  outline: "none",
};