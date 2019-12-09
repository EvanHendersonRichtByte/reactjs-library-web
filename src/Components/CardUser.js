import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function CardUser({user, refresh}){
  function deleteUser(){
          swal({
              title: "Are you sure?",
              text: "Once deleted, data ("  + user.nama + ") will not be able to recover!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
          })
          .then(async (willDelete) => {
          if (willDelete) {
              swal("data (" + user.nama + ") has been deleted!", {icon: "success",});

              await axios.delete("http://localhost/UKL/deleteUser.php?id=" + user.id)

              return refresh()
          } else {
              swal("data (" + user.nama + ") is safe!");
          }
          }); }

          function editUser(){
                  swal({
                      title: "Do you want to edit?",
                      text: "Once Edited, data ("  + user.nama + ") will not be able to recover!",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                  })
                  .then(async (willEdit) => {
                  if (willEdit) {
                      swal("data (" + user.nama + ") has been deleted!", {icon: "success",});
                      return refresh()
                  } else {
                      swal("data (" + user.nama + ") is safe!");
                  }
                  }); }

    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th scope="row">
                <button type="button" class="btn btn-dark" onClick={editUser + user.id}>Edit</button>
                <button type="button" class="btn btn-dark" onClick={deleteUser}>Delete</button>
            </th>
        </tr>
    )
}

export default CardUser
