import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link} style={{padding:'0'}}>
            <i className={icon} style={{fontSize:'34px', padding: 0}} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;