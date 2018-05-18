import React from 'react'

const Card = ({ props }) => {
  const { title, post } = props

  return (
    <div className="card" key={`post_${idx}`}>
      <div className="card-header">
        <img src={avatar} align="left" />
        <h3>Fulano da silva</h3>
      </div>
      <div className="clear"></div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{post}</p>
      </div>
    </div>)
}

export default Card
