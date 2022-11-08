
import NavBar from "../../components/navbar/NavBar";
import InputAllSite from "./InputAllSite";
import AllSiteListPage from "./AllSiteListPage";
import React,{ Fragment } from "react";
import CurrencyConverter from "../../components/converter/CurrencyConverter";

const AllSiteTabPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                {/*<CurrencyConverter/>*/}
                <InputAllSite/>
                <AllSiteListPage/>

            </div>
        </Fragment>
    );
};

export default AllSiteTabPage;
