import React, { Fragment } from 'react'
import Header from './Header'

import "./layout.scss"

export default function Layout({ children }) {
 return (
    <Fragment>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Fragment>
  )
}
