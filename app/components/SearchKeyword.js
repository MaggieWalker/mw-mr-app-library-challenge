import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBook } from '../reducers/index';
import { Link } from 'react-router-dom';

class SearchKeyword extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;

    if (eventTarget === 'all') {
        this.setState({ searchInput: event.target.value})
    } else if (eventTarget === 'title') {
      this.setState({ searchInput: event.target.value });
    } else if (eventTarget === 'author') {
        this.setState({ searchInput: event.target.value})
    } else if (event.target.name === 'ISBN' || event.target.name === 'OCLC' || event.target.name === 'LCCN' || event.target.name === 'OLID') {
        this.setState({ searchInput: event.target.value})
    }
  }

  async handleClick(event) {
    event.preventDefault();
    const campusId = event.target.id;
    await this.props.actions.removeSpecificCampus({ id: campusId });
  }
  onSubmit(event){
    if (event.target.name === 'ISBN' || event.target.name === 'OCLC' || event.target.name === 'LCCN' || event.target.name === 'OLID') {
        this.props.actions.fetchSingleBook(this.state.searchInput, event.target.name)
        this.setState({searchInput: ''})
    } else {
        this.props.actions.fetchAllBooks(this.state.searchInput, event.target.name)
        this.setState({searchInput: ''})
    }
  }

  render() {
    const books = this.props.books.books;
    const book = this.props.books.book;
    console.log('book', book)
    return (
      <div>
        <div className="container">
        <h1>General Search:</h1>
        <div>
              Search by Keyword: <input type="text" className="form-control" name="all" ref={this.textInputq} onChange ={this.handleChange} />
              <input type="submit" className="btn btn-primary" name = "q" value="Search" onClick={this.onSubmit} />
        </div>
          <div>
              Search By Title: <input type="text" className="form-control" name="title" ref={this.textInputtitle} onChange ={this.handleChange} />
              <input type="submit" className="btn btn-primary" name = "title" value="Search" onClick={this.onSubmit} />
          </div>
          <div>
              Search By Author: <input type="text" className="form-control" name="author" ref={this.textInputauthor} onChange ={this.handleChange} />
              <input type="submit" className="btn btn-primary" name = "author" value="Search" onClick={this.onSubmit} />
          </div>
        </div>

        <div>
        {book ?
        <div id="singleBook">
        <hr />
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        <h3>by: {book.authors[0].name}</h3>
            <a href={book.url} target="_blank" rel="noopener noreferrer">
            {book.cover ? <img src={book.cover.large} /> : <img src="http://worldartsme.com/images/vertical-of-books-clipart-1.jpg" />}
            </a>
        </div>
    : <div />}
        </div>

        <ul id="book-list">
          {books ? books.docs.map(book => (
            <div key={book.isbn}>
              <li>
                <Link to={`/campuses/${book.isbn}`}>
                  <h3>
                    Book: {book.title}
                    <br />
                    Author: {book.author_name}
                  </h3>
                </Link>
                <button
                  type="button"
                  id={`${book.isbn}`}
                  onClick={this.handleClick}>
                  X
                </button>
              </li>
            </div>
          )) : <div />}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchAllBooks: (searchInput, parameter) => dispatch(getBooks(searchInput, parameter)),
      fetchSingleBook: (searchInput, queryType) => dispatch(getBook(searchInput, queryType))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchKeyword);