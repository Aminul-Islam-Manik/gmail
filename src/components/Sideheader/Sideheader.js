import { InboxIcon, StarIcon,ClockIcon, PaperAirplaneIcon, DocumentIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sideheader.css';

const Sideheader = () => {
    return (
        <nav className='side-header'>
            <div className='flex'>
                <Link to='/' className='link'>
                    <InboxIcon className='inbox-icon'></InboxIcon>
                    <span className='span'>Inbox</span>
                </Link>
            </div>
            <div className='flex'>
                <Link to='./starred' className='link'><StarIcon className='inbox-icon'></StarIcon>Starred</Link>
            </div>
            <div className='flex'>
                <Link to='/snoozed' className='link'><ClockIcon className='inbox-icon'></ClockIcon>Snoozed</Link>
            </div>
            <div className='flex'>
                <Link to='./draft' className='link'><DocumentIcon className='inbox-icon'></DocumentIcon>Draft</Link>
            </div>
            <div className='flex'>
                <Link to='./sent' className='link'><PaperAirplaneIcon className='inbox-icon'></PaperAirplaneIcon>Sent</Link>
            </div>
        </nav>
    );
};

export default Sideheader;