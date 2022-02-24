import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="main--header">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">Q&A</Link> 
          </h1>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
