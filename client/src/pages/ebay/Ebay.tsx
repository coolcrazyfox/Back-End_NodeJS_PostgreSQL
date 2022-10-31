import React, {Fragment} from 'react';
import InputEbay from "./InputEbay";
import EbayListPage from "./EbayListPage";
import NavBar from "../../components/navbar/NavBar";

const Ebay = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputEbay/>
                <EbayListPage/>
            </div>
        </Fragment>

    );
};

export default Ebay;
