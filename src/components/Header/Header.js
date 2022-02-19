import React from 'react'
import {
    Nav,
    Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, withRouter} from 'react-router-dom';
import resumeData from '../../utils/resumeData';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TelegramIcon from '@material-ui/icons/Telegram';

import './Header.css';
import CustomButton from '../Button/Button';

const Header = (props) => {

    const pathName = props?.location?.pathname;

    return (
        <div className='container_shadow'>
            <Navbar expand='lg' sticky='top' className='header'>
                {/* Home link */}
                <Nav.Link as={NavLink} to='/' className='header_navlink'>
                    <Navbar.Brand className='header_home'>
                        <HomeRoundedIcon />
                    </Navbar.Brand>
                </Nav.Link>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className='header_left'>
                        <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
                        <Nav.Link as={NavLink} to='/Portfolio' className={pathName === '/Portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to='/Contact' className={pathName === '/Contact' ? 'header_link_active' : 'header_link'}>Contact</Nav.Link>
                    </Nav>

                    <div className='header_right'>
                        {Object.keys(resumeData.socials).map(key => (
                            <a href={resumeData.socials[key].link} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                        ))}
                        <a href='/Contact' style={{all: 'unset'}}>
                            <CustomButton text={'Contact me'} icon={<TelegramIcon />}/>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(Header);

