import React, {Fragment} from 'react';
import NavBar from "../../components/navbar/NavBar";
import InputAvita from "./InputAvita";
import AvitaListPage from "./AvitaListPage";

const AvitaPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputAvita/>
                <AvitaListPage/>

            </div>
        </Fragment>
    );
};

export default AvitaPage;
