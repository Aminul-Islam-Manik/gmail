
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './Body.css';


const Body = ({isVisible, toggleVisibility}) => {
    return (
        <div className='body'>
            <Sidebar></Sidebar>
            <Content isVisible={isVisible} toggleVisibility={toggleVisibility}></Content>
        </div>
    );
};

export default Body;