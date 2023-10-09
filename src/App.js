import React, { useState } from 'react';
import './App.css';
import ImageComponent from './Image_Component';
import BoxComponent from './Box';

const NavItem = ({ to, children, onClick, isActive }) => (
  <a href={to} className={`Nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    {children}
  </a>
);

const NavBar = ({ items, onItemClick, isOpen }) => {
  return (
    <nav className={`NavBar ${isOpen ? 'open' : ''}`}>
      {items.map(item => (
        <NavItem key={item.id} to={item.to} onClick={() => onItemClick(item.name)} isActive={item.isActive}>
          {item.name}
        </NavItem>
      ))}
    </nav>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: 1, name: 'Inicio', to: '/', isActive: false },
    { id: 2, name: 'Servicio', to: '/servicio', isActive: false },
    { id: 3, name: 'Tienda', to: '/tienda', isActive: false },
    { id: 4, name: 'Contacto', to: '/contacto', isActive: false },
    { id: 5, name: 'Blog', to: '/blog', isActive: false },
  ];

  return (
    <div className="app-container">
      <div className="title-and-icon">
        <h1 className="Main-Title">GESTIÓN DE PEDIDOS</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <NavBar items={navItems} onItemClick={toggleMenu} isOpen={menuOpen} />
      <div className='Lol'>
      <ImageComponent/>
      
      </div>
    </div>

  );
};

export default App;
