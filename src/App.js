import React, { Component } from 'react';
import logo from './img/if.png';
import './App.css';
import avatar from './img/avatar.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendFormAction } from './actions/timeline-actions'

class App extends Component {
  constructor(){
    super()
  }

  submitHandler = event => {
    event.preventDefault()
    const { submitHandler } = this.props
    
    const formValues = {
      title: event.target.title.value,
      post: event.target.post.value
    }

    return submitHandler(formValues)
  }

  render() {
    const { posts, sendFormAction } = this.props
    console.log(this.props)

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
        <form id="body" onSubmit={this.submitHandler}>
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
          {
            posts && posts.map((post, idx) => {
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

const mapActionsToProps = dispatch => ({
  submitHandler: formValues => dispatch(sendFormAction(formValues))
})

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, mapActionsToProps)(App)
