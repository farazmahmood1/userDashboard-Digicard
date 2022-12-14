import React, { useState } from 'react'
import Baseurl from '../SourceFiles/Baseurl'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'
import allImagesUrl from '../SourceFiles/BaseUrlImage'
import { AsyncStorage } from 'AsyncStorage';


toast.configure()
const AddPortfolio = () => {

    const [file, setFile] = useState('');
    const [data, setData] = useState([])
    const [roleID, setoleID] = useState()

    const postCollection = () => {
        // const userObj = {
        //     image: file,
        //     user_id: roleID
        // }
        // axios.post(`${Baseurl}post_image`, userObj)
        //     .then((res) => {
        //         console.log(res)
        //         toast.info('Image uploaded succesfully')
        //         setInterval(() => {
        //             window.location.reload()
        //         }, 1500);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         toast.warn('Error while uploading image')
        //     })

        var formdata = new FormData();
        formdata.append("image", file, "[PROXY]");
        formdata.append("user_id", roleID);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}post_image`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }

    const getCollection = () => {
        axios.get(`${Baseurl}get_image/${roleID}`)
            .then((res) => {
                console.log(res.data.Data)
                setData(res.data.Data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteImage = () => {
        axios.post(`${Baseurl}delete_image/${roleID}`)
            .then((res) => {
                console.log(res)

                toast.warn('Image removed successfully')

            })
            .catch((err) => {
                console.log(err)
                toast.error('Error while deleting image')
            })
    }

    console.log(roleID)
    const SetLocalLogin = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                setoleID(parsed_user.user_id)
            }
        } catch {
            return null;
        }
    }

    useEffect(() => {
        getCollection();
        SetLocalLogin();
    }, [])

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
                                                    <div className="card m-2" style={{ width: '', backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                                        <img src={`${allImagesUrl.itemImage}${items.image}`} style={{ height: '145px' }} className="card-img-top" alt="..." />
                                                        <div className="card-body ">
                                                            {/* <h5 className="card-title"> title</h5> */}
                                                            <a onClick={deleteImage} className="btn btn-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPortfolio