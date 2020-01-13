import React from 'react';

const MenuLink = ({ active, children, ...restProps}) => {
    const className = `link ${active ? 'active' : ''}`;

    return (
        <a className={className} {...restProps} >
            {children}
        </a>
    );
};

export default MenuLink;