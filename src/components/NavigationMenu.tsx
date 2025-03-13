import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationMenu() {
  const menuItems = [
    { label: "Le concept", path: "/concept" },
    { label: "Déposer un produit", path: "/DropOffDevice" },
    { label: "Formations", path: "/Formations" },
    { label: "Contact", path: "/Contact" },
  ];

  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate("/LoginPage");
  };

  return (
    <div className="flex flex-wrap gap-10 justify-between items-center self-stretch p-6 w-full text-base font-medium text-black max-md:px-5 max-md:max-w-full">
      <div className="self-stretch my-auto text-3xl font-bold leading-none text-black">
        <Link
          to="/"
          className="self-stretch my-auto text-3xl font-bold leading-none text-black">
          magnifico
        </Link>
      </div>
      <nav className="flex gap-2 self-stretch my-auto tracking-wide min-w-[240px] max-md:max-w-full">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="gap-2 self-stretch px-2 py-3 h-full hover:underline">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 items-start self-stretch my-auto tracking-wide">
        <div className="flex justify-center items-center px-2 py-3 rounded-lg">
          <button
            onClick={handleAccountClick}
            className="self-stretch px-4 my-auto hover:underline"
            tabIndex={0}>
            Mon compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
