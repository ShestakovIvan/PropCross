import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">PropertyCross
    <Link to={`/faves`}>
    <button className="favesButton">
    ★Faves
    </button>
    </Link>
    </div>
  );
};

export default Navbar;