import React from 'react';
import './Main.css';
import logo from '../images/logo_gmail.png';
import { AdjustmentsHorizontalIcon, Bars3Icon, InboxIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className='main'>
                <div className="red">
                    <button className="bar-btn">
                        <Bars3Icon className='bar3'></Bars3Icon>
                    </button>
                    <span className='g-icon'><img src={logo} alt="" /></span>
                </div>
                <div className="green">
                    <button type='submit' className='search-btn'><MagnifyingGlassIcon className='search'></MagnifyingGlassIcon></button>
                    <input type="search" placeholder='Search' />
                    <button className='adjust-btn'><AdjustmentsHorizontalIcon className='adjust'></AdjustmentsHorizontalIcon></button>
                </div>
                <div className="yellow">
                    <div className='flex'>
                        <Link to='./settings'><InboxIcon className='inbox-icon'></InboxIcon></Link>
                    </div>
                    <div className='flex'>
                        <Link to='./starred'><InboxIcon className='inbox-icon'></InboxIcon></Link>
                    </div>
                    <div className='flex'>
                        <Link to='./snoozed'><InboxIcon className='inbox-icon'></InboxIcon></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;