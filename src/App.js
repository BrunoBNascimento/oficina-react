import React, { Component } from 'react';
import logo from './img/if.png';
import './App.css';
import avatar from './img/avatar.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from 'core/storybook/Card'
import MakePostCard from 'core/storybook/MakePostCard'
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

  renderCards(posts){
    return posts && posts.map(({ title, post }, idx) => {
      return <Card title={title} post={post} />
    })
  }

  render() {
    const { posts, sendFormAction } = this.props

    return (
      <div>
        <Header />
        <form id="body" onSubmit={this.submitHandler}>
          <MakePostCard />
          {this.renderCards()}
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
