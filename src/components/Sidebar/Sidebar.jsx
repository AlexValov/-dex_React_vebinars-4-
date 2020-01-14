import React from 'react';
import './Sidebar.css';
import MainLogo from '../svgs/MainLogo';
import NavLinks from './NavLinks'
import SoNetLinks from './SoNetLinks';

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
                    <NavLinks />
                </nav>
            </div>

            <span className='divider' />
            <div>
                <nav className='menu'>
                    <SoNetLinks />
                </nav>
            </div>

            <span className='divider' />
            <p className='copyright'>Copyright © 2019 NBA</p>
        </aside >
    )
};

export default Sidebar;