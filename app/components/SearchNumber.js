import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBook } from '../reducers/index';
import { Link } from 'react-router-dom';

class SearchNumber extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.textInputISBN = React.createRef();
    this.textInputOCLC = React.createRef();
    this.textInputLCCN = React.createRef();
    this.textInputOLID = React.createRef();
    this.textInputq = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {}

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;

    if (eventTarget === 'all') {
      this.setState({ searchInput: event.target.value });
    } else if (eventTarget === 'title') {
      this.setState({ searchInput: event.target.value });
    } else if (eventTarget === 'author') {
      this.setState({ searchInput: event.target.value });
    } else if (
      event.target.name === 'ISBN' ||
      event.target.name === 'OCLC' ||
      event.target.name === 'LCCN' ||
      event.target.name === 'OLID'
    ) {
      this.setState({ searchInput: event.target.value });
    }
  }

  onSubmit(event) {
    if (
      event.target.name === 'ISBN' ||
      event.target.name === 'OCLC' ||
      event.target.name === 'LCCN' ||
      event.target.name === 'OLID'
    ) {
      this.props.actions.fetchSingleBook(
        this.state.searchInput,
        event.target.name
      );
      this[`textInput${event.target.name}`].current.value = ''; // Clears the input field after submission
    } else {
      this.props.actions.fetchAllBooks(
        this.state.searchInput,
        event.target.name
      );
      this[`textInput${event.target.name}`].current.value = ''; // Clears the input field after submission
    }
  }

  render() {
    const book = this.props.books.book;
    console.log('book', book);
    return (
      <div>
        <div className="container">
          <h1>Search for a specific book:</h1>
          <br />

          <div>
            Search by ISBN:{' '}
            <input
              type="text"
              className="form-control"
              name="ISBN"
              ref={this.textInputISBN}
              onChange={this.handleChange}
            />
            <input
              type="image"
              name="ISBN"
              onClick={this.onSubmit}
              src="//ux-static.nypl.org/images/magnifier.encore.v2.svg"
              id="searchISBN"
              tabIndex="0"
              alt="Search"
              width="34"
              height="34"
            />
          </div>
          <div>
            Search by OCLC:{' '}
            <input
              type="text"
              className="form-control"
              name="OCLC"
              ref={this.textInputOCLC}
              onChange={this.handleChange}
            />
            <input
              type="image"
              name="OCLC"
              onClick={this.onSubmit}
              src="//ux-static.nypl.org/images/magnifier.encore.v2.svg"
              id="searchOCLC"
              tabIndex="0"
              alt="Search"
              width="34"
              height="34"
            />
          </div>
          <div>
            Search by LCCN:{' '}
            <input
              type="text"
              className="form-control"
              name="LCCN"
              ref={this.textInputLCCN}
              onChange={this.handleChange}
            />
            <input
              type="image"
              name="LCCN"
              onClick={this.onSubmit}
              src="//ux-static.nypl.org/images/magnifier.encore.v2.svg"
              id="searchLCCN"
              tabIndex="0"
              alt="Search"
              width="34"
              height="34"
            />
          </div>
          <div>
            Search by OLID:{' '}
            <input
              type="text"
              className="form-control"
              name="OLID"
              ref={this.textInputOLID}
              onChange={this.handleChange}
            />
            <input
              type="image"
              name="OLID"
              onClick={this.onSubmit}
              src="//ux-static.nypl.org/images/magnifier.encore.v2.svg"
              id="searchOLID"
              tabIndex="0"
              alt="Search"
              width="34"
              height="34"
            />
          </div>
        </div>

        <div>
          {book ?
            <div id="singleBook">
              <div className="container">
              <div className="card">
              <div className="card-body">
            <Link to={`/book/${book.identifiers.isbn_10 ? book.identifiers.isbn_10[0] : 0}`}>
              <h2>{book.title}</h2>
              <h3>{book.subtitle}</h3>
            </Link>
              <h3>by: {book.authors[0].name}</h3>
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                {book.cover ? (
                  <img src={book.cover.large} />
                ) : (
                  <img src="http://worldartsme.com/images/vertical-of-books-clipart-1.jpg" />
                )}
              </a>
              </div>
              </div>
              </div>
            </div>
           :
            <div />
          }
        </div>
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
      fetchAllBooks: (searchInput, parameter) =>
        dispatch(getBooks(searchInput, parameter)),
      fetchSingleBook: (searchInput, queryType) =>
        dispatch(getBook(searchInput, queryType)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchNumber);
