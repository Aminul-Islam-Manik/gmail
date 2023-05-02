import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Bottom = () => {
    return (
        <div>
            {/* <div className="main">
                <div className="red"></div>
                <div className="green">
                <Header></Header>
                <Outlet></Outlet>
                </div>
                <div className="yellow"></div>
            </div> */}

        </div>
    );
};

export default Bottom;