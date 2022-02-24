import React, { Fragment } from 'react'

import Backdrop from '../Backdrop/Backdrop'

import "./loading.scss"

export default function Loading() {
  return (
    <Fragment>
      <Backdrop />
      <div className="loading"></div>
    </Fragment>
  )
}
