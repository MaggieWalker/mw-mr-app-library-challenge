import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookResults extends Component {
  constructor() {
    super();
    this.state = {
      filterAuthor: false,
      filterTitle: false,
      unsortedBooks: [],
      sortedBooks: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.bookSort = this.bookSort.bind(this);
  }

  componentDidMount() {
      this.setState({
          unsortedBooks: [...this.props.books.books.docs]
      })
  }

  bookSort(category) {
    const books = this.state.unsortedBooks;
    console.log('books in BookSort', books);
    if (category === 'AllBooks') return this.props.books.books.docs;
    if (category === 'SortByAuthor') return books.sort(this.compareAuthor);
    if (category === 'SortByTitle') return this.props.books.books.docs;
  }
  compareAuthor(a, b) {
      let nameA = a.author_name || 'a';
      let nameB = b.author_name || 'b';
      let wordA = nameA[0].toUpperCase();
      let wordB = nameB[0].toUpperCase();
      if (wordA < wordB) return -1;
      if (wordA > wordB) return 1;
      return 0
  }

  handleSelect(event) {
    event.persist();
    console.log('event', event);
    const category = event.nativeEvent.target.value;
    this.setState({
      sortedBooks: this.bookSort(category),
    });
  }

  render() {
    const books = this.state.sortedBooks || this.props.books.books.docs;
    console.log('this.props in render', this.props)
    console.log('books', books)
    console.log('state sortedBooks', this.state.sortedBooks)
    // const filterAuthor = this.props.books.books.sort(this.compareItems)
    // const filterTitle = this.props.books.books.sort(this.compareItems)
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            {' '}
            <h3>Sort Books</h3>
          </label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={this.handleSelect}
          >
            <option value="AllBooks">All Books</option>
            <option value="SortByAuthor">Sort By Author</option>
            <option value="SortByTitle">Sort By Title</option>
          </select>
        </div>

        <div id="book-list" className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                  books.map(book => (
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
