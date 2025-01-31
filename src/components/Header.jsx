import React from 'react';

const Header = ({ backgroundImage, title, breadcrumb }) => {
    return (
        <header className="header relative" style={{ backgroundImage: `url(${backgroundImage})`, height: '40vh', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
            <div className="absolute bottom-0 left-32 p-4">
                <nav className="breadcrumb text-white text-sm">
                    <ol className="list-reset flex">
                        {breadcrumb.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2">/</span>}
                                <a href={item.href} className="hover:underline">{item.label}</a>
                            </li>
                        ))}
                    </ol>
                </nav>
                <h1 className="text-white text-6xl mb-16 font-fjalla mt-3">{title}</h1>
            </div>
        </header>
    );
};

export default Header;