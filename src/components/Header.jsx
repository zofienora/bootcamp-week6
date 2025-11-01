import React from 'react'

function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header>
      <div className="header-left">
        <div className="header-indicator"></div>
        <h1 className="name">Devanta<br />Ebison</h1>
      </div>
      <nav className="header-right">
        <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}>Blog</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
      </nav>
    </header>
  )
}

export default Header

