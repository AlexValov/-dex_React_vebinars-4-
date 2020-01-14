import React from 'react';
import MenuLink from './MenuLink';


const NavLinks = () => {
    return (
        <ul className='menu-links'>
            <li>
                <MenuLink href='/news' active>Новости</MenuLink>
            </li>
            <li>
                <MenuLink href='/teams'>Команды</MenuLink>
            </li>
            <li>
                <MenuLink href='/players'>Игроки</MenuLink>
            </li>
        </ul>
    );
};

export default NavLinks;
