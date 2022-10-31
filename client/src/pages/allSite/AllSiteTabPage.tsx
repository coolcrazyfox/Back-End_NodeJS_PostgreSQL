
import NavBar from "../../components/navbar/NavBar";
import InputAllSite from "./InputAllSite";
import AllSiteListPage from "./AllSiteListPage";
import React,{ Fragment } from "react";

const AllSiteTabPage = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">
                <InputAllSite/>
                <AllSiteListPage/>

            </div>
        </Fragment>
    );
};

export default AllSiteTabPage;
