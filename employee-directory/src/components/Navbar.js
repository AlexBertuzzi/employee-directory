import React from "react";

const styles = {
  addMargin: {
    marginLeft: "10px",
    marginRight: "10px"
  }
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Employee Directory
      </a>
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" style={styles.addMargin}>
            <a>Sort By:</a>
          </li>
          <li className="nav-item" style={styles.addMargin}>
            <a
              className="nav-link-inline"
              role="button"
            >
            A to Z  
            </a>
          </li> 
          <li className="nav-item" style={styles.addMargin}>
            <a
              className="nav-link-inline"
              role="button"
            >
            Z to A
            </a>
          </li>
        </ul>      
        <form className="form-inline my-2 my-lg-0" style={styles.addMargin}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search By Last Name"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
