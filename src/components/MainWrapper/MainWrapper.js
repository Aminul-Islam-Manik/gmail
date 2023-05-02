import React from 'react';
import Main from '../Main/Main';
import Body from '../Body/Body';
import './MainWrapper.css';

const MainWrapper = () => {
    return (
        <div className='main-wrapper'>
            <Main></Main>
            <Body></Body>
        </div>
    );
};

export default MainWrapper;