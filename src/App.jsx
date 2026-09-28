import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div>
          <Outlet />
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
