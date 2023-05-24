// import React from "react";
// import "./index.css";
// import LogoNav from "./Images/Group 3.svg";
// import { Link, NavLink } from "react-router-dom";
// import i18n from "../language/i18next";
// import { useTranslation } from "react-i18next";
// const Header = () => {
//   const {t} = useTranslation();
//   return (
//     <>
//       <div className="home-navbar">
//         <Link to='/'><img src={LogoNav} alt="" /></Link> 
//         <div className="div-paragraph">
//           <p className="navbar-home-paragraph">
//           {t("headersLang")}
//           </p>
//         </div>
//         <ul className="home-navbar">
//             <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//               {t('obnova')}
//             </li>
//           <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//             <NavLink style={{textDecoration: 'none', color: 'dodgerblue'}} to='/Magazine'>{t('magazine')}</NavLink>
//           </li>
//           <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//            <Link style={{textDecoration: 'none', color: 'green'}} to='/ForBiznes'>{t('forBiznes')}</Link>
//           </li>
//           <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//             {t('help')}
//           </li>
//           <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//           <button className="btn-lang" onClick={() => {i18n.changeLanguage("ru")}}>Рус</button><button className="btn-lang" onClick={() => {i18n.changeLanguage("uz")}} >O'z</button>
//           </li>
//           <li style={{ fontFamily: "sans-serif", listStyle: "none" }}>
//             {" "}
//             <NavLink to="/Login"> Вход </NavLink>| Регестрация
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-bottom">
//         <select className="select-nav-bottom">
//           <option>Любая категория</option>
//         </select>
//         <input
//           className="input-nav-bottom"
//           type="text"
//           placeholder="Что будем искать ?"
//         />
//         <select className="select-sec-nav-bottom">
//           <option>Любая категория</option>
//         </select>
//         <button className="btn-bottom-nav">Найти</button>
//         <Link to='/addProduct'><button className="btn-sec-bottom-nav"> + Добавить обьявления</button></Link>
//       </div>
//     </>
//   );
// };
// export default Header;

import Icon1 from './img/Icon1.png'
import Group from './img/Group.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from "../language/i18next";
import { Box, Button, FormHelperText, Input, MenuItem, Select, Typography } from '@mui/material'
export default function Header() {
  const {t} = useTranslation();
    const [navbar,setNavbar]=useState([
        {name:'Home',path:''},
        {name:'Объявления',path:'/new'},
        {name:'Магазины ',path:'/shopping'},
        {name:'Для бизнеса',path:'/forBiznes'},
        {name:'Помощь',path:'/helping'},
    ])
  return (
    <Box sx={{boxShadow:'12px 4px 24px rgba(0, 0, 0, 0.0647645)',paddingBottom:'20px'}}>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'20px'}}>
    <img style={{paddingTop:'40px'}} src={Icon1} alt="" />
    <Typography sx={{paddingTop:'35px',paddingLeft:'24px',fontSize:'18px',lineHeight:'25px',fontStyle:'italic',color:'#000000',fontWeight:'100'}}>Продай, найди, купи все что пожелаешь…</Typography>
    <ul style={{display:'flex',paddingTop:'35px',paddingLeft:'40px',gap:'55px'}}>
    {
                    navbar.map((item,index)=>{
                        return <div>
                          <li style={{listStyle:'none'}} key={index} >
                            <Link style={{textDecoration:'none',fontSize:'18px',lineHeight:'25px',fontStyle:'italic',color:'#000000',fontWeight:'100'}} to={item.path}>{item.name}</Link>
                        </li>
                        </div>
                    })
                    }
                    <Box sx={{display:'flex',gap:'30px'}}>
  <Link style={{textDecoration:'none',fontSize:'20px',lineHeight:'25px',fontStyle:'normal',color:'#4E72CA',fontWeight:'700'}}  to={'/exit'}>Вход</Link>
  <Typography sx={{color:'#4E72CA'}}>|</Typography>
  <Link style={{textDecoration:'none',fontSize:'20px',lineHeight:'25px',fontStyle:'normal',color:'#4E72CA',fontWeight:'700'}}  to={'/register'}>Регистрация</Link>
  </Box>
    </ul>

    </Box>
 <Box sx={{display:'flex',boxShadow:'12px 0px 0px rgba(0, 0, 0, 0.0647645)'}}>
 <Box sx={{border:'1px solid rgba(151, 151, 151, 0.496575)',borderRadius:'22px',width:'872px',height:'48px',marginTop:'16px',marginLeft:'92px',display:'flex'}}>
<Box sx={{display:'flex',padding:'13px',justifyContent:'center',alignItems:'center',gap:'10px'}}>
<Typography sx={{fontSize:'15px',color:'#000000',fontWeight:'500'}}>Любая категория</Typography>
    <img style={{width:'10px',height:'10px',color:'black'}} src={Group} alt="" />
</Box>
<Box sx={{width:'250px',border:'1px solid rgba(151, 151, 151, 0.496575)',borderBottom:'none',borderTop:'none'}}>
<Typography sx={{padding:'15px',fontSize:'15px',color:'#000000',fontWeight:'500'}}>
    Что будем искать ?
    </Typography>
</Box>
<Box sx={{display:'flex',padding:'15px',justifyContent:'center',alignItems:'center',gap:'15px'}}>
<Typography sx={{fontSize:'15px',color:'#000000',fontWeight:'500'}}>По всей Узбекистану</Typography>
    <img style={{width:'10px',height:'10px',color:'black'}} src={Group} alt="" />
</Box>
<Button sx={{marginLeft:'160px',width:'102px',borderRadius:'22px',background:' #19D476',color:'white'}} >Найти</Button>
    </Box>
    <Box sx={{width:'280px',height:'50px',borderRadius:'22px',background:'#19D476',marginTop:'16px',marginLeft:'92px',display:'flex'}}>
      <Box sx={{ width:'50px',height:'50px',borderRadius:'50%',background: '#11B463'}}>
        <Typography sx={{paddingTop:'1px',paddingLeft:'14px',fontSize:'40px',color:'white'}}>+</Typography>
      </Box>
      <Link style={{paddingTop:'13px',paddingLeft:'10px',textDecoration:'none',fontSize:'18px',color:'white',fontWeight:'700'}}>Добавить обьявления</Link>
    </Box>
 </Box>
    </Box>
  )
}