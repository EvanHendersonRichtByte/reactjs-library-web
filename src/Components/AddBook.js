import React from 'react'
import swal from 'sweetalert'
import {instance} from './instance'

class AddBook extends React.Component{
constructor(){
    super()
    this.state={
        judul : '',
        deskripsi : '',
        pengarang : '',
        penerbit : '',
        isbn : '',
        tahun : '',
        stok : '',
    }
}

handleChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value })
}

handleSubmit = async(e) => {
    e.preventDefault()
    await instance.post("/book/update", this.state)
    swal("Good job!", "Thanks You!", "success");
    console.log(this.state)
    this.props.history.push('/book');
}
render(){
    return(
        <div className="container" style={{width: 24 + "rem"}} >
            <h5>Tambah Buku</h5>
            <form onSubmit={this.handleSubmit}>
            <input type="hidden" name="id" onChange={this.handleChange} />
            <div className="form-group">
                <label>Judul</label>
                <input type="text" className="form-control" name="judul" placeholder="Enter Number judul" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="deskripsi">Deskripsi</label>
                <input type="text" className="form-control" name="deskripsi" placeholder="Enter Number deskripsi" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pengarang">Pengarang</label>
                <input type="text" className="form-control" name="pengarang" placeholder="Enter pengarang" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="penerbit">Penerbit</label>
                <input type="text" className="form-control" name="penerbit" placeholder="Enter penerbit" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input type="text" className="form-control" name="isbn" placeholder="Enter isbn" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="tahun">Tahun</label>
                <input type="text" className="form-control" name="tahun" placeholder="Enter tahun" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="stok">Stok</label>
                <input type="text" className="form-control" name="stok" placeholder="Enter stok" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
}

export default AddBook
