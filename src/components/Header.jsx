import React from 'react';

const Header = ({ backgroundImage, title, breadcrumb }) => {
    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})`, height: '20vh' }}>
            <div className="absolute">
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
                <h1 className="text-white">{title}</h1>
            </div>
        </header>
    );
};

export default Header;