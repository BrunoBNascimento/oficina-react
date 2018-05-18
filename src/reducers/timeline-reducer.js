const initialState = {
  posts: [{
    title: 'primeiro post',
    post: 'Lorem ipsum dolor sit amet'
  }]
}

export const timeline = (state = initialState, action) => {
  switch(action.type){
    case 'SET_FORM_DATA':
      return {
        ...state,
        posts: [ ...state.posts, action.payload ]
      }
    default:
      return state
  }
}

