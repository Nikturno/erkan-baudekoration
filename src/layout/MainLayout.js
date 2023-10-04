import React from 'react'
import { Navbar } from '../components'
import { Footer } from '../containers'

function MainLayout({children}) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
