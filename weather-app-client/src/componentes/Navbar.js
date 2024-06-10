import React from 'react';

const Navbar = () => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><a href="/" style={aStyle}>Inicio</a></li>
                <li style={liStyle}><a href="/about" style={aStyle}>Sobre nosotros</a></li>
                <li style={liStyle}><a href="/contact" style={aStyle}>Contactos</a></li>
            </ul>
        </nav>
    );
};

const navStyle = {
    background: '#555',
    padding: '10px'
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center'
};

const liStyle = {
    margin: '0 10px'
};

const aStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Navbar;
