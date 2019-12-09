import './CSS/Home.css';
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Library2 from './Pictures/Library2.jpg';
import Library3 from './Pictures/Library3.jpg';
import Library4 from './Pictures/Library4.jpg';
import IMLS from './Pictures/IMLS.jpg';

class Home extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item" id="homeNavbarLogoutLogin">
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
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link to="/Book" className="nav-link">
            Book
          </Link>
        </li>
        <li>
          <Link to="/User" className="nav-link">
            User
          </Link>
        </li> */}
        <li>
          <Link to="/Pegawai" className="nav-link">
            Pegawai
          </Link>
        </li>
        <li className="nav-item" id="homeNavbarLogoutLogin">
          <a href=" " onClick={this.logOut.bind(this)} className="nav-link">
            Logout &nbsp;
            <FontAwesomeIcon icon={faSignInAlt}/>
          </a>
        </li>
      </ul>
    );

    return (
      <div id="homeBody">

{/* Navbar */}

        <nav className="navbar nav-flex justify-content-start navbar-expand-lg navbar-light" id="homeNavbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-start"
          id="navbar1"
        >

          <ul className="navbar-nav">
            <li className="nav-item ">
              { <Link to="/" className="nav-link">
                <img src={IMLS} id="homeNavbarLogo" alt="img"/>
              </Link> }
            </li>
          </ul>
          {localStorage.token ? userLink : loginRegLink}
        </div>
      </nav>

{/* Carousel Image */}

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators" id="carouselIndicator">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Library2} alt="First slide" id="carouselImage"/>
      <div className="carousel-caption d-none d-md-block text-light " id="carouselWelcome">
      <blockquote className="wp-block-quote text-md"><p id="blockquote1">Our Future Lies Beyond Us,Our Job is Only Reveal It </p><cite id="blockquote2">Evan Henderson</cite></blockquote>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Library3} alt="Second slide" id="carouselImage"/>
      <div className="carousel-caption d-none d-md-block text-danger"  id="carouselAddition">
      <h5>Immersive Data<span className="text-primary"> System</span></h5>
      <p>We Used the Most Advanced Technology in the World</p>
      <Link className="btn btn-success" to="/LearnMore">Learn More</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Library4} alt="Third slide" id="carouselImage"/>
      <div className="carousel-caption d-none d-md-block text-danger"  id="carouselAddition">
      <h5>We Are Ready To Assist You</h5>
      <p>We Make a Better Future</p>
      <Link className="btn btn-success" to="/Login">Join Us</Link>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

{/* Contents 1 */}

<div className="col col-md-12">
  <div className="col-md-4" id="content1Image1"></div>
  <div className="col-md-4" id="content1Image2"></div>
  <div className="col-md-4" id="content1Image3"></div>
</div>

{/* Contents 2*/}

      <div className="container">
        <h2 className="" id="contentHeader">Welcome to the <i className="text-danger">Library</i></h2>
        <div className="row d-flex justify-content-center">
        <div className="col col-md-6 bg-light ">
          <h4 className="card-header">
            Vision
            </h4>
            <div className="card-body">
            The  Libraries strengthen and enhance the teaching, research and service of the University at Albany. The Libraries promote intellectual growth and creativity by developing collections, facilitating access to information resources, teaching the effective use of information resources and critical evaluation skills and offering research assistance.
            </div>            
        </div>    
        <div className="col col-md-6 bg-light ">
          <h4 className="card-header">
            Mission
            </h4>
            <div className="card-body">
            The  Libraries are engaged in learning and discovery as essential participants in the educational community. We develop, organize, provide access to and preserve materials to meet the needs of present and future generations of students and scholars.
          </div>
        </div>    
        </div>
      </div>

      {/* Footer */}

      <div className="col-md-12 bg-dark">
        <div className="row align-items-end text-center row-flex mh-100" id="homeFooter">
          <div className="col text-light text-center d-flex justify-content-center">
          <p id="courtesyOf">Courtesy of SMKTelkomMalang</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default withRouter(Home);



      