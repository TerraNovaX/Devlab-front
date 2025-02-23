import MapFormation from "../components/MapFormation";
import Header from "../components/Header.jsx";
import React, { useState, useEffect } from "react";

const Formations = () => {

interface Breadcrumb {
    href: string;
    label: string;
}

const [headerData, setHeaderData] = useState<{
    backgroundImage: string;
    title: string;
    breadcrumb: Breadcrumb[];
}>({
    backgroundImage: '',
    title: '',
    breadcrumb: []
});

const [formations, setFormations] = useState<string[]>([]); // Ajouter un état pour stocker les noms des formations

useEffect(() => {
  // ici entrer les données spécifiques à la page 
  setHeaderData({
    backgroundImage: '/src/assets/formation_img.png',
    title: 'Formation',
    breadcrumb: [
      { href: '/', label: 'Home' },
      { href: '/formations', label: 'Formation' }
    ]
  });

  // Récupérer la liste des lieux de formations depuis l'API
  fetch("http://127.0.0.1:8000/api/adresse_formations")
    .then((response) => response.json())
    .then((data) => {
      const formationNames = data.map((item: { nom: string }) => item.nom); // Extraire les noms
      setFormations(formationNames); // Mettre à jour l'état avec les noms
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des formations:", error);
    });
}, []);


  return (
    <div>
      <Header 
      backgroundImage={headerData.backgroundImage} 
      title={headerData.title} 
      breadcrumb={headerData.breadcrumb} 
      />
      <div className="container mt-16 mx-auto px-4 max-w-5xl">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2 pr-4">
          <h1 className="text-4xl font-bold fjalla-one mb-3">Trouver une formation</h1>
          <p>Chez nous, nous croyons que l’éducation est la clé pour adopter des pratiques 
        responsables et durables. Notre section Formation vous 
        offre des ressources pour approfondir vos connaissances sur 
        l’économie circulaire, le recyclage, et la valorisation des 
        produits inutilisés.
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <img src="/src/assets/formation.png" alt="Formation" />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 fjalla-one">Pourquoi se former avec nous ?</h2>
        <ul>
          <li>• Comprendre l’économie circulaire : Découvrez comment vos actions peuvent avoir un impact positif sur l’environnement.</li>
          <li>• Adopter les bonnes pratiques : Apprenez à mieux consommer, recycler et valoriser vos objets du quotidien.</li>
          <li>• Développer vos compétences : Nos formations sont conçues pour être pratiques, accessibles et adaptées à tous, qu’il s’agisse de particuliers ou de professionnels.</li>
          <li>• Soutenir une démarche locale : Identifiez les initiatives proches de chez vous et impliquez-vous dans des projets locaux.</li>
        </ul></div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 fjalla-one">Nos ressources disponibles :</h2>
        <ul>
          <li>• Articles éducatifs pour apprendre à votre rythme.</li>
          <li>• Carte interactive des lieux de formation et ateliers participatifs.</li>
          <li>• Conseils et guides pratiques pour intégrer des habitudes responsables dans votre quotidien.</li>
        </ul>
      </div>

      <div className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold mb-2 fjalla-one">Participez dès aujourd’hui!</h2>
        <p>Que vous soyez novice ou déjà engagé dans une démarche durable, nos formations sont là pour vous accompagner. Explorez notre contenu, localisez un centre de formation près de chez vous, et devenez acteur du changement !</p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mt-8 fjalla-one">Carte interactive des lieux de formation et ateliers participatifs.</h2>
        <div className="flex flex-wrap mt-8 mb-10">
          <div className="w-full md:w-1/3 pr-4">
        <h2 className="text-2xl font-semibold fjalla-one">Liste des formations: </h2>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          {formations.length > 0 ? (
          formations.map((formation, index) => (
            <li key={index} className="text-lg text-gray-700">{formation}</li> // Afficher les noms des formations
          ))
          ) : (
          <li className="text-lg text-gray-500">Chargement des formations...</li>
          )}
        </ul>
          </div>

          <div className="w-full md:w-2/3 pl-4">
        <MapFormation />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Formations;
