import React, {Component} from 'react'
import {login} from './AuthFunction'
import swal from 'sweetalert';
import './CSS/App.css'
import {Link} from 'react-router-dom'
import Logo from "./Pictures/FazeClan.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        login(user).then(res => {
            if(res){
                swal("Login Berhasil", " ", "success");
                this.props.history.push('/')
            }
            else{
                swal("Login Gagal", " ", "error");
            }
        })
    }

    render(){
        return(
          <div id="bodyInput" className="text-light">
                        <form noValidate onSubmit={this.onSubmit} className="form-inline justify-content-center">
                          <div id="inputdown" className="col-md-2 rounded border border-danger text-center bg-dark">
                            <img id="inputlogo" src={Logo} alt="img"/>
                            <hr className="bg-danger" size="30"/>
                            <div className="col text-center">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" 
                                    className="form-control my-4 border border-danger text-center" 
                                    name="email" 
                                    placeholder="Enter Email" 
                                    value={this.state.email}
                                    onChange={this.onChange}>
                                </input>
                            </div>
                            <div className="col text-center">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                    className="form-control my-4 border border-danger text-center" 
                                    name="password" 
                                    placeholder="Enter Password" 
                                    value={this.state.password}
                                    onChange={this.onChange}>
                                </input>
                            </div>
                            <button id="inputsubmit" type="submit" className="btn btn-danger text-center">
                               <FontAwesomeIcon icon={faSignInAlt}/>&nbsp; Sign in
                            </button>
                            <div className="mt-3">
                              <Link id="inputsubmitregister" to="/Register" className="text-decoration-none pt-4">Dont Have Account? Click Here!</Link>
                            </div>
                            </div>
                        </form>
            </div>
        )
    }
}
export default Login


