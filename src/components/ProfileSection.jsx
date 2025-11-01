import React from 'react'
import SkillTag from './SkillTag'

function ProfileSection() {
  const skills = [
    {
      id: 'frontend-dev',
      type: 'design-strategy',
      title: 'FRONTEND DEVELOPMENT',
      subtitle: 'BUILDING → MODERN WEB EXPERIENCES',
      icons: ['circle', 'circle'],
    },
    {
      id: 'ui-ux',
      type: 'ecomm',
      title: 'UI/UX DESIGN',
      subtitle: 'USER-FRIENDLY INTERFACES',
      icons: ['star'],
      extraIcon: '<>',
    },
    {
      id: 'collaboration',
      type: 'motion',
      title: 'COLLABORATION',
      subtitle: '→ BUILDING TOGETHER',
    },
    {
      id: 'continuous-learning',
      type: 'ux-design',
      title: 'CONTINUOUS LEARNING©',
    },
    {
      id: 'problem-solving',
      type: 'branding',
      title: 'PROBLEM SOLVING',
      subtitle: "2024",
      icons: ['star-white'],
    },
    {
      id: 'creative-mindset',
      type: 'usability',
      title: 'CREATIVE MINDSET',
      icon: 'globe',
    },
  ]

  return (
    <section className="light-section" id="about">
      <div className="profile-container">
        <img 
          src="/photo.jpg" 
          alt="Nori" 
          className="profile-photo"
          onError={(e) => {
            console.warn('Profile photo not found. Please ensure photo.jpg exists in the public folder.')
            e.target.style.display = 'none'
          }}
        />
        
        {skills.map((skill) => (
          <SkillTag key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default ProfileSection

