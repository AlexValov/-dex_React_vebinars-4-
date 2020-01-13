import React from 'react';
import './Sidebar.css';
import MainLogo from '../svgs/MainLogo';
import MenuLink from './MenuLink';

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='menu-section'>
                <div className='logo-container'>
                    <a href='/home'>
                        <MainLogo width='96px' height='171px' />
                    </a>
                </div>

                <span className='divider' />

                <nav className='menu'>
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
                </nav>
            </div>

            <span className='divider' />

            <div>
                <nav className='menu'>
                    <ul className='menu-links'>
                        <li>
                            <MenuLink href='/instagram'>Instagram</MenuLink>
                        </li>
                        <li>
                            <MenuLink href='/twitter'>Twitter</MenuLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <span className='divider' />

            <p className='copyright'>Copyright © 2019 NBA</p>
        </aside>
    )
};

export default Sidebar;