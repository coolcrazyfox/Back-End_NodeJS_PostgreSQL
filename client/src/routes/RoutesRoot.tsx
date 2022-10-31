import  React from 'react'
import {Route, Routes} from 'react-router-dom'
import Error404 from '../pages/errorPage/Error404';
import Hero from '../pages/hero/Hero';
// import LoginPage from "../pages/login/LoginPage";
// import SignUpPage from "../pages/signup/SignUpPage";
import AllSiteTabPage from "../pages/allSite/AllSiteTabPage";
// import Analog from "../pages/analog/Analog";
// import AvitaPage from "../pages/avita/AvitaPage";
// import BamperPage from "../pages/bamper/BamperPage";
// import Manual from "../pages/manual/Manual";
// import StorePage from "../pages/storePage/StorePage";
// import ContactPage from "../pages/contact/ContactPage";
// import Ebay from "../pages/ebay/Ebay";


export const PATH = {

    ALLSITE: '/allsite',
    // ANALOG : '/analog',
    // AVITA: '/avita',
    // BAMPER : '/bamper',
    // CONTACT: '/contact',
    // EBAY: '/ebay',
    // HERO: '/hero',
    // LOGIN: '/login',
    // MANUAL : '/manual',
    // SIGNUP: '/signup',
    // STORE: '/store',
    // HOME: '/home'

    // REGISTRATION: '/register',
    // NEW_PASSWORD: '/set-new-password',
    // FORGOT: '/forgot',
    // PROFILE: '/device/ebay',
    // EDIT_PROFILE: '/edit-profile',
    // PACKS: '/packs',
    // CARDS: '/cards',
    // LEARN: '/learn'
}

export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                {/*<Route path={PATH.HERO} element={<Hero/>}/>*/}
                <Route path={PATH.ALLSITE} element={<AllSiteTabPage/>}/>
                {/*<Route path={PATH.ANALOG} element={<Analog/>}/>*/}
                {/*<Route path={PATH.AVITA} element={<AvitaPage/>}/>*/}
                {/*<Route path={PATH.BAMPER} element={<BamperPage/>}/>*/}
                {/*<Route path={PATH.CONTACT} element={<ContactPage/>}/>*/}

                {/*<Route path={PATH.EBAY} element={<Ebay/>}/>*/}

                {/*<Route path={PATH.LOGIN} element={<LoginPage/>}/>*/}
                {/*<Route path={PATH.MANUAL} element={<Manual/>}/>*/}
                {/*<Route path={PATH.SIGNUP} element={<SignUpPage/>}/>*/}
                {/*<Route path={PATH.STORE} element={<StorePage/>}/>*/}
                <Route path={'*'} element={<Error404/>}/>
                {/*<Route path={PATH.REGISTRATION} element={<Registration/>}/>*/}
                {/*<Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>*/}
                {/*<Route path={PATH.FORGOT} element={<Forgot/>}/>*/}

                {/*<Route path={PATH.EDIT_PROFILE} element={<EditProfile/>}/>*/}
                {/*<Route path={PATH.PACKS} element={<PackList/>}/>*/}
                {/*<Route path={PATH.CARDS + '/:packId'} element={<CardsList/>}/>*/}
                {/*<Route path={PATH.LEARN + '/:packId/:packName/:cardsTotalCount'} element={<Learn/>} />*/}

            </Routes>
        </div>
    );
};
