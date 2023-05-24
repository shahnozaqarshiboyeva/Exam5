import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import "./App.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Card } from "@mui/material";
import { Footer } from "../Components/Footer";
import axios from "axios";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BITMAPP from './Images/Group 6.png'
import BITMAPPP from './Images/Group 6 (2).png'
const Magazine = () => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(16);
  const ShowMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => setData(res.data));
  }, []);
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <div className="home-navbar">
        <input
          className="magazine-inp"
          type="text"
          placeholder="Введите название обявления или  выберите из списка"
        />
      </div>
      <Box sx={{ width: 1000, marginLeft: "20px" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="qwer">
        {data &&
          data.map((d, i) => (
            <Box>
              <Card style={{borderRadius: '150px 5px 5px 5px', border: '5px solid #993366'}} key={i} className="cards">
                <div className="card-main-home">
                  <img className="Cards-more" src={d.image} alt="" />
                  <b style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                    {d.title}
                  </b>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "17px",
                      margin: "10px",
                    }}
                  >
                    {d.category}
                  </p>
                  <b style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                    {d.price}Сум
                  </b>
                </div>
              </Card>
            </Box>
          ))}
      </div>
        <div className="qwer">
        {data &&
          data.slice(0, visible).map((d, i) => (
            <Box>
              <Card key={i} className="cards">
                <div className="card-main-home">
                  <img className="Cards-more" src={d.image} alt="" />
                  <b style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                    {d.title.slice(0,40)}
                  </b>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "17px",
                      margin: "10px",
                    }}
                  >
                    {d.category}
                  </p>
                  <b style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                    {d.price}Сум
                  </b>
                </div>
              </Card>
            </Box>
          ))}
      </div>
      <button style={{marginLeft: '610px',marginTop: '30px', width: '200px', height: '40px', border: 'none'}} onClick={ShowMoreItems} className="ShowMore-btn">
        Покозать еще
      </button>
      <Box sx={{ width: "1400px", marginTop: '30px' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div style={{display: 'flex', marginTop: '40px', justifyContent: 'space-evenly'}}>
        <div className="footer-last-home-cards">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={BITMAPP}
                alt=""
              />
              <b style={{ marginTop: "30px" }}>
                Светодиодная лампа с фронтальным стеклом 10шт
              </b>
              <p style={{ marginTop: "10px" }}>Вчера 22:55</p>
              <b style={{ paddingTop: "30px" }}>39 000 000 сум</b>
            </div>
            <div className="footer-last-home-cards">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={BITMAPPP}
                alt=""
              />
              <b style={{ marginTop: "30px" }}>
                Светодиодная лампа с фронтальным стеклом 10шт
              </b>
              <p style={{ marginTop: "10px" }}>Вчера 22:55</p>
              <b style={{ paddingTop: "30px" }}>39 000 000 сум</b>
            </div>
            <div className="footer-last-home-cards">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={BITMAPP}
                alt=""
              />
              <b style={{ marginTop: "30px" }}>
                Светодиодная лампа с фронтальным стеклом 10шт
              </b>
              <p style={{ marginTop: "10px" }}>Вчера 22:55</p>
              <b style={{ paddingTop: "30px" }}>39 000 000 сум</b>
            </div>
            </div>
        <div style={{marginTop: '40px'}}>
        <Footer/>
        </div>
    </>
  );
};

export default Magazine;
