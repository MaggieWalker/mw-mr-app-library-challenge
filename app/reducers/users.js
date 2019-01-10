//this reducer is currently unused, but would be used in the future to pull specific user information

//action types
const GOT_USER = 'GOT_USER';

const initialState = [
  {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    image: '',
  },
];

//This my user sub-reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_USER:
      return action.students;
    default:
      return state;
  }
}
