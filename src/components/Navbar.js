import {React , useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Button} from './Button.js'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () =>{ setClick(!click) ; }
    const closeMobileMenu = () =>{ setClick(false) ;}  
    const showButton = () => {
        if(window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    };

    useEffect( ()=>{ showButton();},[] );
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;