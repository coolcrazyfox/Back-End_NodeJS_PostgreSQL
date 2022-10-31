import React, {Fragment} from 'react';
import NavBar from "../../components/navbar/NavBar";
import InputManual from "./InputManual";
import ManualListPage from "./ManualListPage";

const Manual = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputManual/>
                <ManualListPage/>

            </div>
        </Fragment>
    );
};

export default Manual;
