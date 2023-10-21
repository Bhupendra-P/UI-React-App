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

