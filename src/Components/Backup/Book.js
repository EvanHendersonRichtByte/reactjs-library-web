import React from 'react'
import CardBook from './CardBook'
import {Link } from 'react-router-dom'
import {Instance} from './Instance'
import AddBook from './AddBook'

class Book extends React.Component{
constructor(){
    super()
    this.state = {
        book : [],
        find: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

componentDidMount = async() => {
    await Instance.get('/book')
    .then(response=>this.setState({
        book: response.data
     }))
    console.log(this.state)
}

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}

onSubmit(e){
    e.preventDefault()
    
    Instance
    .post('/book/10/0',{
        find: this.state.find
    })
    .then(res=>this.setState({
        book: res.data.book
     }))
    .then(res =>{
        if(res){
            console.log(this.state.find)
            // swal("Buku Berhasil Ditambahkan", " ", "success");
            // this.props.history.push('/book')
        }
        else{
            // swal("Buku Gagal Ditambahkan", " ", "error");
        }
    })
}
    
render(){
    const renderData = this.state.book.map(book=>{
        return (
            <CardBook book={book} key={book.id} refresh={this.componentDidMount}/>
        )
    })
    return(
        <div className="col col-md-12 d-inline">
            <h5>Data Buku</h5>
            <Link className="btn btn-dark" to={'/AddBook'}>Tambah Buku</Link>
            <hr />
            <nav className="navbar navbar-light bg-light">
            <form className="form-inline" noValidate onSubmit={this.onSubmit}>
                <input className="form-control mr-sm-2" type="search" name="find" placeholder="Search" aria-label="find" onChange={this.onChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav>
            <hr />
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>No</th>
                        <th scope='col'>Judul</th>
                        <th scope='col'>Deskripsi</th>
                        <th scope='col'>Pengarang</th>
                        <th scope='col'>ISBN</th>
                        <th scope='col'>Tahun</th>
                        <th scope='col'>Stok</th>
                        <th scope='col'>Option</th>
                    </tr>
                    
                </thead>
                <tbody>
                {renderData}
                </tbody>
            </table>
        </div>
        
    )
}
}

export default Book