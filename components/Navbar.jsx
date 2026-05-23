"use client";

import { useEffect, useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/apps", "Apps"],
  ["/projects", "Projects"],
  ["/certificates", "Certificates"],
  ["/pricing", "Pricing"],
  ["/blog", "Blog"],
  ["/testimonials", "Testimonials"],
  ["/faq-contact", "FAQ / Contact"],
  ["/myanmar", "မြန်မာ"]
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-glass fixed-top">
      <div className="container-max container-fluid">
        <a className="navbar-brand fw-bold" href="/">Moe-Kyaw-Aung</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" id="navMenu" tabIndex="-1">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Navigation</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto gap-lg-2">
              {links.map(([href, label]) => (
                <li className="nav-item" key={href}><a className="nav-link" href={href}>{label}</a></li>
              ))}
            </ul>
            <button className="btn btn-outline-success ms-lg-3 mt-3 mt-lg-0" onClick={toggleTheme}>
              Theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
