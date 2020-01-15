import React from 'react';
import {Link} from 'react-router-dom';


const MenuLink = ({ active, children, ...restProps}) => {
    const className = `link ${active ? 'active' : ''}`;

    return (
        <Link className={className} {...restProps} >
            {children}
        </Link>
    );
};

export default MenuLink;