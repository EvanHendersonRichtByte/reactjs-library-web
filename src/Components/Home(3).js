import './CSS/Home.css';
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Library2 from './Pictures/Library2.jpg';
import Library3 from './Pictures/Library3.jpg';
import Library4 from './Pictures/Library4.jpg';

class Home extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
    const userLink = (
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link to="/book" className="nav-link">
            Book
          </Link>
        </li>
        <li className="nav-item">
          <a href=" " onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <body id="homeBody">
        
<div className=""></div>>

      
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">

      {/* Navbar */}

<nav className=" navbar navbar-expand-lg navbar-light" id="homeNavbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar1"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              { <Link to="/" className="nav-link">
                Home
              </Link> }
            </li>
          </ul>
          {localStorage.token ? userLink : loginRegLink}
        </div>
      </nav>

    <div className="carousel-item active">
      <img id="homeImg" className="d-block w-100" src={Library2} alt="First slide"/>
      <div className="carousel-caption">
        <h5>Beijing</h5>
        <p>We Develop The Best Tech In This World</p>
      </div>
    </div>
    <div className="carousel-item">
      <img id="homeImg" className="d-block w-100" src={Library3} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img id="homeImg" className="d-block w-100" src={Library4} alt="Third slide"/>
    </div>

  </div>

  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>

</div>
      </body>
    );
  }
}
export default withRouter(Home);



      