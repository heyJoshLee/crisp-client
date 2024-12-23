import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header flex items-center flex-justify-between">
      <Link to="/">
        <h1>Crisp MVP</h1>
      </Link>
      <ul className="flex-end">
        <Link className='mr-4' to="/">Home</Link>
        <Link className='mr-4' to="/accountTypes">Account Types</Link>
        <Link className='mr-4' to="/accounts">Accounts</Link>
      </ul>
    </header>
  );
}

export default Header;