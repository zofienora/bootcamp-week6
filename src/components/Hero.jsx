import React from 'react'

function Hero() {
  const handleCTAClick = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="hero-content">
      <h2 className="main-title">FRONTEND DEVELOPER</h2>
      
      <div className="description-columns">
        <div className="desc-left">
          <p>I'm Nori, a frontend developer passionate about creating sleek, user-friendly web experiences. I love turning ideas into intuitive interfaces and continuously expanding my skills to stay ahead in modern web development.</p>
        </div>
        <div className="desc-right">
          <p>With certifications backing my growth, I'm always learning and refining my craft. I thrive in collaboration, enjoying the process of building and problem-solving with others.</p>
          <div className="cta-container">
            <a href="#contact" className="cta-button" onClick={handleCTAClick}>
              GET IN TOUCH →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

