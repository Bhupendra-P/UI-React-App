// REACT DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
// import reportWebVitals from './reportWebVitals';

//SHOPIFY DEPENDENCIES
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider, Frame } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import UserGuide from './userguide';
import AddOffer from './addoffer';
import OfferSetup from './offersetup';
import EditFBT from './editfbt';
import CartAddOn from './cartaddon';
import Skeletons from './skeletons';
import SkOffers from './sk_offfers';
import SkAddOffers from './sk_addoffers';
import SkOfferSetup from './sk_offersetup';
import SkHelp from './sk_help';
import SkEditFBT from './sk_editfbt';
import SkCartAddOn from './sk_cartaddon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider i18n={en}>
      <Frame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/userguide" element={<UserGuide />}></Route>
            <Route path="/addoffer" element={<AddOffer />}></Route>
            <Route path="/offersetup" element={<OfferSetup />}></Route>
            <Route path="/editfbt" element={<EditFBT />}></Route>
            <Route path="/cartaddon" element={<CartAddOn />}></Route>
            <Route path='/skeletons' element={<Skeletons />}></Route>
            <Route path='/sk_offers' element={<SkOffers />}></Route>
            <Route path='/sk_addoffers' element={<SkAddOffers />}></Route>
            <Route path='/sk_offersetup' element={<SkOfferSetup />}></Route>
            <Route path='/sk_help' element={<SkHelp />}></Route>
            <Route path='/sk_editfbt' element={<SkEditFBT />}></Route>
            <Route path='/sk_cartaddon' element={<SkCartAddOn />}></Route>
          </Routes>
        </BrowserRouter>
      </Frame>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

