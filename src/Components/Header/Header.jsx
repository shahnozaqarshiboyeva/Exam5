import React from "react";
import "./index.css";
import LogoNav from "./Images/Group 3.svg";
import { Link, NavLink } from "react-router-dom";
import i18n from "../language/i18next";
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="home-navbar">
        <Link to='/'><img src={LogoNav} alt="" /></Link> 
        <div className="div-paragraph">
          <p className="navbar-home-paragraph">
          {t("headersLang")}
          </p>
        </div>
        <ul className="home-navbar">
            <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
              {t('obnova')}
            </li>
          <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
            <NavLink style={{textDecoration: 'none', color: 'dodgerblue'}} to='/Magazine'>{t('magazine')}</NavLink>
          </li>
          <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
           <Link style={{textDecoration: 'none', color: 'green'}} to='/ForBiznes'>{t('forBiznes')}</Link>
          </li>
          <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
            {t('help')}
          </li>
          <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
          <button className="btn-lang" onClick={() => {i18n.changeLanguage("ru")}}>Рус</button><button className="btn-lang" onClick={() => {i18n.changeLanguage("uz")}} >O'z</button>
          </li>
          <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
            {" "}
            <NavLink to="/Login"> Вход </NavLink>| Регестрация
          </li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <select className="select-nav-bottom">
          <option>Любая категория</option>
        </select>
        <input
          className="input-nav-bottom"
          type="text"
          placeholder="Что будем искать ?"
        />
        <select className="select-sec-nav-bottom">
          <option>Любая категория</option>
        </select>
        <button className="btn-bottom-nav">Найти</button>
        <Link to='/addProduct'><button className="btn-sec-bottom-nav"> + Добавить обьявления</button></Link>
      </div>
    </>
  );
};
export default Header;
