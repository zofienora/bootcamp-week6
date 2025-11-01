import React from 'react'

function SkillTag({ type, title, subtitle, icons = [], extraIcon, icon }) {
  // Special handling for usability tag (circular with content inside)
  if (type === 'usability') {
    return (
      <div className={`skill-tag ${type}`}>
        <div className="tag-content-circle">
          <h3>{title}</h3>
          <div className="icon-globe">{icon === 'globe' ? '🌐' : ''}</div>
        </div>
      </div>
    )
  }

  // Regular tags with header icons and content
  return (
    <div className={`skill-tag ${type}`}>
      {icons.length > 0 && (
        <div className="tag-header">
          {icons.map((iconType, index) => {
            if (iconType === 'circle') {
              return <span key={index} className="icon-circle"></span>
            }
            if (iconType === 'star') {
              return <span key={index} className="icon-star">★</span>
            }
            if (iconType === 'star-white') {
              return <span key={index} className="icon-star-white">★</span>
            }
            return null
          })}
        </div>
      )}
      {(title || subtitle || extraIcon) && (
        <div className="tag-content">
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
          {extraIcon && <div className="icon-square">{extraIcon}</div>}
        </div>
      )}
    </div>
  )
}

export default SkillTag

