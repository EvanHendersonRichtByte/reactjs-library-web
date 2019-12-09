import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import "./CSS/App.css";

class EditUser extends React.Component{
constructor(){
 super()
 this.state={
 id : '',
 nama : '',
 alamat : '',
 }
}
componentDidMount = async () => {
 const id = this.props.match.params.id
 const res = await axios.get("http://localhost/UKL/getUser.php?id="+id)
 this.setState({
 id: res.data.id,
 nama : res.data.nama,
 alamat : res.data.alamat
 })
}
handleChange = (e) =>{
 this.setState({ [e.target.name] : e.target.value })
}
handleSubmit = async(e) => {
 e.preventDefault()
 console.log(this.state)
 await axios.post("http://localhost/UKL/editUser.php", this.state)
 this.props.history.push('/user');
}
render(){
 const {id,nama,alamat} = this.state
 return(
   <body id="edituser" className=" text-white text-center">
   <h5>Edit User</h5>
 <div className="d-flex justify-content-center text-center" >
  <form onSubmit={this.handleSubmit}>
    <div className="form-group w-20">
      <label for="id">Id</label>
      <input type="text" className="form-control" name="id" value={id} onChange={this.handleChange} />
    </div>
    <div className="form-group">
      <label for="nama">Nama</label>
      <input type="text" className="form-control" name="nama" value={nama} onChange={this.handleChange} />
    </div>
    <div className="form-group">
      <label for="alamat">Alamat</label>
      <input type="text" className="form-control" name="alamat" value={alamat} onChange={this.handleChange} />
    </div>
      <button type="submit" className="btn btn-dark">Submit</button>
      <Link to="/User" className="btn btn-dark">Back</Link>
   </form>
 </div>
 </body>
 )
}
}
export default EditUser
