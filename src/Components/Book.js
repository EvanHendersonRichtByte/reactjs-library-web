import React from 'react'
import CardBook from './CardBook'
import {Link } from 'react-router-dom'
import {instance} from './instance'

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
    await instance.get('/book/10/0')
    .then(response=>this.setState({
        book: response.data.book
     }))
    console.log(this.state)
    }

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}

onSubmit(e){
    e.preventDefault()
    
    instance
    .post('/book/10/0',{
        find: this.state.find
    })
    .then(res=>this.setState({
        book: res.data.book
     }))
    .then(res =>{
        if(res){
            console.log(this.state.find)
            throw res
        }
        else{
            throw res
        }
    })
}
    
render(){
    const renderData = this.state.book.map(book=>{
        return (
            <CardBook book={book} key={book.id} refresh={this.componentDidMount} />
        )
    })
    return(
        <div className="container d-block">
            <hr />
            <nav class="navbar navbar-light bg-light">
            <form class="form-inline" noValidate onSubmit={this.onSubmit}>
                <input class="form-control mr-sm-2" type="search" name="find" placeholder="Search" aria-label="find" onChange={this.onChange} />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <Link className="btn btn-dark ml-2" to={'/AddBook'}>Tambah Buku</Link>
            <Link className="btn btn-dark ml-2" to={'/'}>Back</Link>

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
                    <tr>
                        <td>1</td>
                        <td>Yasin</td>
                        <td>Wajib dibaca</td>
                        <td>Galur Arasy</td>
                        <td>2626</td>
                        <td>1989</td>
                        <td>75</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
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