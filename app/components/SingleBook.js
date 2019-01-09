import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../reducers/index';
import { Link } from 'react-router-dom';

class SingleBook extends Component {
  constructor() {
    super();
    this.state = {
      bookLCCN: '',
      book: {},
    };
  }

  async componentDidMount() {
    const bookLCCN = this.props.match.params.lccn;
    this.setState({ bookLCCN: bookLCCN });
    await this.props.actions.fetchSingleBook(bookLCCN, 'LCCN');
  }

  render() {
    const book = this.props.books.book;
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                {book ? (
                  <div id="singleBook">
                    <h2>{book.title}</h2>
                    <h3>{book.subtitle}</h3>
                    {/* <h3>by: {book.authors[0].name}</h3> */}
                    <a href={book.url}>
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
                ) : (
                  <div>
                    {' '}
                    Unfortunately, there is no more information for this book{' '}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                {book ? <h5>{book.by_statement}</h5> : <div />}
                {book ? book.description ? <div><h4>{book.description}</h4> <a href={book.url}><h4>Explore more about this book!</h4></a> </div> : <a href={book.url}><h4>Explore more about this book!</h4></a> : <div />}
              </div>
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
      fetchSingleBook: (searchInput, queryType) =>
        dispatch(getBook(searchInput, queryType)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBook);
