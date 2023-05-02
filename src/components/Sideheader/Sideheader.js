import { InboxIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sideheader.css';

const Sideheader = () => {
    return (
        <nav className='side-header'>
            <div className='flex'>
                <InboxIcon className='inbox-icon'></InboxIcon>
                <Link to='/'>Inbox</Link>
            </div>
            <div className='flex'>
                <InboxIcon className='inbox-icon'></InboxIcon>
                <Link to='./starred'>Starred</Link>
            </div>
            <div className='flex'>
                <InboxIcon className='inbox-icon'></InboxIcon>
                <Link to='./snoozed'>Snoozer</Link>
            </div>
        </nav>
    );
};

export default Sideheader;