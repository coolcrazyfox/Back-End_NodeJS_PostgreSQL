
import '../../style/NavBarStyles.css';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
// @ts-ignore
import  logo from './main_logo.png'
import React, {useState} from "react";


const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    // const [color, setColor] = useState(false)
    // const changeColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    // window.addEventListener('scroll', changeColor)
    return (
        <div className={
            // color ? 'header header-bg' :
                'header'}>
            <Link to='/'>
                <div className={'logo'}>
                    <img src={logo} alt="#"/>

                </div>
                {/*<h1 className={'title_link'}>web site by A. Malets</h1>*/}
            </Link>
            <ul className={
                // click ? 'nav-menu active' :
                    'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/manual'>Manual</Link>
                </li>
                <li>
                    <Link to='/analog'>Analog</Link>
                </li>
                <li>
                    <Link to='/allsite'>All</Link>
                </li>
                <li>
                    <Link to='/store'>Store</Link>
                </li>
                <li>
                    <Link to='/bamper'>Bamper</Link>
                </li>
                <li>
                    <Link to='/ebay'>Ebay</Link>
                </li>
                <li>
                    <Link to='/avita'>Avita</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/signup'>Sign In</Link>
                </li>
                <li>
                    <Link to='/login'>Log In</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {
                    // click ? (<FaTimes size={20} style={{color: '#fff'}}/>) :
                        (<FaBars size={20} style={{color: '#fff'}}/>)}

            </div>

        </div>
    )
}
export default NavBar
