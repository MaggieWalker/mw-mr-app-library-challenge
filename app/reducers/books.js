//action types
const GOT_BOOKS = 'GOT_BOOKS';
const GOT_BOOK = 'GOT_BOOK'

const initialState = [
  {
    book: '',
    books: [],
  },
];

//This is my book sub-reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOKS:
      return {...state, books: action.books};
    case GOT_BOOK:
      return {...state, book: action.book};
    default:
      return state;
  }
}
