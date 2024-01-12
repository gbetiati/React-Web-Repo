import React from "react";

const Nav = ({ onLogout , myClick }) => {

    return (
        <div className='nav'>
        <h1 className='logo'>SisRepo</h1>
        <button onClick={onLogout}> Sair </button>
        <button onClick={myClick}> meu click </button>
    </div>
    )
}

export default Nav;