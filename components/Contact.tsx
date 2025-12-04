"use client";
import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f4f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-[#5C4033] text-center mb-6">Contactez-Nous</h2>
        <p className="text-center text-[#6b5a53] max-w-2xl mx-auto mb-8">Prêt à démarrer votre projet ? Demandez un devis gratuit.</p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          {sent ? (
            <div className="text-center text-green-600 font-medium">Merci — votre demande a été envoyée.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required name="first" placeholder="Prénom" className="w-full p-3 border rounded"/>
                <input required name="last" placeholder="Nom" className="w-full p-3 border rounded"/>
              </div>
              <input required type="email" name="email" placeholder="Email" className="w-full p-3 border rounded"/>
              <input name="phone" placeholder="Téléphone" className="w-full p-3 border rounded"/>
              <textarea name="message" rows={4} placeholder="Détails du projet" className="w-full p-3 border rounded"></textarea>
              <div className="text-right">
                <button type="submit" className="bg-[#b38b6d] text-white px-6 py-2 rounded">Envoyer la demande</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;