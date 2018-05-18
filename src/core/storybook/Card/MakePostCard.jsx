import React from 'react'

const MakePostCard = ({ props }) => (
  <div className="make-post">
    <h1>Use esta area para fazer o seu post</h1>
    <div>
      <label for="title">Titulo</label>
      <input name="title" id="title"/>
    </div>
    <div>
      <label for="post">Postagem</label>
      <textarea onChange="" name="post" id="post" />
    </div>
    <button className="primary">Postar</button>
  </div>
)