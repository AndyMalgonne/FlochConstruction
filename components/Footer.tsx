import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5C4033] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-4">Floch Construction — Maçonnerie &amp; Carrelage</div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Floch Construction. Tous droits réservés.
          <a href="/privacy" className="underline ml-2">
            Politique de confidentialité
          </a>
		  <a href="/legal" className="underline ml-2">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;