import 'styles/global.scss';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

const basename = process.env.BASE_URL

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;