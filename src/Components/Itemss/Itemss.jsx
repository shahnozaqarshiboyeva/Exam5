import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer";
import Header from "../Header/Header";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./style.css";
import { Table } from "antd";
import BITMAPP from "./images/Bitmap (4).png";
import BITMAPPP from "./images/Bitmap (5).png";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
export function Itemss() {
  const { productId } = useParams();
  const [foundUser, setFoundUser] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((json) => setFoundUser(json.data));
  }, []);

  console.log(foundUser);
  const columns = [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Количество комнат:",
          className: "column-money",
          dataIndex: "money",
          align: "right",
        },
        {
          title: "Address",
          dataIndex: "address",
        },
      ];
      const data = [
        {
          key: "1",
          name: "John Brown",
          money: "￥300,000.00",
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          money: "￥1,256,000.00",
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          money: "￥120,000.00",
          address: "Sydney No. 1 Lake Park",
        },
      ];
  return (
    <>
      <Header />
      <div>
        {foundUser && (
         <>
          <Breadcrumbs sx={{ marginTop: "40px" }} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Breadcrumbs
            </Link>
          </Breadcrumbs>
          <div
            style={{ display: "block", background: "#fff" }}
            className="home-navbar"
          >
            <h1 style={{ fontSize: "43px" }}>
              Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5
            </h1>
            <div role="presentation"></div>
            <div className="singlePage">
              <div className="twice-cards">
                <img style={{ width: "500px" }} src={foundUser.image} alt="" />
              </div>
              <div className="twice-cards">
                <h1>{foundUser.price}</h1>
                <Link>Ташкент, Ташкентская область, Юнусабадский район </Link>
                <button className="btn-single">
                  99891 166 **** Покозать польностю
                </button>
                <button style={{ marginTop: "80px" }} className="btn-single">
                  99891 166 **** Покозать польностю
                </button>
                <Table
                  style={{ marginTop: "120px" }}
                  columns={columns}
                  dataSource={data}
                  bordered
                  footer={() => "Footer"}
                />
              </div>
              <div
                style={{
                  width: "500px",
                  position: "absolute",
                  marginTop: "600px",
                  marginLeft: "650px",
                }}
              >
                <p style={{ position: "absolute" }}>
                  Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме.
                  Новостройка Голден Хаус жылой комплекс Етти Чинор Очень
                  качественный и дорогой ремонт. Комнаты полнастю разделные болшые.
                  2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный
                  обсалютно новый. Ремонт делолся из очень дорогова материяла.
                  Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой
                  комнате. Дорогие люстры вовсех комнатах решодки на окнах.
                  Теретория охранается. Всё предусмотренно для детей деские площядки
                  качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый
                  золотой этаж и паследний в этом коплексе. Торопитесь.{" "}
                </p>
              </div>
            </div>
            <Box sx={{ width: "1400px", typography: "body1", marginTop: '140px' }}>
              <TabContext>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      sx={{ marginLeft: "200px" }}
                      label="Просмотренные"
                      value="1"
                    />
                    <Tab
                      sx={{ marginLeft: "250px" }}
                      label="Выбор редакции"
                      value="2"
                    />
                    <Tab
                      sx={{ marginLeft: "250px" }}
                      label="Сниженные цены"
                      value="3"
                    />
                  </TabList>
                </Box>
                <TabPanel sx={{ display: "flex" }} value="1">
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
                </TabPanel>
                <TabPanel value="2">NOT FOUND</TabPanel>
                <TabPanel value="3">NOT FOUND</TabPanel>
              </TabContext>
            </Box>
            <div style={{ marginTop: "130px" }}>
              <Footer />
            </div>
          </div>
         </>
        )}
      </div>
    </>
  );
};