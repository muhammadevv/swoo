import React from 'react'
import { Banner, BestSeller, Brands, Categories, Discout } from './components'

function Home() {
  return (
    <>
      <Banner />
      <BestSeller />
      <Discout />
      <Categories />
      <Brands />
    </>
  )
}

export default Home