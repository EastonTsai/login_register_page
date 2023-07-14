import 'styles/global.scss';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from 'pages/LoginPage';
import StorePage from 'pages/StorePage';
import SettingPage from 'pages/SettingPage';
import ShoppingCartPage from 'pages/ShoppingCart';

const basename = process.env.BASE_URL

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/shopping_cart' element={<ShoppingCartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
