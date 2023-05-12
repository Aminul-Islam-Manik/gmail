import React from 'react';
import SettingHeader from '../SettingHeader/SettingHeader';
import './SettingPage.css';
import { Outlet } from 'react-router-dom';
import General from '../General/General';

const SettingPage = () => {
    const headerItems =[
        {id:1, path:'./general', name:'General', element:<General></General>},
        {id:2, path:'./labels', name:'Labels'},
        {id:3, path:'./accounts', name:'Accounts and Import'},
        {id:4, path:'./filters', name:'Filters and Blocked'},
        {id:5, path:'./addresses', name:'Addresses'}
    ]
    return (
        <div>
            <h1>Setting</h1>
            <div className="headerPage">
                {
                    headerItems.map(headerItem=><SettingHeader
                    key={headerItem.id}
                    headerItem={headerItem}
                    ></SettingHeader>)
                }
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default SettingPage;