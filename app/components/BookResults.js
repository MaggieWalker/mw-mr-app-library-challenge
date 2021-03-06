import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid'

class BookResults extends Component {
  constructor() {
    super();
    this.state = {
      unsortedBooks: [],
      sortedBooks: null,
      language: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.bookSort = this.bookSort.bind(this);
    this.filterLang = this.filterLang.bind(this);
  }

  componentDidMount() {
    this.setState({
      unsortedBooks: [...this.props.books.books.docs],
    });
  }

  bookSort(category) {
    const books = [...this.state.unsortedBooks];
    if (category === 'AllBooks') return books;
    if (category === 'SortByAuthor') return books.sort(this.compareAuthor);
    if (category === 'SortByTitle') return books.sort(this.compareTitle);
  }
  compareAuthor(a, b) {
    let nameA = a.author_name || 'a';
    let nameB = b.author_name || 'b';
    let wordA = nameA[0].toUpperCase();
    let wordB = nameB[0].toUpperCase();
    if (wordA < wordB) {
      return -1;
    } else if (wordA > wordB) {
      return 1;
    } else {
      return 0;
    }
  }

  compareTitle(a, b) {
    let nameA = a.title_suggest || 'a';
    let nameB = b.title_suggest || 'b';
    let wordA = nameA[0].toUpperCase();
    let wordB = nameB[0].toUpperCase();
    if (wordA < wordB) {
      return -1;
    } else if (wordA > wordB) {
      return 1;
    } else {
      return 0;
    }
  }
  handleSelect(event) {
    event.persist();
    const category = event.nativeEvent.target.value;
    this.setState({
      sortedBooks: this.bookSort(category),
    });
  }

  handleOnClick(event){
    event.persist();
    const language = event.nativeEvent.target.value;
    console.log('language', language)
    this.setState({
        language: language
    })

    // let sortedBooks;
    // this.state.sortedBooks ? sortedBooks = [...this.state.sortedBooks] : sortedBooks = [];
    // let filteredBooks = sortedBooks.filter(book => book.language[0] === language)
    // this.setState({
    //     sortedBooks: filteredBooks
    // })
  }

  filterLang(book){
        if (book.language && (this.state.language === '' || this.state.lanugage === book.language[0])){
            return true
        }
  }


  render() {
    let books = this.state.sortedBooks || this.props.books.books.docs;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            {' '}
            <h3>Sort Books</h3>
          </label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.handleSelect}
          >
            <option value="AllBooks">All Books</option>
            <option value="SortByAuthor">Sort By Author</option>
            <option value="SortByTitle">Sort By Title</option>
          </select>
        </div>

        <form className="form-inline">
            <div className="form-group row">
                <div className="container">
                    <h4>Filter by:</h4>
                </div>
            </div>
            <div id="langButtons">
                <button type="button" className="btn btn-primary" value="eng" onClick={this.handleOnClick}>English</button>
                <button type="button" className="btn btn-primary" value="fre" onClick={this.handleOnClick}>French</button>
                <button type="button" className="btn btn-primary" value="spa" onClick={this.handleOnClick}>Spanish</button>
            </div>
        </form>

        <div id="book-list" className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {books.filter(
                  (book) => (book.language ? book.language[0] === this.state.language : book)
                  ).map(book => (
                <div key={uuidv1()} className="col-md-4">
                  <div className="card mb-4 shadow-sm">

                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                    >
                      <rect fill="#55595c" width="100%" height="100%" />
                    </svg>

                    <div className="card-body">
                      <Link to={`/book/${book.isbn ? book.isbn[0] : 0}`}>
                        <h5 className="card-title">{book.title}</h5>{' '}
                      </Link>
                      <p className="card-text">by {book.author_name}</p>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
        <div />
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
    actions: {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookResults);
