import React from 'react'

import Questions from '../components/Question/Questions'

export default function HomePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="h-page--layout">
          <Questions />
        </div>
      </div>
    </section>
  )
}
