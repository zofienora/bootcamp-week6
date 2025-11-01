import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProfileSection from './components/ProfileSection'

function App() {
  return (
    <>
      <section className="dark-section">
        <Header />
        <Hero />
      </section>
      <ProfileSection />
    </>
  )
}

export default App

