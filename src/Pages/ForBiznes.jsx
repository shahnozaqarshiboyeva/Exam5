import React from 'react'
import Header from '../Components/Header/Header'
import './App.css'
import { TabContext, TabList } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import cards from './Images/Group 12.svg'
import {Footer} from '../Components/Footer'
const ForBiznes = () => {
  return (
    <div>
        <Header />
        <div style={{background: "#fff"}} className='home-navbar'>
            <p style={{fontSize: '19px'}}>Здравствуйте Зухриддин Темиров</p>
            <b style={{color: 'dodgerblue',fontSize: '19px',marginLeft:'630px'}}>Ваш счет: 2 3000 сум</b>
            <button className='btn-forBiznes'>Пополнить</button>
              </div>
              <TabContext>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="lab API tabs example">
              <Tab
                sx={{ marginLeft: "50px", color: 'blue' }}
                label="Объявления"
              />
              <Tab

                sx={{ marginLeft: "50px" }}
                label="Сообщения"
              />
              <Tab
                sx={{ marginLeft: "50px" }}
                label="Платежи и счёт"
              />
               <Tab
                sx={{ marginLeft: "50px" }}
                label="Настройки"
              />
              <Tab
                sx={{ marginLeft: "50px" }}
                label="Мой бизнес"
              />
            </TabList>
          </Box>
        </TabContext>
        <div>
          <img style={{marginLeft: '40px',width: '1300px'}} src={cards} alt="" />
        </div>
        <div>
          <img style={{marginLeft: '40px',width: '1300px'}} src={cards} alt="" />
        </div>
        <div>
          <img style={{marginLeft: '40px',width: '1300px'}} src={cards} alt="" />
        </div>
        <div>
          <img style={{marginLeft: '40px',width: '1300px'}} src={cards} alt="" />
        </div>
        <div>
          <img style={{marginLeft: '40px',width: '1300px'}} src={cards} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default ForBiznes