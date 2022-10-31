import React, {Fragment} from 'react';
import NavBar from "../../components/navbar/NavBar";
import InputBamper from "./InputBamper";
import BamperListPage from "./BamperListPage";

const BamperPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputBamper/>
                <BamperListPage/>
            </div>
        </Fragment>
    );
};

export default BamperPage;
