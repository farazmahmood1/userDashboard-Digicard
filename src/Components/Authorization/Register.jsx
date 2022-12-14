import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Baseurl from '../SourceFiles/Baseurl'
import { useNavigate } from "react-router-dom";


const Register = () => {
    let navigate = useNavigate()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfrmPassword, setCnfrmPassword] = useState('')
    const [fieldStatus, setFieldStatus] = useState(false)

    const signUp = () => {
        if (!fname && !lname && !email && !password && !cnfrmPassword) {
            setFieldStatus(true)
            toast.warn('Please fill all fields')
        }
        else {
            const userObj = {
                firstname: fname,
                lastname: lname,
                email: email,
                password: password,
                password_confirmation: cnfrmPassword
            }

            axios.post(`${Baseurl}createcustomer`, userObj)
                .then((res) => {
                    console.log(res)
                    toast.success('Registerred successfully')
                    setInterval(() => {
                        // window.location.reload(true)
                        navigate('/'); 
                    }, 2000)
                })
                .catch((err) => {
                    console.log(err)
                    toast.warn('Error while registering user')
                })
        }
    }


    return (
        <div>
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="../../images/logo.svg" alt="logo" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                                <div className="pt-3">
                                    <div className='d-flex'>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg me-1" style={{ borderColor: fieldStatus === true && fname === "" ? 'red' : '#CED4DA' }} onChange={(e) => setFname(e.target.value)} id="exampleInputUsername1" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg ms-1" style={{ borderColor: fieldStatus === true && lname === "" ? 'red' : '#CED4DA' }} onChange={(e) => setLname(e.target.value)} id="exampleInputUsername1" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" style={{ borderColor: fieldStatus === true && email === "" ? 'red' : '#CED4DA' }} onChange={(e) => setEmail(e.target.value)} id="exampleInputUsername1" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" style={{ borderColor: fieldStatus === true && password === "" ? 'red' : '#CED4DA' }} onChange={(e) => setPassword(e.target.value)} id="exampleInputUsername1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-lg" style={{ borderColor: fieldStatus === true && cnfrmPassword === "" ? 'red' : '#CED4DA' }} id="exampleInputEmail1" onChange={(e) => setCnfrmPassword(e.target.value)} placeholder="Confirm Password" />
                                    </div>

                                    {/* <div className="mb-4">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                I agree to all Terms &amp; Conditions
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="mt-3">
                                        <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={signUp}>SIGN UP</a>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Already have an account? <Link to='/' className="text-primary">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>

        </div>
    )
}

export default Register