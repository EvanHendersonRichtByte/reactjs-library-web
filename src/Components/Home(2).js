import React from 'react';
import "./CSS/App.css";
import {Link} from 'react-router-dom';
class Home extends React.Component {
  render() {
    return (
      <body id="homeBody" className="text-light">
      <div id="nav">
      <nav className="navbar text-center text-light d-flex justify-content-center " id="nav" >
        <div className="d-flex inline">
        <div className="col-md-2 mb-2 text-danger">
          <h2 id="future">universal</h2>
        </div>
        <div className="col-md-2 mt-5 ml-5">
          <h2 id="future">library</h2>
        </div>
        </div>
      <Link id="navec" className="col-md-2" to="/User">Contacts</Link>
      <Link id="navec" className="col-md-2" to="/User">About</Link>
      <Link id="navec" className="col-md-2" to="/User">Projects</Link>
      <Link id="navec" className="col-md-2" to="/"    >Logout</Link>
      </nav>
      </div>
      </body>
    );
  }
}
export default Home;
