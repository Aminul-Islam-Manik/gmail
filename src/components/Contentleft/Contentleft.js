// import React, { useState } from 'react';
import Setting from '../Setting/Setting';
import './contentleft.css';

const Contentleft = ({toggleVisibility}) => {

    return (
        <div className='cont-left'>
            <Setting toggleVisibility={toggleVisibility}></Setting>
        </div>
    );
};

export default Contentleft;