import React from 'react';
// import '../App.css';

function Header() {
  return(
    <div className="header">
      <img src={require('../assets/facebook.svg')} alt="logo facebook" />
      <div>
        <p>Meu perfil</p>
        <img src={require('../assets/icon_login.png')} alt="icon login" />
      </div>
    </div>
  )
}

export default Header;
