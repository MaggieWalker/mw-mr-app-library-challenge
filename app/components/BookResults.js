import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookResults extends Component {
  constructor() {
    super();
    this.state = {
      filterAuthor: false,
      filterTitle: false,
      sortedBooks: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.bookSort = this.bookSort.bind(this);
  }

  async componentDidMount() {}

  bookSort(category) {
    const books = this.props.books.books.docs;
    console.log('category in bookSort', category);
    console.log('books', books);
    if (category === 'All') return books;
    // if (category === 'SortByAuthor') return books;
  }
  compareItems(a, b) {
    return a - b;
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
    const books = this.state.sortedBooks || this.props.books.books;
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
              {books.docs.map(book => (
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
              ))}
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
    actions: {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookResults);
