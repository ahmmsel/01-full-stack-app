import React from 'react'

import ErrorImage from "../assets/images/not-found.svg"

export default function NotFound() {
  return (
    <section className="section not--found">
      <div className="container">
        <img src={ErrorImage} alt="this page is not found" />
      </div>
    </section>
  )
}
