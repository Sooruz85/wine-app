"use client";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
        <p>
          Les présentes conditions générales de vente régissent les relations entre
          Grands Vins et ses clients pour toute réservation de visite ou achat
          de vin sur notre plateforme.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Réservations</h2>
        <h3 className="text-xl font-semibold mb-2">2.1 Processus de réservation</h3>
        <p>
          La réservation devient définitive après confirmation par email et
          paiement intégral de la prestation.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Annulation</h3>
        <p>
          Toute annulation doit être effectuée au moins 48 heures avant la visite.
          Un remboursement intégral sera effectué pour les annulations respectant
          ce délai.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Prix et Paiement</h2>
        <p>
          Les prix sont indiqués en euros TTC. Le paiement s&apos;effectue en ligne
          par carte bancaire ou virement. La réservation n&apos;est confirmée qu&apos;après
          réception du paiement intégral.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Responsabilité</h2>
        <p>
          Grands Vins ne pourra être tenu responsable en cas de force majeure
          ou d&apos;événement indépendant de sa volonté perturbant l&apos;organisation
          des visites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des éléments du site (textes, images, vidéos) sont protégés
          par le droit d&apos;auteur. Toute reproduction est strictement interdite
          sans autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Protection des données</h2>
        <p>
          Les données personnelles collectées font l&apos;objet d&apos;un traitement
          informatique. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
          de rectification et de suppression de vos données.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Droit applicable</h2>
        <p>
          Les présentes conditions générales sont soumises au droit français.
          Tout litige relatif à leur interprétation et/ou à leur exécution
          relève des tribunaux français.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p>
          Pour toute question concernant nos conditions générales, contactez-nous :
        </p>
        <p className="font-semibold mt-2">
          Email : contact@grandsvins.fr<br />
          Téléphone : +33 (0)1 23 45 67 89<br />
          Adresse : 123 Avenue des Vignes, 75008 Paris
        </p>
      </section>
    </div>
  );
}
