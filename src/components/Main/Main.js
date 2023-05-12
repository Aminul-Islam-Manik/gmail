import './Main.css';
import logo from '../images/logo_gmail.png';
import { AdjustmentsHorizontalIcon, Bars3Icon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
// import { Link } from 'react-router-dom';
import Yellow from '../Yellow/Yellow';


const Main = ({toggleVisibility}) => {

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
                    <Yellow toggleVisibility={toggleVisibility}></Yellow>
                </div>
            </div>
        </div>

    );
};

export default Main;