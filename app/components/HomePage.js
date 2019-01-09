import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBook } from '../reducers/index';
import { Link } from 'react-router-dom';

class Homepage extends Component {
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
    this.textInputtitle = React.createRef();
    this.textInputauthor = React.createRef();
    this.handleClick = this.handleClick.bind(this);
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

  async handleClick(event) {
    event.preventDefault();
    const campusId = event.target.id;
    await this.props.actions.removeSpecificCampus({ id: campusId });
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
    const books = this.props.books.books; 
    const book = this.props.books.book;
    console.log('book', book);
    return (
      <div>

        <div className="container">
          <h1>General Search:</h1>
          <div>
            Search by Keyword:{' '}
            <input
              type="text"
              className="form-control"
              name="all"
              ref={this.textInputq}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="btn btn-primary"
              name="q"
              value="Search"
              onClick={this.onSubmit}
            />
          </div>
          <div>
            Search By Title:{' '}
            <input
              type="text"
              className="form-control"
              name="title"
              ref={this.textInputtitle}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="btn btn-primary"
              name="title"
              value="Search"
              onClick={this.onSubmit}
            />
          </div>
          <div>
            Search By Author:{' '}
            <input
              type="text"
              className="form-control"
              name="author"
              ref={this.textInputauthor}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="btn btn-primary"
              name="author"
              value="Search"
              onClick={this.onSubmit}
            />
          </div>
        </div>

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
          {book ? (
            <div>
              <hr />
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div id="singleBook">
                      <h2>{book.title}</h2>
                      <h3>{book.subtitle}</h3>
                      <h3>by: {book.authors[0].name}</h3>
                      <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {book.cover ? (
                          <img src={book.cover.large} />
                        ) : (
                          <img
                            src="http://worldartsme.com/images/vertical-of-books-clipart-1.jpg"
                            height="200"
                          />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>

        <div id="book-list" className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {books ? (
                books.docs.map(book => (
                  <div key={book.isbn} className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                      >
                        <rect fill="#55595c" width="100%" height="100%" />
                      </svg>
                      <div className="card-body">
                        <Link to={`/book/${book.lccn ? book.lccn[0] : 0}`}>
                          <h5 className="card-title">{book.title}</h5>{' '}
                        </Link>
                        <p className="card-text">by {book.author_name}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div />
              )}
            </div>
          </div>
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
)(Homepage);
