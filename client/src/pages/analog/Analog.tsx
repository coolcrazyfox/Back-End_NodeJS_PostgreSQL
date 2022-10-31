import React, {Fragment} from 'react';
import NavBar from "../../components/navbar/NavBar";
import InputAnalog from "./InputAnalog";
import AnalogListPage from "./AnalogListPage";

const Analog = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputAnalog/>
                <AnalogListPage/>

            </div>
        </Fragment>
    );
};

export default Analog;
