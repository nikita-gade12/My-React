import React, { useState } from 'react';
import css from './Header.module.css';
import logo from '../../asseta/logo.jpg';
import { CgShoppingBag } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [showmenu, setshowmenu] = useState(true);

  const togglemenu = () => {
    setshowmenu(!showmenu); // Use the setshowmenu function to update the state
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt='' />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={togglemenu}>
          <FaBars />
        </div>

        <ul className={css.menu} style={{ display: showmenu ? 'inherit' : 'none' }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Seles</li>
          <li>ENG</li>
        </ul>

        <input type='text' className={css.search} placeholder='search' />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
}

export default Header;
