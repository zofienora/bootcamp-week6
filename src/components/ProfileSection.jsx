import React from 'react'
import SkillTag from './SkillTag'

function ProfileSection() {
  const skills = [
    {
      id: 'design-strategy',
      type: 'design-strategy',
      title: 'DESIGN STRATEGY',
      subtitle: 'ALIGNING YOUR → BUSINESS & USER NEEDS',
      icons: ['circle', 'circle'],
    },
    {
      id: 'ecomm',
      type: 'ecomm',
      title: 'E-COMM. WWW.',
      subtitle: 'EXPERIENCES',
      icons: ['star'],
      extraIcon: 'e',
    },
    {
      id: 'motion',
      type: 'motion',
      title: 'MOTION & INTERACTION',
      subtitle: '→ DESIGN',
    },
    {
      id: 'ux-design',
      type: 'ux-design',
      title: 'USER EXPER-IENCE DESIGN©',
    },
    {
      id: 'branding',
      type: 'branding',
      title: 'BRANDING & IDENTITY',
      subtitle: "©'22",
      icons: ['star-white'],
    },
    {
      id: 'usability',
      type: 'usability',
      title: 'USABILITY TESTING',
      icon: 'globe',
    },
  ]

  return (
    <section className="light-section" id="about">
      <div className="profile-container">
        <img 
          src="/profile-photo-no-bg.png" 
          alt="Devanta Ebison" 
          className="profile-photo"
          onError={(e) => {
            console.warn('Profile photo not found. Please ensure profile-photo-no-bg.png exists in the public folder.')
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

