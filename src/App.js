import React, { Component } from 'react';
import logo from './img/if.png';
import './App.css';
import avatar from './img/avatar.png'

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  changeHandler = event => {
    event.preventDefault()

    const formValues = {
      title: event.target.title.value,
      post: event.target.post.value
    }

    const newState = [ ...this.state.posts, formValues ]
    
    this.setState({ posts: newState })
  }

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
        <form id="body" onSubmit={this.changeHandler}>
          <div className="make-post">
            <h1>Use esta area para fazer o seu post</h1>
            <div>
              <label for="title">Titulo</label>
              <input name="title" id="title" />
            </div>
            <div>
              <label for="post">Postagem</label>
              <textarea onChange="" name="post" id="post" />
            </div>
            <button className="primary">Postar</button>
          </div>
          {
            this.state.posts.map((post, idx) => {
              return (
                <div className="card" key={`post_${idx}`}>
                  <div className="card-header">
                    <img src={avatar} align="left" />
                    <h3>Fulano da silva</h3>
                  </div>
                  <div className="clear"></div>
                  <div className="card-body">
                    <h2>{post.title}</h2>
                    <p>{post.post}</p>
                  </div>
                </div>
              )
            })
          }
        </form>
      </div>
    )
  }
}

export default App;
