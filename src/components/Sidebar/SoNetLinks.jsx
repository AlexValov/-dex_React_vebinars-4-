import React from 'react';
import MenuLink from './SoNetLinks';


const SoNetLinks = () => {
    return (
        <ul className='menu-links'>
            <li>
                <MenuLink href='/instagram'>Instagram</MenuLink>
            </li>
            <li>
                <MenuLink href='/twitter'>Twitter</MenuLink>
            </li>
        </ul>
    );
};

export default SoNetLinks;





