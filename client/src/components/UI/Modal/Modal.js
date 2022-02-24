import React, { Fragment } from 'react'
import { createPortal } from "react-dom"
import Backdrop from '../Backdrop/Backdrop'

import "./modal.scss"

export default function Modal({ title, children, onCloseModal }) {
  return createPortal(
    <Fragment>
      <Backdrop onClick={onCloseModal} />
      <div className="modal">
        <div className="modal--container container">
          <header className="modal--header">
            <h1 className="title">{title}</h1>
            <div className="pointer icon bi bi-x-lg" onClick={onCloseModal}></div>
          </header>
          <main className="modal--content">
            {children}
          </main>
        </div>
      </div>
    </Fragment>,
    document.getElementById("modal")
  )
}
