import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5C4033] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-4">BTP St. Tropez — Maçonnerie &amp; Carrelage</div>
        <div className="text-sm opacity-80">© {new Date().getFullYear()} BTP St. Tropez. Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footer;