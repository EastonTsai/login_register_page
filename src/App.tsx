import 'styles/global.scss';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SettingPage from 'pages/SettingPage';
import ShoppingCartPage from 'pages/ShoppingCart';
import RegisterPage from 'pages/RegisterPage';
import MyStorePage from 'pages/MyStorePage';

const basename = process.env.BASE_URL

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/shopping_cart' element={<ShoppingCartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/my_store' element={<MyStorePage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
