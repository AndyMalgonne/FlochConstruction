"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbnllob");

  if (state.succeeded) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow text-center">
        <p className="text-green-600 font-medium">Merci — votre demande a été envoyée.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="first" placeholder="Prénom" className="w-full p-3 border rounded" />
        <input required name="last" placeholder="Nom" className="w-full p-3 border rounded" />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" type="email" name="email" required placeholder="Email" className="w-full p-3 border rounded" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" name="message" rows={4} required placeholder="Votre message" className="w-full p-3 border rounded" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="text-right">
        <button type="submit" disabled={state.submitting} className="bg-[#b38b6d] text-white px-6 py-2 rounded disabled:opacity-50">
          {state.submitting ? "Envoi..." : "Envoyer la demande"}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f8f4f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-[#5C4033] text-center mb-6">Contactez-Nous</h2>
        <p className="text-center text-[#6b5a53] max-w-2xl mx-auto mb-8">Prêt à démarrer votre projet ? Demandez un devis gratuit.</p>
        <ContactForm />
      </div>
    </section>
  );
}