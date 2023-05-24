import React from 'react'
import { Footer } from '../Components/Footer';
import Header from '../Components/Header/Header';
import { SecondFile } from '../Components/SecondFile/SecondFile';
export const Home = ({product}) => {
  return (
    <>
    <Header />
      <SecondFile product={product} />
    <Footer />
  </>
  )
}
