import React, { useState, useEffect } from "react";
import MapFormation from "../components/MapFormation";
import Header from "../components/Header";

const Formations = () => {
  
  const [headerData, setHeaderData] = useState({
        backgroundImage: '/src/assets/formation_img.png',
        title: '',
        breadcrumb: []
    });

    useEffect(() => {
        // Fetch or set the data specific to the Formation page
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
      {/*<MapFormation/>*/}
      <Header 
          backgroundImage={headerData.backgroundImage} 
          title={headerData.title} 
          breadcrumb={headerData.breadcrumb} 
      />
      {/* Rest of the Formation page content */}
    </div>
  );
};


export default Formations;
