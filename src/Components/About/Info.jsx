import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">

      <div className="about-box">
        <i class="bx bx-news about-icon"></i>
        <h3 className='about-title'>Experience</h3>
        <span className="about-subtitle">1 Year Working</span>
      </div>

      <div className="about-box">
      <i class="bx bx-bug about-icon"></i>
        <h3 className='about-title'>Fix Bugs</h3>
        <span className="about-subtitle"></span>
      </div>

      <div className="about-box">
      <i class="bx bx-file about-icon"></i>
        <h3 className='about-title'>Support</h3>
        <span className="about-subtitle">Available 24/7</span>
      </div>

    </div>
  )
}

export default Info