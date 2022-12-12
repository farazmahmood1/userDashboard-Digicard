import { AsyncStorage } from 'AsyncStorage'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Baseurl from '../SourceFiles/Baseurl';

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [fieldStatus, setFieldStatus] = useState(false)

    const signIn = () => {
        if (!name && !password) {
            toast.warning('Please fill all fields')
            setFieldStatus(true)
        }
        else if (name && !password) {
            toast.warning('Please enter your password')
        }
        else if (!name && password) {
            toast.warn('Please enter your email')
        }
        else {
            const userObj = {
                email: name,
                password: password
            }
            axios.post(`${Baseurl}customerlogin`, userObj)
                .then((res) => {
                    console.log(res)
                    toast.success('Logging In')

                    AsyncStorage.setItem('LogIn', JSON.stringify(true));
                    AsyncStorage.setItem('name', JSON.stringify(name));
                    AsyncStorage.setItem('password', JSON.stringify(password))

                    setInterval(() => {
                        window.location.reload(true)
                    }, 1500)
                })
                .catch(err => {
                    console.log(err)
                    toast.warn("Incorrect Credentials");
                })
        }
    }

    return (
        <div>
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light rounded-2 text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="./../../images/logo.svg" alt="logo" />
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">Sign in to continue.</h6>
                                <div className="pt-3">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-lg" style={{ borderColor: fieldStatus === true && name === "" ? 'red' : '#CED4DA' }} onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-lg" style={{ borderColor: fieldStatus === true && password === "" ? 'red' : '#CED4DA' }} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="mt-3">
                                        <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn " onClick={signIn} >SIGN IN</a>
                                    </div>
                                    {/* <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <div>
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                            </div>

                                        </div>
                                        <a href="#" className="auth-link text-black ">Forgot password?</a>
                                    </div> */}
                                    {/* <div className="mb-2">
                                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                            <i className="ti-facebook mr-2" />Connect using facebook
                                        </button>
                                    </div> */}
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <Link to='/Register' className="text-primary">Create</Link>
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

export default Login