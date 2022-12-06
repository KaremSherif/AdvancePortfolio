import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
      
      <div className="about-box">
        <i class="bx bx-news about-icon"></i>
        <h3 className='about-title'>Web Develop</h3>
        <span className="about-subtitle">1 Year Working</span>
      </div>

      <div className="about-box">
      <i class="bx bx-bug about-icon"></i>
        <h3 className='about-title'>Fix Bugs</h3>
        <span className="about-subtitle">Bug Fixes means a temporary work around</span>
      </div>

      <div className="about-box">
      <i class="bx bx-file about-icon"></i>
        <h3 className='about-title'>Updating</h3>
        <span className="about-subtitle">Keeping the content up to date</span>
      </div>

    </div>
  )
}

export default Info