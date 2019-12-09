import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './CSS/App.css'
export default class Pegawai extends Component {
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    Add = () =>  {
        //menghosongkan isi variable nip,nama,dan alamat
        //set action menjadi "insert"
        this.setState({
            nip: "",
            nama: "",
            alamat: "",
            action: "insert"
        });
    }

    Edit =(item) => {
        // menggisikan isi variabel nip,nama,alamat sesuai dengan data yang akan diedit
        // - set action menjadi "update"
        this.setState({
            nip:item.nip,
            nama:item.nama,
            alamat:item.alamat,
            action:"update"
        });
    }

    getPegawai = () => {
        let base_url = "http://localhost/api/public";
        // mengakses api untuk mengambil data pegawai
        axios.get(base_url+"/employee")
        .then(response => {
            //mengisikan data dari respon API ke array pegawai
            this.setState({pegawai:response.data.pegawai});
        })
        .catch(error => {
            console.log(error);
        });
    }

    findPegawai = (event) => {
        let base_url = "http://localhost/api/public";
        if (event.keyCode === 13) {
            //menampung data keyword pencarian
            let formData = new FormData();
            formData.append("find",this.state.search);
            //mengakses api untuk mengambil data pegawai berdasarkan keyword
            axios.post(base_url+"/employee",formData)
            .then(response => {
                //mengisikan data dari respon API ke array pegawai
                this.setState({pegawai:response.data.pegawai});
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    SavePegawai = (event) => {
        event.preventDefault();
        //menampung data nip,nama dan alamat dari form ke dalam FormData() untuk dikirim
        let base_url = "http://localhost/api/public";
        let formData = new FormData();
        formData.append("nip",this.state.nip);
        formData.append("nama", this.state.nama);
        formData.append("alamat",this.state.alamat);

        //mengirim data ke API untuk disimpan pada database
        axios.post(base_url+"/employee/save", formData)
        .then(response => {
            //jika proses simpan berhasil,memanggil data yang terbaru
            this.getPegawai();
        })
        .catch(error => {
            console.log(error);
        });
        //menutup form modal
        $("#modal").modal('hide');
    }

    Drop = (nip) => {
        let base_url = "http://localhost/api/public";
        //memanggil url API untuk menghapus data pada database
        if (window.confirm('Apakah anda yakin ingin menghapus data ini?')) {
            axios.delete(base_url+"/employee/drop/" +nip)
            .then(response => {
                //jika proses hapus data berhasil,memanggil data yang terbaru
                this.getPegawai();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    componentDidMount(){
        // method yang pertama kali dipanggil pada saat load page
        this.getPegawai();
    }

    constructor(){
        super();
        this.state = {
            pegawai: [], /*array pegawai untuk menampung data pegawai*/
            nip: "",
            nama: "",
            alamat: "",
            action: "",
            search: "",
        }
    }

    render() {
        return(
            <div className="m-3 card">
                <div className="card-header bg-info text-white col-md-12 mh-50 d-flex">
                    Data Pegawai
                </div>
                    <div className="buttonAdvisor">                
                    <button className="btn btn-success" onClick={this.Add} data-toggle="modal" data-target="#modal">
                        Tambah Data
                    </button>
                    <Link to="/" className="btn btn-success pl-100">Kembali</Link>
                    </div>

                <div className="card-body">
                    <input type="text" className="form-control mb-2" name="search" value={this.state.search} onChange={this.bind} onKeyUp={this.findPegawai} placeholder="Pencarian.."/>
                    {/* tampilkan tabel pegawai */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pegawai.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.nip}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td className="">
                                            <button className="btn btn-sm btn-info m-1" data-toggle="modal" data-target="#modal" onClick={()=> this.Edit(item)}>
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger m-1" onClick={()=> this.Drop(item.nip)}>
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    
                {/* Modal Form Pegawai */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                         <div className="modal-content">
                             <div className="modal-header">
                                 Form Pegawai
                             </div>
                             <form onSubmit={this.SavePegawai}>
                                 <div className="modal-body">
                                 NIP
                                 <input type="number" name="nip" value={this.state.nip} onChange={this.bind} className="form-control" required/>
                                 Nama
                                 <input type="text" name="nama" value={this.state.nama} onChange={this.bind} className="form-control" required/>
                                 Alamat
                                <input type="text" name="alamat" value={this.state.alamat} onChange={this.bind} className="form-control" required/>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-sm btn-success" type="submit">
                                        Simpan
                                    </button>
                                </div>
                             </form>
                         </div>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}