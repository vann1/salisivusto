import {Motivoitunut, Ruokavalio, Terveellinen} from '../components/tabs'; 
import React, { useState } from 'react';
const Nutritionpage = () => {
    const [activeTab, setActiveTab] = useState(null); // Alustetaan aktiivinen välilehti

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div className='container row mx-auto offset-md-3'>
            <h1 className='mt-5'>Ruokavalion parantaminen ja sen noudattaminen</h1>
            <p>Terveellinen ruokavalio on keskeinen osa hyvinvointia ja terveyttä. Se tarjoaa elimistölle tarvittavat
ravinteet ja energian ylläpitääkseen optimaalista toimintaa. Ruokavalion parantaminen ja sen
noudattaminen voi olla avainasemassa parempaan terveyteen, energisempään oloon ja parempaan
suorituskykyyn.</p>
          <ul className="nav nav-tabs mb-5">
            <li className="nav-item mx-auto">
              <a
                className={`nav-link nav-link1 ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab1')}
                aria-current="page"
                href="#"
              >
                Terveellisen ruokavalion peruspilarit
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a
                className={`nav-link nav-link1 ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab2')}
                href="#"
              >
                Ruokavalion noudattaminen käytännössä
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a
                className={`nav-link nav-link1 ${activeTab === 'tab3' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab3')}
                href="#"
              >
                Pysy motivoituneena ja joustavana
              </a>
            </li>
          </ul>
    
          {/* Näytä komponentti aktiivisen välilehden perusteella */}
          {activeTab === 'tab1' && <Terveellinen />}
          {activeTab === 'tab2' && <Ruokavalio />}
          {activeTab === 'tab3' && <Motivoitunut />}
        
        </div>
      )
}

export {Nutritionpage}