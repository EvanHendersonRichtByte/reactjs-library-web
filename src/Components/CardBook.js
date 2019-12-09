import React from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

    function CardBook({book, refresh}){

        async function deleteUser(){
            swal({
                title: "Are you sure?",
                text: "Once deleted, data ("  + book.judul + ") will not be able to recover!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(async (willDelete) => {
            if (willDelete) {
                swal("data (" + book.nama + ") has been deleted!", {icon: "success",});
                    
                await axios.delete("book" + book.id)

                return refresh()
            } else {
                swal("data (" + book.nama + ") is safe!");
            }
            }); 


            return refresh()
        }
    return(
        <tr>
            <th scope="row">{book.no}</th>
            <th scope="row">{book.judul}</th>
            <th scope="row">{book.deskripsi}</th>
            <th scope="row">{book.pengarang}</th>
            <th scope="row">{book.penerbit}</th>
            <th scope="row">{book.isbn}</th>
            <th scope="row">{book.tahun}</th>
            <th scope="row">{book.stok}</th>
            <th scope="row">

                {/* Fix Please */}
                <Link className="btn btn-outline-dark" to={'/EditBook' + book.id}>Edit</Link>
                <button type="button" class="btn btn-outline-danger" onClick={deleteUser}>Delete</button>
            </th>
        </tr>
    )
}

export default CardBook
