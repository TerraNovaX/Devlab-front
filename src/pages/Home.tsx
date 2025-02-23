import NavigationMenu from "../components/NavigationMenu.jsx";
import Header from "../components/Header.jsx";
import React, { useState, useEffect } from "react";


const Home = () => {

  const [headerData, setHeaderData] = useState({
    backgroundImage: '',
    title: '',
    breadcrumb: []
});

useEffect(() => {
    // ici entrer les données spécifiques à la page 
    setHeaderData({
        backgroundImage: '/src/assets/formation_img.png',
        title: 'Accueil',
        breadcrumb: [],
    });
}, []);


  return <div>
    <Header 
          backgroundImage={headerData.backgroundImage} 
          title={headerData.title} 
          breadcrumb={headerData.breadcrumb} 
      />
  </div>;
};

export default Home;
