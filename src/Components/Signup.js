import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const [suname, setsuname] = useState('');
    const [spswd, setspswd] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className="body-background bg-success">
            <h2 className="page-header">File Storage Application</h2>
            <p className="text-center text-white head-para">Store all your files in one place</p>
            <div className="signup-form mt-5">
                <h4 className="mt-3 mb-3 text-success">New User? Signup here</h4>
                <form>
                    <label for="email" className="form-label text-success">Enter your email:</label>
                    <input type="text" id="email" className="form-control" value={email} onChange={event=>setEmail(event.target.value)} /><br />
                    <label for="uname" className="form-label text-success">Enter new username:</label>
                    <input type="text" id="uname" className="form-control" value={suname} onChange={event=>setsuname(event.target.value)} /><br />
                    <label for="pswd" className="form-label text-success">Enter new password:</label>
                    <input type="text" id="pswd" className="form-control" value={spswd} onChange={event=>setspswd(event.target.value)} /><br />
                    <div className="d-flex justify-content-evenly">
                        <button type="button" class="btn btn-outline-success">Sign Up Now</button>
                    </div>
                    <Link to={'/'}>
                        <p className="text-center mt-3 text-success">Go Back!</p>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Signup
