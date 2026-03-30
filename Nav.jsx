import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/scp/SCP-003", label: "Explore SCP 003" },
    { to: "/scp/SCP-004", label: "Explore SCP 004" },
    { to: "/scp/SCP-005", label: "Explore SCP 005" },
    { to: "/scp/SCP-006", label: "Explore SCP 006" },
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.9)", zIndex: 50, color: "white", fontFamily: "inherit" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
        <span style={{ fontWeight: "bold", letterSpacing: "0.15em", fontSize: "1rem" }}>SCP FOUNDATION</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", color: "white", fontSize: "1.8rem", cursor: "pointer", lineHeight: 1, padding: "0 4px" }}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div style={{ display: "flex", flexDirection: "column", padding: "0 1.5rem 1.5rem", gap: "1.2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}