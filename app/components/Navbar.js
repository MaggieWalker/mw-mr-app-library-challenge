import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        src="https://cdn.shopify.com/s/files/1/1061/1924/products/Open_Book_Emoji_large.png?v=1480481040"
        width="40"
        height="40"
        alt=""
      />
    </a>

    {/* <a className="navbar-brand" href="/">Browse</a> */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/browse">
            Browse 👀<span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Search 🔍
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Advanced Search
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/number">
              Search By Number
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/keyword">
              Search By Keyword
            </a>
          </div>
        </li>
      </ul>

      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item active">
          <a className="nav-link" href="https://github.com/MaggieWalker" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              height="30"
              width="30"
            />
            <span className="sr-only">(current)</span>
          </a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="https://www.linkedin.com/in/magggiewalker/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png"
              height="30"
              width="30"
            />
            <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
    <hr />
  </nav>
);

export default Navbar;
