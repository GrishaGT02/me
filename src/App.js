import React from 'react';
import { ModalProvider } from './context/ModalContext';
import Header from './Components/Header/Header';
import Googing from './Components/Googing/Googing';
import Usluga from './Components/Usluga/Usluga';
import Skils from './Components/Skils/Skils';
import TreatmentWarning from './Components/TreatmentWarning/TreatmentWarning';
// import Zayavka from './Components/Zayavka/Zayavka';
// import Oprosnik from './Components/Oprosnik/Oprosnik';
// import Zapis from './Components/Zapis/Zapis';
// import Fich1 from './Components/Fich1/Fich1';
// import Otzov from './Components/Otzov/Otzov';
import Reviews from './Components/Reviews/Reviews';
import GuaranteeFAQ from './Components/GuaranteeFAQ/GuaranteeFAQ';
import Konsultacia from './Components/Konsultacia/Konsultacia';
import Contact from './Components/Contact/Contact';
import Stoimost from './Components/Stoimost/Stoimost';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Smiles from './Components/Smiles/Smiles';
import MedicatedSleep from './Components/MedicatedSleep/MedicatedSleep';
import Guarantees from './Components/Guarantees/Guarantees';
import PersonalGuarantee from './Components/PersonalGuarantee/PersonalGuarantee';
import Installment from './Components/Installment/Installment';
// import FixedPrice from './Components/FixedPrice/FixedPrice';
import Kvis from './Components/Kvis/Kvis';
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/FooterBottom/FooterBottom';
import Modal from './Components/Modal/Modal';
import Carousel from './Components/Carousel/Carousel';
import ProfileCards from './Components/ProfileCards/ProfileCards';
import Location from './Components/Location/Location';
import './App.css';

function App() {
  return (
    <ModalProvider>
    <div className="App">
        <Header />
        <Carousel />
        <Kvis />
        <Googing />
        <Skils />
        <TreatmentWarning />
        <Konsultacia />
        <Usluga />
        <ProfileCards />
        <Smiles />
        <WhyChooseUs />
        <Stoimost />
        <MedicatedSleep />
        <PersonalGuarantee />
        <Guarantees />
        <Installment />
        <Reviews />
        <GuaranteeFAQ />
        <Location />
        <Kvis />
        <Contact />
        {/* <FixedPrice /> */}
        <Modal />
        {/*<Zayavka />
        <Oprosnik />
        <Zapis />
        <Fich1 />
        <Otzov />*/}
        <Footer />
        <FooterBottom />
    </div>
    </ModalProvider>
  );
}

export default App;
