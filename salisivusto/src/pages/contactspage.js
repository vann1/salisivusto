import React, { useState, useRef, useEffect } from 'react';
const Contactspage = () => {
  const [showContacts, setShowContacts] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showContacts && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContacts]);

  const handleButtonClick = () => {
    setShowContacts((prevShowContacts) => !prevShowContacts);
  };
  const cardStyles = {
    backgroundColor: '#464646',
    color: '#FFC656',
  }

    return ( 
        <div class="container ok mb-1" >
        <h1 class="mt-4 mb-4">Yhteystiedot</h1>
    
        <div class="card contact-card" style={cardStyles}>
          <div class="card-body">
            <h5 class="card-title">Eero Erkintö</h5>
            <p class="card-text">Sähköposti: eero.erkinto@example.com</p>
            <p class="card-text">Puhelin: +358 123 456 789</p>
            <p class="card-text">Instagram: @eeroerkinto_pt</p>
          </div>
        </div>
    
        <div class="card contact-card" style={cardStyles}>
          <div class="card-body">
            <h5 class="card-title">Sofia Salovaara</h5>
            <p class="card-text">Sähköposti: sofia.salovaara@example.com</p>
            <p class="card-text">Puhelin: +358 987 654 321</p>
            <p class="card-text">Facebook: Sofia Salovaara - Personal Trainer</p>
          </div>
        </div>
    
    
        <div class="card contact-card" style={cardStyles}>
          <div class="card-body">
            <h5 class="card-title">Mikko Mäntylä</h5>
            <p class="card-text">Sähköposti: mikko.mantyla@example.com</p>
            <p class="card-text">Puhelin: +358 555 123 456</p>
            <p class="card-text">Twitter: @mikkomantyla_pt</p>
          </div>
        </div>
    
        <div class="card contact-card" style={cardStyles}>
          <div class="card-body">
            <h5 class="card-title">Laura Laitinen</h5>
            <p class="card-text">Sähköposti: laura.laitinen@example.com</p>
            <p class="card-text">Puhelin: +358 456 789 012</p>
            <p class="card-text">LinkedIn: Laura Laitinen, Personal Trainer</p>
          </div>
        </div>
    
        <div class="card contact-card" style={cardStyles}>
          <div class="card-body">
            <h5 class="card-title">Yleinen yhteys</h5>
            <p class="card-text">Sähköposti: kuntosali&hyvinvointi1199@gmail.com</p>
            <p class="card-text">Puh: +358 553445 555</p>
          </div>
        </div>
        <div className="row">
        <button style={cardStyles} className="btn col-md-2 offset-md-5 mt-2 bold-text mb-2" onClick={handleButtonClick}>
          Jätä yhteystietosi
        </button>
      </div>
      {showContacts && (
        <div ref={formRef} className="row contacts mt-3">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Etunimi</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row mt-4">
                <label className="col-sm-2 col-form-label">Sukunimi</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row mt-4">
                <label className="col-sm-2 col-form-label">Puhelinnumero</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row mt-4">
                <label className="col-sm-2 col-form-label">Sotu</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row mt-4">
                <div className="col-sm-10 offset-sm-1">
                  <button style={cardStyles} className="col-sm-5 btn mb-2" type="submit">
                    Lähetä
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    )
}

export {Contactspage}