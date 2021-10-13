import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [uname, setUname] = useState('')
    const [pswd, setPswd] = useState('')
    return (
        <div className="body-background bg-success">
            <h2 className="page-header">File Storage Application</h2>
            <p className="text-center text-white head-para">Store all your files in one place</p>
            <div className="login-form mt-5">
                <h4 className="mt-3 mb-3 text-success">Login here</h4>
                <form>
                    <label for="uname" className="form-label text-success">Username:</label>
                    <input type="text" id="uname" className="form-control" value={uname} onChange={event => { setUname(event.target.value) }} /><br />
                    <label for="pswd" className="form-label text-success" value={pswd} onChange={event => setPswd(event.target.value)}>Password:</label>
                    <input type="text" id="pswd" className="form-control" /><br />
                    <div className="d-flex justify-content-evenly mt-3">
                        <Link to={'/home'}>
                        <button type="button" className="btn btn-success">Login</button>
                        </Link>
                        <Link to={'/signup'}>
                            <button type="button" class="btn btn-outline-success">Sign Up</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
