import { useState } from "react";
import { Link} from "react-router-dom";
import i18n from "../language/i18next";
import { useTranslation } from "react-i18next";
import { Box, Card } from "@mui/material";
import MainMiniImg from "./images/Airplane (1).png";
import MainMiniStore from "./images/Briefcase (1).png";
import MainMiniElectro from "./images/Briefcase (2).png";
import MainMiniWork from "./images/Challenge (1).png";
import MainMiniBuild from "./images/Gaming.svg";
import MainMiniHobby from "./images/Gifts.png";
import MainMiniBiznes from "./images/Man.svg";
import './index.css'
export function Lists({ product }) {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [visible, setVisible] = useState(16);
  const ShowMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <>
      <div className="main-mini-divs">
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniImg} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("avto")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniStore} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("ned")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniElectro} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("electro")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniWork} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("otherThings")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniImg} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("home")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniBiznes} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t("game")}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniBuild} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t('hobby')}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniHobby} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {t('dom')}
          </p>
        </div>
        <div className="mini-div">
          <img className="main-mini-img" src={MainMiniBiznes} alt="" />
          <p style={{ marginLeft: "1px", fontFamily: "sans-serif" }}>
            {" "}
           {t('uslug')}
          </p>
        </div>
      </div>
      <div className="qwer">
        {product &&
          product.slice(0, visible).map((product, index) => (
            <Link style={{textDecoration: 'none'}} key={index} to={`/product/${product.id}`}>
              <Box>
                <Card style={{borderRadius: '150px 5px 5px 5px', border: '5px solid #993366'}} className="cards">
                  <div className="card-main-home">
                    <img className="Cards-more" src={product.image} alt="" />
                    <b style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                      { localStorage.getItem("lang") === "ru" ? product.title : product.title}
                    </b>
                    <p
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "17px",
                        margin: "10px",
                      }}
                    >
                      {product.category}
                    </p>
                    <b style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                      {product.price}Сум
                    </b>
                  </div>
                </Card>
              </Box>
            </Link>
          ))}
      </div>
      <button onClick={ShowMoreItems} className="ShowMore-btn">
        Покозать еще
      </button>
    </>
  );
}
