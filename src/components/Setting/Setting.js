import { Link } from 'react-router-dom';
import './Setting.css';
import { XMarkIcon } from '@heroicons/react/24/solid';


const Setting = ({toggleVisibility}) => {
    return (
        <div className='setting-pop'>
            <div className="quick-settings">
                <h4>Quick Settings</h4>
                <XMarkIcon onClick={toggleVisibility} className='xmark'></XMarkIcon>
            </div>
            <div className="btn-wrapper">
                <Link to='./settings'>
                    <button className='settings-btn'>See all settings</button>
                </Link>
                
            </div>

            <div className="settings-wrapper">
                <div className="app-gmail">Hey gmail apps1</div>
                <div className="app-gmail">Hey gmail apps2</div>
                <div className="app-gmail">Hey gmail apps3</div>
                <div className="app-gmail">Hey gmail apps4</div>
            </div>
        </div>
    );
};

export default Setting;