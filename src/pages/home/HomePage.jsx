import React from 'react'
import { Banner, BestSeller, Brands, Categories, Discout, Popular } from './components'

function HomePage() {
  return (
    <>
      <Banner />
      <Popular />
      <BestSeller />
      <Discout />
      {/* <Brands /> */}
      {/* <Categories /> */}
    </>
  )
}

export default HomePage