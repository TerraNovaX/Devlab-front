import NavigationMenu from "../components/NavigationMenu.jsx";
import Header from "../components/Header.jsx";
import React, { useState, useEffect } from "react";

const DropOffDevice = () => {

  const [headerData, setHeaderData] = useState({
          backgroundImage: '',
          title: '',
          breadcrumb: []
      });
  
      useEffect(() => {
          // ici entrer les données spécifiques à la page 
          setHeaderData({
              backgroundImage: '/src/assets/formation_img.png',
              title: 'Déposer',
              breadcrumb: [
                  { href: '/', label: 'Home' },
                  { href: '/DropOffDevice', label: 'Déposer' }
              ]
          });
      }, []);

  return <div>
    <NavigationMenu/>
    <Header 
          backgroundImage={headerData.backgroundImage} 
          title={headerData.title} 
          breadcrumb={headerData.breadcrumb} 
      />
    DropOffDevice</div>;
};

export default DropOffDevice;
