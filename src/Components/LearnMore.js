import './CSS/App.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
class LearnMore extends Component {
 render(){
   return(
  <div className="col-md-12 d-block text-center" id="learnMoreBody">
    <div>
 <h1 className="UnderDeveloping text-primary">Under Developing &nbsp;<FontAwesomeIcon icon={faWrench}/></h1>
    </div>
    
    <div>
    <Link to="./" className="btn btn-primary w-25">Home</Link>
    </div>
  </div>
 );

}
}
export default LearnMore;



      