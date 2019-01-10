import { combineReducers } from 'redux';
import axios from 'axios';
import bookReducer from './books';
import userReducer from './users';

//action types
const GOT_BOOKS = 'GOT_BOOKS';
const GOT_BOOK = 'GOT_BOOK';

//action creators
export const gotBooks = books => ({
  type: GOT_BOOKS,
  books
})
export const gotBook = book => ({
  type: GOT_BOOK,
  book
})

//Thunk creator
export const getBooks = (searchInput, parameter) => {
  return async dispatch => {
      const res = await axios.get(`http://openlibrary.org/search.json?${parameter}=${searchInput}`);
      console.log('res in index.js', res)
      const bookInfo = res.data;
      const currAction = gotBooks(bookInfo);
      dispatch(currAction)
  }
}

export const getBook = (searchInput, queryType) => {
  return async dispatch => {
    const res = await axios.get(`https://openlibrary.org/api/books?bibkeys=${queryType}:${searchInput}&jscmd=data&format=json`);
    const resDetails = await axios.get(`https://openlibrary.org/api/books?bibkeys=${queryType}:${searchInput}&jscmd=details&format=json`)
    const bookData = res.data[`${queryType}:${searchInput}`];
    const bookDetails = resDetails.data[`${queryType}:${searchInput}`]
    const bookInfo = {...bookData, ...bookDetails}
    const currAction = gotBook(bookInfo);
    dispatch(currAction)
  }
}

const rootReducer = combineReducers({
  books: bookReducer,
  users: userReducer,
});
export default rootReducer;
