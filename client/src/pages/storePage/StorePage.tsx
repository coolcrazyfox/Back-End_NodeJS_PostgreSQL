import React, {Fragment} from 'react';
import NavBar from "../../components/navbar/NavBar";
import InputStore from "./InputStore";
import StoreListPage from "./StoreListPage";

const StorePage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputStore/>
                <StoreListPage/>
            </div>
        </Fragment>
    );
};

export default StorePage;
