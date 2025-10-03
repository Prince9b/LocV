import React from "react";

function Faq() {
  return (
    <div>
        <h1 className="text-center md:text-4xl text-3xl font-extrabold mt-10">FAQ</h1>
        <p className="text-center font-bold">Question fréquemment posée</p>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border mt-5"
      >
        <div className="collapse-title font-semibold text-[var(--red-color)]">
          Comment puis-je réserver un véhicule ?
        </div>
        <div className="collapse-content text-xl">
          Vous pouvez réserver un véhicule directement sur notre site internet
          en sélectionnant la voiture qui vous convient et en appelant le numero
          de telephone qui lui est attribuee
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold text-[var(--red-color)]">
          Quels types de vehicules proposez vous ?
        </div>
        <div className="collapse-content text-xl">
          Nous proposons une large gamme de véhicules pour répondre à tous vos
          besoins : citadines économiques, berlines confortables, SUV,
          utilitaires, et véhicules de prestige. Certains modèles sont également
          disponibles avec boîte automatique ou équipements spécifiques (GPS,
          sièges bébé, etc.).
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold text-[var(--red-color)]">
          Puis-je louer un vehicule avec chauffeur ?
        </div>
        <div className="collapse-content text-xl">
          Oui, il est tout à fait possible de louer un véhicule avec chauffeur.
          Ce service est disponible sur demande, principalement pour les
          événements spéciaux, les transferts aéroport ou les déplacements
          professionnels. Contactez-nous pour plus d’informations sur les tarifs
          et les disponibilités.
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold text-[var(--red-color)]">
          Quels sont les documents necessaires pour louer une voiture ?
        </div>
        <div className="collapse-content text-xl">
          Pour louer un véhicule, vous devez présenter une pièce d’identité en
          cours de validité (carte d’identité ou passeport), un permis de
          conduire valide depuis au moins un an (selon le véhicule).
        </div>
      </div>
    </div>
  );
}

export default Faq;
