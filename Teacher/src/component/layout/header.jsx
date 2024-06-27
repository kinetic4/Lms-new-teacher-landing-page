import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link, NavLink } from "react-router-dom";


const phoneNumber = "+800-123-4567 6587";
const address = "Beverley, New York 224 USA";


let socialList = [
    {
        iconName: 'icofont-facebook-messenger',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-skype',
        siteLink: '#',
    },
    {
        iconName: 'icofont-rss-feed',
        siteLink: '#'
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img src="assets/images/logo/02.png" style={{height: '100px'}} alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li>
                                        <NavLink to='/' style={{ position: 'relative', marginRight: '-11px' }}>Home</NavLink>
                                    </li>
                                    <li className="">
                                        <a href="/course" role="button">Course</a>
                                        
                                    </li>
                                    <li className="">
                                        <a href="/about" aria-expanded="false">About Us</a>
                                        
                                    </li>
                                    <li><NavLink to="/contact" style={{ position: 'relative', marginLeft: '-6px' }}>Contact</NavLink></li>
                                    <li className="menu-item-has-children">
                                    <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Become Partners</a>
                                    <ul className="lab-ul dropdown-menu"  >
                                        <li><NavLink to='/BecomeFranchise'>Become Franchise</NavLink></li>
                                        <li><NavLink to='/BecomeInstructor'>Become Instructor</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Our Products</a>
                                    <ul className="lab-ul dropdown-menu"  >
                                        <li><NavLink to='/myEbook'>Ebooks</NavLink></li>
                                        <li><NavLink to='/myEbook'>AudioBook</NavLink></li>
                                    </ul>
                                </li>
                                {/* initally this Dashboard li woluld be hidden after loggin in this dashboard should be visible 
                                <li><NavLink to='Dashboard' style={{ position: 'relative', marginLeft: '-6px' }}>Dashboard</NavLink></li>
                               */}
                                </ul>
                                
                            </div>

                            <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>LOG OUT</span> </Link>

                            


                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;