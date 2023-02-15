import React, { useState } from 'react'
import { DataKaryawan } from '../components/DataKaryawan';
import '../css/karyawan.css'

class Karyawan extends React.Component {

  // komponen lifecycle
  constructor(props) {
    super(props);
    this.state = {
      karyawan: []
    };
  }

  componentDidMount() {
    this.setState({ karyawan: DataKaryawan });
  }

  render() {
    const { karyawan } = this.state;

    return (
      <div className='karyawanDiv'>
        <h1 className='karyawanText'>Data Karyawan</h1>
        <table className="uk-table uk-table-divider">
          <thead>
            <tr>
              <th>NIP</th>
              <th>Name</th>
              <th>Position</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((k) => (
              <tr key={k.id}>
                <td>{k.nip}</td>
                <td>{k.nama}</td>
                <td>{k.jabatan}</td>
                <td>{k.alamat}</td>
                <td>{k.phone}</td>
                <td>{k.email}</td>
                <td>
                  <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle={`target: #modal-close-default-${k.id}`}>Details</button>
                  <div id={`modal-close-default-${k.id}`} data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                      <button className="uk-modal-close-default" type="button" data-uk-close></button>
                      <h1 className="uk-modal-title">Detail Karyawan</h1>
                      <div className='detailsContainer'>
                        <div>
                          <h5><b>ID:</b> {k.id}</h5>
                          <h5><b>Name:</b> {k.nama}</h5>
                          <h5><b>NIP:</b> {k.nip}</h5>
                          <h5><b>Position: </b>{k.jabatan}</h5>
                          <h5><b>Address: </b>{k.alamat}</h5>
                          <h5><b>Phone Number: </b>{k.phone}</h5>
                          <h5><b>Email Address: </b>{k.email}</h5>
                          <h5><b>Created at: </b>{k.createdAt}</h5>
                          <h5><b>Created by: </b>{k.createdBy}</h5>
                        </div>
                        <img className="avatar" src={k.foto} alt="foto karyawan" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default Karyawan;
