import React, { useState } from 'react';
import Main from '../Main/Main';
import Body from '../Body/Body';
import './MainWrapper.css';

const MainWrapper = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return (
        <div className='main-wrapper'>
            <Main toggleVisibility={toggleVisibility}></Main>
            <Body isVisible={isVisible} toggleVisibility={toggleVisibility}></Body>
        </div>
    );
};

export default MainWrapper;