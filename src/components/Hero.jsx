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
      <h2 className="main-title">PRODUCT DESIGNER</h2>
      
      <div className="description-columns">
        <div className="desc-left">
          <p>I'm currently orchestrating experiences at Hero Digital for a leading tech company that rhymes with Snapple, headquartered in Cupertino, California.</p>
        </div>
        <div className="desc-right">
          <p>I'm a passionate designer with many years of experience who uses research, data, and thoughtful design to create delightful products that scale.</p>
        </div>
      </div>

      <div className="cta-container">
        <a href="#contact" className="cta-button" onClick={handleCTAClick}>
          GET IN TOUCH →
        </a>
      </div>
    </div>
  )
}

export default Hero

