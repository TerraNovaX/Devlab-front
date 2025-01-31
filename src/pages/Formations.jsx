import React, { useState, useEffect } from "react";
import MapFormation from "../components/MapFormation";
import Header from "../components/Header";

const Formations = () => {
  
  const [headerData, setHeaderData] = useState({
        backgroundImage: '',
        title: '',
        breadcrumb: []
    });

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
    }, []);

  return (
    <div>
      
      <Header 
          backgroundImage={headerData.backgroundImage} 
          title={headerData.title} 
          breadcrumb={headerData.breadcrumb} 
      />
      {/*<MapFormation/>*/}
      {/* Rest of the Formation page content */}
    </div>
  );
};


export default Formations;
