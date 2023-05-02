import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './Body.css';

const Body = () => {
    return (
        <div className='body'>
            <Sidebar></Sidebar>
            <Content></Content>
        </div>
    );
};

export default Body;