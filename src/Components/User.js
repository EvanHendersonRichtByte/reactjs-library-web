import React from 'react'
import axios from 'axios'
import CardUser from './CardUser'
import {Link } from 'react-router-dom'

class User extends React.Component{
constructor(){
    super()
    this.state = {
        user : []
    }
}

componentDidMount = async() => {
    await axios.get("http://localhost/UKL/User.php")
    .then(response=>this.setState({
        user: response.data
    }))
    console.log(this.state)
}

render(){
    const renderData = this.state.user.map(user=>{
        return (
            <CardUser user={user} key={user.id} refresh={this.componentDidMount}/>
        )
    })
    return(
<body className="container-fluid text-light text-center" id="bodyuser">
        <div>
            <h5>Data User<i className="fa fa-500px"></i></h5>
            <hr />
            <table className='table text-light'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nama</th>
                        <th scope='col'>Alamat</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {renderData}
                </tbody>
            </table>
            <div className="navbar d-flex align-items-center justify-content-bottom">
            <Link to="/" className="btn btn-dark">Home</Link>
            <Link className="btn btn-dark" to={'/addUser'}>Tambah User</Link>
            <Link className="btn btn-dark" to="/">Logout</Link>
            </div>
        </div>
</body>
    )
}
}

export default User
