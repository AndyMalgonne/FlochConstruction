export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-[#5C4033]">Politique de confidentialité</h1>

        <section className="mb-6">
          <h2 className="font-semibold">Données collectées</h2>
          <p>Prénom, nom, email, téléphone et message via le formulaire de contact.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold">Finalités</h2>
          <p>Répondre aux demandes, fournir des devis et gérer la relation client.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold">Durée de conservation</h2>
          <p>Les données sont conservées tant que nécessaire pour la finalité ou selon les obligations légales.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold">Vos droits</h2>
          <p>Vous pouvez demander l'accès, la rectification ou la suppression des données en contactant le contact ci‑dessous.</p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold">Contact</h2>
          <p>Pour toute question : téléphone ou email disponible sur le site.</p>
        </section>
      </div>
    </main>
  );
}