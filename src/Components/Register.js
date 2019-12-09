import React from 'react';
import "./CSS/App.css";
import Logo from "./Pictures/Cloud9.png";
import axios from 'axios';
import {Link} from 'react-router-dom';


class Register extends React.Component {
  constructor(){
    super()
    this.state={
      name : '',
      email : '',
      password :'',
    }
  }
  
  handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    console.log(this.state)
    await axios.post("http://127.0.0.1:8000/api/register",this.state)
    this.props.history.push('/Login');
  }
  render(){
    return(
      <body id="bodyRegisterInput">
      <form className="mt-5 form-inline justify-content-center" onSubmit={this.handleSubmit} id="registerForm">
      <div id="inputdown" className="h-100 col-md-2 rounded border border-primary text-center bg-light">
      <img id="inputlogo"src={Logo} alt="img"/>
      <hr className="bg-primary" size="30"/>
      <div className="col text-center">
        <label for="name">
        <input name="name" className=" form-control my-4 border border-primary text-center" onChange={this.handleChange} placeholder="Masukkan Nama" id="inputplaceholder"/ >
        </label>
      </div>
      <div>
        <label for ="email">
        <input name="email" className="form-control my-4 border border-primary text-center" onChange={this.handleChange} placeholder="Masukkan Email" id="inputplaceholder"/ >
        </label>
      </div>
      <div>
        <label for ="password">
        <input name="password" className="form-control my-4 border border-primary text-center" onChange={this.handleChange} placeholder="Masukkan Password" id="inputplaceholder"/ >
        </label>
      </div>
      <div className="d-flex text-center justify-content-center">
      <button type="submit" className="btn btn-primary text-center mr-4"> Register</button>
      <Link className="btn btn-primary" to="/">Back</Link>
      </div>
      </div>
      </form>
      </body>
    )
  }
}

export default Register;
