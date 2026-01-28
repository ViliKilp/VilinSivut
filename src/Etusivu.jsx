import React, { useState } from 'react';
import './Etusivu.css';
import videoSrc from './vilijami.mp4';
import profiilikuva from './vilijaamos-05.jpg'


const Etusivu = () => {
  const [result, setResult] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <nav className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-logo">VK</div>
          <div className="top-bar-links">
            <button className="top-bar-link" onClick={() => scrollToSection('about-section')}>Kuka olen</button>
            <button className="top-bar-link" onClick={() => scrollToSection('cv-section')}>Ansioluettelo</button>
            <button className="top-bar-link" onClick={() => scrollToSection('contact-section')}>Ota yhteyttä</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Virtuaalinen ansioluetteloni</h1>

        </div>

        {/* Video Background */}
        <div className="video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Kuka Olen Section */}
      <section id="about-section" className="about-section">
        <div className="section-content">
          <h2 className="section-title">Kuka olen?</h2>
          
          <div className="about-container">
            {/* Profile Picture */}
            <div className="about-image-wrapper">

              {/* Uncomment and add your image later */}
              { <img src={profiilikuva} alt="Profile" className="about-image" /> }
            </div>

            {/* About Text */}
            <div className="about-text-wrapper">
              <div className="about-text-box">
                <p className="about-text">
                  Olen tietotekniikan insinööriopiskelija Savonia-ammattikorkeakoulussa Kuopiossa.
                  Minulla on vahva kiinnostus tietotekniikkaan, moderneihin teknologioihin ja tekoälyn hyödyntämiseen.
                  Kehitän osaamistani aktiivisesti omien projektien kautta ja pidän käytännönläheisestä ongelmanratkaisusta.
                  Etsin mahdollisuuksia soveltaa osaamistani työelämässä ja kasvaa alan ammattilaisena.
                </p>
                <p className="about-text">
                  Vapaa-ajallani työstän omia projektejani, elän aktiivista elämäntapaa ja nautin käytännönläheisestä tekemisestä.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv-section" className="cv-section">
        <div className="section-content">
          <h2 className="section-title">Ansioluettelo ja osaaminen</h2>
          
          <div className="cv-container">
            {/* Työkokemus - Left Side */}
            <div className="cv-column">
              <h3 className="cv-column-title">Työkokemus</h3>
              <ul className="cv-list">
                <li className="cv-list-item">
                  <strong>Pok Group Oy</strong><br/>
                  Sähkökeskusasentaja<br/>
                  <span className="cv-date">2020-2025</span>
                </li>
                <li className="cv-list-item">
                  <strong>Värväämö Oy</strong><br/>
                  Rakennusapumies<br/>
                  <span className="cv-date">2019-2020</span>
                </li>
              </ul>
            </div>

            {/* Koulutus - Right Side */}
            <div className="cv-column">
              <h3 className="cv-column-title">Koulutus</h3>
              <ul className="cv-list">
                <li className="cv-list-item">
                  <strong>Tietotekniikan insinööri </strong><br/>
                  Savonia Ammattikorkeakoulu<br/>
                  <span className="cv-date">2024-2028 (arvioitu valmistuminen)</span>
                </li>
                <li className="cv-list-item">
                  <strong>Sähkö- ja automaatioalan ammattitutkinto</strong><br/>
                  Savon Ammattiopisto<br/>
                  <span className="cv-date">2015-2018</span>
                </li>
              </ul>
            </div>

            {/* Osaaminen */}
            <div className="cv-column">
              <h3 className="cv-column-title">Osaaminen</h3>
              <ul className="cv-list">
                <li className="cv-list-item">
                  <strong>Ohjelmointi</strong><br/>
                  React, C#, Javascript, HTML, CSS
                </li>
                <li className="cv-list-item">
                  <strong>Tietotekniikka</strong><br/>
                  Office 365, yleinen osaaminen tietokoneista ja oheislaitteista
                </li>
                <li className="cv-list-item">
                  <strong>Muut taidot</strong><br/>
                  Sähkö- ja rakennustyöt
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="section-content">
          <h2 className="section-title">Ota yhteyttä</h2>
          <p className="section-description"></p>
          
          <div className="contact-container">
            {/* My Contact Information */}
            <div className="my-contact-info">
              <h3 className="contact-info-title">Yhteystiedot</h3>
              <div className="contact-info-item">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div className="contact-info-text">
                  <span className="contact-label">Sähköposti</span>
                  <span className="contact-value">vili.kilpelainen99@gmail.com</span>
                </div>
              </div>
              <div className="contact-info-item">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <div className="contact-info-text">
                  <span className="contact-label">Puhelinnumero</span>
                  <span className="contact-value">0449872649</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h3 className="contact-form-title">Lähetä minulle yhteydenotto</h3>
              <form className="contact-form" onSubmit={async (event) => {
                event.preventDefault();
                setResult("Lähetetään...");
                
                const formData = new FormData(event.target);
                formData.append("access_key", "6d91c0f6-612a-44eb-9b56-571d08be6bd4");

                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();
                
                if (data.success) {
                  setResult("Viesti lähetetty onnistuneesti!");
                  event.target.reset();
                } else {
                  setResult("Virhe viestin lähetyksessä. Yritä uudelleen.");
                }
              }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nimi</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Sähköposti</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Puhelinnumero</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Viesti</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit-button">
                  Lähetä
                </button>
                
                {result && <p className="form-result">{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Etusivu;