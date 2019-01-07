//action types
const GOT_BOOK = 'GOT_BOOK'

const initialState = [
  {
    book: '',
    id: '',
    name: '',
    image: '',
    address: '',
    description: ''
  },
];

//This is my book sub-reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOK:
      return action.book;
    default:
      return state;
  }
}
