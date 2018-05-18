import React from 'react'

const Header = ({ props }) => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} id="logo" />
    </div>
    <div className="search-container">
      <input onChange="" name="search" placeholder="Buscar posts..." />
    </div>
  </div>
)