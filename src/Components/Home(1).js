import React from 'react';
import "./CSS/App.css";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <body id="bodyhome" className="text-center">
      <div id="bgberanda" className="container text-center text-light d-flex justify-content-center">
      <div className="d-flex flex-row col-md-4 bg-transparent position-relative text-center" id="hometextmaster">
      <h2 id="Hometext">ReactJS</h2>
      <hr/>
      <h2 id="Hometext2">Is Fun</h2>
      </div>
      </div>
      <Link id="Hometext3" className="w-25 d-inline-block btn btn-success text-center text-white" to="/User">Click Here!</Link>

      </body>
    );
  }
}

export default Home;
