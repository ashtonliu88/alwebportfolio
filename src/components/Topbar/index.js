import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logoS from '../../port-assets/images/logo-s.png';
import logoSub from '../../port-assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => (
    <div className="nav-bar">
        <Link className = 'logo' to='/'>
            <img src={logoS} alt="logo" />
            <img className="sub-logo" src={logoSub} alt="slogan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to = "/">
                <FontAwesomeIcon icon={faHome} color='#B4975A' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" 
            className = "about-link" to = "/about">
                <FontAwesomeIcon icon={faUser} color='#B4975A' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" 
            className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#B4975A' />
            </NavLink>
        </nav>
    </div>
)

export default Topbar;
