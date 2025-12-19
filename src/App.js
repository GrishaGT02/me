import React from 'react';
import { ModalProvider } from './context/ModalContext';
import Header from './Components/Header/Header';
import Googing from './Components/Googing/Googing';
import Usluga from './Components/Usluga/Usluga';
import Skils from './Components/Skils/Skils';
import Zayavka from './Components/Zayavka/Zayavka';
import Oprosnik from './Components/Oprosnik/Oprosnik';
import Zapis from './Components/Zapis/Zapis';
import Fich1 from './Components/Fich1/Fich1';
import Otzov from './Components/Otzov/Otzov';
import Konsultacia from './Components/Konsultacia/Konsultacia';
import Kvis from './Components/Kvis/Kvis';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Carousel from './Components/Carousel/Carousel';
import './App.css';

function App() {
  return (
    <ModalProvider>
    <div className="App">
        <Header />
        <Googing />
        <Modal />
        <Usluga />
        <Skils />
        <Zayavka />
        <Oprosnik />
        <Carousel />
        <Zapis />
        <Fich1 />
        <Otzov />
        <Konsultacia />
        <Kvis />
        <Footer />
    </div>
    </ModalProvider>
  );
}

export default App;
