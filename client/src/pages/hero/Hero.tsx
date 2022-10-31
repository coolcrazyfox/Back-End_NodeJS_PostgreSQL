
// @ts-ignore
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import NavBar from "../../components/navbar/NavBar";
import Main from "../mainPage/Main";
import React, { Fragment } from 'react';


const Hero = () => {
    return (

        <Fragment>
            <NavBar/>
            <div className="main_container">
                <Main/>

            </div>
        </Fragment>
    );
};

export default Hero;
