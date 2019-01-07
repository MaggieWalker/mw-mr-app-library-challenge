import { combineReducers } from 'redux';
import axios from 'axios';
import bookReducer from './books';
import userReducer from './users';

//action types
const GOT_BOOK = 'GOT_BOOK'

//action creators
export const gotBook = book => ({
  type: GOT_BOOK,
  book
})

//Campus thunk creator/action creator. Creating my thunk function
export const getBook = (searchInput) => {
  return async dispatch => {
    const res = await axios.get(`http://openlibrary.org/search.json?q=${searchInput}`);
    console.log('res in index.js', res)
    const bookInfo = res.data;
    const currAction = gotBook(bookInfo);
    dispatch(currAction)
  }
}

const rootReducer = combineReducers({
  books: bookReducer,
  users: userReducer,
});
export default rootReducer;
