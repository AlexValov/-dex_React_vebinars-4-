import React from 'react';
import MenuLink from './MenuLink';


const NavLinks = () => {
    return (
        <ul className='menu-links'>
            <li>
                <MenuLink to='/news' active>Новости</MenuLink>
            </li>
            <li>
                <MenuLink to='/teams'>Команды</MenuLink>
            </li>
            <li>
                <MenuLink to='/players'>Игроки</MenuLink>
            </li>
        </ul>
    );
};

export default NavLinks;
