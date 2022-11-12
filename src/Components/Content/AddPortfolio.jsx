import React, { useState } from 'react'
import Baseurl from '../SourceFiles/Baseurl'
import image1 from '../SourceFiles/featured-02.jpg'
import image2 from '../SourceFiles/featured-03.jpg'
import image3 from '../SourceFiles/featured-04.jpg'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'

toast.configure()
const AddPortfolio = () => {
    const [file, setFile] = useState('');
    const [data, setData] = useState([])

    const postCollection = () => {
        const userObj = {
            image: file,
        }
        axios.post(`${Baseurl}AddPortfolio`, userObj)
            .then((res) => {
                console.log(res)
                toast.info('Image uploaded succesfully')
            })
            .catch((err) => {
                console.log(err)
                toast.warn('Error while uploading image')
            })
    }

    const getCollection = () => {
        axios.get(`${Baseurl}fetch_portfolio_byid/6`)
            .then((res) => {
                console.log(res)
                setData(res.data.portfolio)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => { getCollection() }, [])

    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='card cardBorder'>
                    <div className='card-body'>
                        <h2>Add your images for the portfolio from here:</h2>
                        <div className='fileuploader'>

                            <label htmlFor="formFileLg" className="form-label">Add your portfolio images from here;</label>
                            <input onchange={(e) => setFile(e.target.files[0])} className="form-control form-control-lg" id="formFileLg" type="file" />

                            <button className="btn btn-primary mt-2 ms-2" onClick={postCollection}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='card cardBorder mt-3'>
                    <div className="card-body">
                        <h2>Delete your portfolio images:</h2>
                        <div className="portfolioImages">

                            <div className='row'>
                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                <div className='col-lg-3'>
                                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                                        <img src={items.image} className="card-img-top" alt="..." />
                                                        <div className="card-body ">
                                                            {/* <h5 className="card-title"> title</h5> */}
                                                            <a className="btn btn-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }



                                <div className="col-lg-3">
                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title"> title</h5>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title"> title</h5>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title"> title</h5>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title"> title</h5>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card  m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                        <img src={image1} className="card-img-top" alt="..." />
                                        <div className="card-body ">
                                            <h5 className="card-title"> title</h5>
                                            <a href="#" className="btn btn-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPortfolio