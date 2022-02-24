import React from 'react'
import { createPortal } from 'react-dom'

import "./backdrop.scss"

export default function Backdrop({ onClick }) {
  return createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById("backdrop")
  )
}
