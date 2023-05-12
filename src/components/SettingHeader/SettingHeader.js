import React from 'react';
import './SettingHeader.css';

const SettingHeader = ({headerItem}) => {
    return (
        <div>
            <nav className='setting-nav'>
                <li>{headerItem.name}</li>
            </nav>
        </div>
    );
};

export default SettingHeader;