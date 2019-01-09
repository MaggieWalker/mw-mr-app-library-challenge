import React, { Component } from 'react';
import { connect } from 'react-redux';

class Browse extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <div className="container">
          <div className="media">
          <a href="https://www.nytimes.com/interactive/2018/11/19/books/review/100-notable-books.html" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static01.nyt.com/newsgraphics/2018/10/08/books/90772dc443fbd7be4398963d5d50a09c86d7f1d3/illo.gif"
              className="ml-3"
              alt="..."
            />
          </a>
          </div>
        </div>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%">
                    <text>Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">Book Title!</p>
                  </div>
                </div>
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
    actions: {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
