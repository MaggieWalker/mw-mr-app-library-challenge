import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBook } from '../reducers/index';
import BookResults from './BookResults';

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
          <h1>Search For A Book!</h1>
          <div className="card">
            <div className="card-body">
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
          </div>
        </div>

        <div id="book-list" className="album py-5 bg-light">
          <div className="container">
            <div className="row">{books ? <BookResults /> : <div />} </div>
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
