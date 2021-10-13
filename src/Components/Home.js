import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {

    const [search, setSearch] = useState('')

    return (
        <div className="body-background bg-success position-relative">
            <h2 className="page-header">File Storage Application</h2>
            <p className="text-center text-white head-para">Store all your files in one place</p>
            <Link to={'/'}>
                <button type="button" class="btn btn-outline-light position-absolute top-0 end-0">Logout</button>
            </Link>
            <div className="home-sect mt-5">
                <h3 className="text-center text-success pt-3">What do you want to do today?</h3>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-outline-success">Upload New</button>
                    <button className="btn btn-success ms-4">View Uploads</button>
                </div>
                <div className="container col-8">
                    <input type="text" className="form-control mt-3" placeholder="Enter file name" value={search} onChange={e=>setSearch(e.target.value)} />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success mt-3">Search</button>
                    </div>

                </div>

            </div>

            <div className="home-sect2 mt-5">
                <h3 className="text-center text-success pt-3">Recently uploaded files</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Filename</th>
                                <th scope="col">Uploaded By</th>
                                <th scope="col">User Type</th>
                                <th scope="col">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>file1</td>
                                <td>Otto</td>
                                <td>user</td>
                                <td><button type="button" class="btn btn-outline-success">Download</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>file2</td>
                                <td>Thornton</td>
                                <td>admin</td>
                                <td><button type="button" class="btn btn-outline-success">Download</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>file3</td>
                                <td>Mathew</td>
                                <td>user</td>
                                <td><button type="button" class="btn btn-outline-success">Download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home
