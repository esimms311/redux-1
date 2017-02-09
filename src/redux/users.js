const LOGIN_USER ='users/LOGIN_USER';

const initialState = {
  user: ''

}
//reducer makes redux redux, it takes in a new state, takes the action and then returns it to the state
//it looks at the action
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {user:action.payload});

    default:
      return state;
  }
}


export function loginUser(user) {
  return {type: LOGIN_USER,
  payload: user
  }
}
