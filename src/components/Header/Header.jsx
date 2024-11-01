import React from "react";
import { useTranslation } from "react-i18next";
import './Header.css';
import '../../i18n';

import { Link } from 'react-router-dom';



function Header() {

  const {t, i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header>
      <a href="/" className="brand">ISMIR ETIKET</a>
      <div className="navigation">
        <Link to="/about">{t('nav-about')}</Link>
        <Link to="/service">{t('nav-service')}</Link>
        <Link to="/portfolio">{t('nav-portfolio')}</Link>
        
        <select onChange={(e) => changeLanguage(e.target.value)} className="change-lang btn-nav">
          <option value="en" >EN</option>
          <option value="ru">РУ</option>
        </select>
        <a href="#contact" className="btn-nav">{t('nav-btn')}</a>
      </div>
    </header>
  );
};


window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("nav-hidden", window.scrollY > 0);
  });
});   


export default Header;

