"use client";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
        <p>
          Nous collectons les informations suivantes lorsque vous utilisez notre site :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale</li>
          <li>Préférences de dégustation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
        <p>
          Les informations que nous collectons sont utilisées pour :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personnaliser votre expérience</li>
          <li>Améliorer notre service client</li>
          <li>Traiter vos réservations</li>
          <li>Vous envoyer des communications marketing (avec votre consentement)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Protection des informations</h2>
        <p>
          Nous mettons en œuvre une variété de mesures de sécurité pour préserver
          la sécurité de vos informations personnelles. Nous utilisons un
          chiffrement à la pointe de la technologie pour protéger les informations
          sensibles transmises en ligne.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de
          navigation. Vous pouvez choisir de désactiver les cookies dans les
          paramètres de votre navigateur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Droit d&apos;accès à vos données personnelles</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d&apos;opposition</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
        <p>
          Pour toute question concernant notre politique de confidentialité,
          contactez-nous à :
        </p>
        <p className="font-semibold mt-2">
          Email : privacy@grandsvins.fr<br />
          Téléphone : +33 (0)1 23 45 67 89
        </p>
      </section>
    </div>
  );
}
