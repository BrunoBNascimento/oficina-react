import React, { Component } from 'react';
import logo from './img/if.png';
import './App.css';
import avatar from './img/avatar.png'

class App extends Component { 
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo-container">
            <img src={logo} id="logo" />
          </div>
          <div className="search-container">
            <input onChange="" name="search" placeholder="Buscar posts..." />
          </div>
        </div>
        <div id="body">
          <div className="make-post">
            <h1>Use esta area para fazer o seu post</h1>
            <div>
              <label for="title">Titulo</label>
              <input onChange="" name="title" />
            </div>
            <div>
              <label for="title">Postagem</label>
              <textarea onChange="" name="title" />
            </div>
            <button className="primary">Postar</button>
          </div>

          <div className="card">
            <div className="card-header">
              <img src={avatar} align="left" />
              <h3>Fulano da silva</h3>
            </div>
            <div className="clear"></div>
            <div className="card-body">
              <h2>Titulo</h2>
              <p>Post</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
