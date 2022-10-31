import {React, useState} from 'react';

import styles from './NavBar.module.css';

import Logo from '../../../src/components/navbar/main_logo.png';
import {
    AiOutlineUser,
    AiOutlineSearch,
    AiOutlineMenu,
    AiOutlineClose,
} from 'react-icons/ai';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={styles.navbar}>
            <img src={Logo} alt='Logo'/>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li>
                        <Link to={'/manual'}> MANUAL</Link>
                    </li>
                    <li>
                        <Link to={'/analog'}>ANALOG</Link>
                    </li>
                    <li>
                        <Link to={'/allsite'}>ALL DEVICE</Link>
                    </li>
                    <li>
                        <Link to={'/avita'}> AVITA</Link>
                    </li>
                    <li>
                        <Link to={'/bamper'}>BAMPER</Link>
                    </li>
                    <li>
                        <Link to={'/ebay'}>EBAY</Link>
                    </li>
                    <li>
                        <Link to={'/store'}> STORE</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>CONTACT</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}> SIGN UP</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>LOG IN</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to={'/search'}>*/}
                    {/*        <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <AiOutlineUser size={25} style={{marginTop: '6px'}}/>*/}
                    {/*</li>*/}
                </ul>
            </nav>
            {/*<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>*/}
            {/*    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}*/}

            {/*</div>*/}
        </header>
    );
};

export default NavBar;
