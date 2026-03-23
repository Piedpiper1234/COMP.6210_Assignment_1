import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full bg-black/80 text-white px-6 py-4 flex gap-6 text-lg fixed top-0 left-0 z-50">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/scp/SCP-003" className="nav-link">Explore SCP 003</Link>
      <Link to="/scp/SCP-004" className="nav-link">Explore SCP 004</Link>
      <Link to="/scp/SCP-005" className="nav-link">Explore SCP 005</Link>
      <Link to="/scp/SCP-006" className="nav-link">Explore SCP 006</Link>
    </nav>
  );
}