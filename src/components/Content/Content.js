// import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Content.css';
import Contentleft from '../Contentleft/Contentleft';
// import { isVisible } from '@testing-library/user-event/dist/utils';


const Content = ({isVisible, toggleVisibility}) => {
    return (
        <div className='content-wrapper'>
            <div className="content">
                <Outlet></Outlet>
            </div>
            <div>
            {isVisible && <Contentleft toggleVisibility={toggleVisibility}></Contentleft>}
            </div>
                {/* <Contentleft></Contentleft>             */}
        </div>
    );
};

export default Content;