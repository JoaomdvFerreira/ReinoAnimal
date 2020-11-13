import React, { useState, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);
    const closeMobileMenu = () => setClick(false);
    const toggleHome = () => scroll.scrollToTop();

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer >
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon onClick={toggleHome} />
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <AiOutlineClose /> : <CgMenuRight />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/"
                                    onClick={toggleHome}
                                    spy="true"
                                    smooth="true"
                                    offset={-80}
                                    duration={1000}>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contacts">Contacts</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/signup'>
                                        <Button primary>SIGN-UP</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to="/signup">
                                            <Button primary>SIGN-UP</Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;