import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Subscription from './Pages/Subscription.jsx';
import Login from './Pages/Login.jsx';
import Contact from './Pages/Contact.jsx';
import Error from './Pages/Error.jsx';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;