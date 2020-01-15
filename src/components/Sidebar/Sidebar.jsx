import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import MainLogo from '../svgs/MainLogo';
import NavLinks from './NavLinks';
import MenuLink from './MenuLink';


const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='menu-section'>
                <div className='logo-container'>
                    <Link to ='/'>
                        <MainLogo width='96px' height='171px' />
                    </Link>
                </div>

                <span className='divider' />
                <nav className='menu'>
                    <NavLinks />
                </nav>
            </div>

            <span className='divider' />
            <div>
                <nav className='menu'>
                    <ul className='menu-links'>
                        <li>
                            <MenuLink to='/instagram'>Instagram</MenuLink>
                        </li>
                        <li>
                            <MenuLink to='/twitter'>Twitter</MenuLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <span className='divider' />
            <p className='copyright'>Copyright © 2019 NBA</p>
        </aside >
    );
};

export default Sidebar;