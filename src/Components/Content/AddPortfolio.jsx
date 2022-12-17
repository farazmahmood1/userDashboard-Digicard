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
    const [roleID, setUserID] = useState()
    const [userImages, setUserImages] = useState();
    const [loader, setLoader] = useState(false)

    const postCollection = () => {

        var formdata = new FormData();
        formdata.append("image", file, "[PROXY]");
        formdata.append("user_id", roleID);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        fetch(`${Baseurl}post_image`, requestOptions)
            .then(response => response.text())
            .then(result => {
                toast.info('Image uploaded successfully')
                console.log(result)
            })
            .catch(error => {
                toast.warn('Error while uploading image')
                console.log('error', error)
            });
    }

    const getCollection = () => {
        setLoader(true)
        axios.get(`${Baseurl}get_image/${roleID}`)
            .then((res) => {
                console.log(res.data.Data)
                setData(res.data.Data)
                setLoader(false);
                localStorage.setItem('image', JSON.stringify(res.data.Data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteImage = () => {
        axios.post(`${Baseurl}delete_image/${userImages}`)
            .then((res) => {
                console.log(res)
                toast.warn('Image removed successfully')

            })
            .catch((err) => {
                console.log(err)
                toast.error('Error while deleting image')
            })
    }

    console.log(userImages)
    const SetLocalImages = async () => {
        try {
            let img = await localStorage.getItem('image');
            let parsed_images = JSON.parse(img)
            if (parsed_images) {
                setUserImages(parsed_images.id)
            }
        } catch {
            return null;
        }
    }

    // console.log(roleID)
    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                setUserID(parsed_user.image)
            }
        } catch {
            return null;
        }
    }

    useEffect(() => {
        SetLocalImages();
    })
    useEffect(() => {
        SetLocalLogin();
    }, [])

    useEffect(() => { getCollection() }, [])
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='card cardBorder'>
                    <div className='card-body'>
                        <h2>Add your images for the portfolio from here:</h2>
                        <div className='fileuploader'>

                            <label htmlFor="formFileLg" className="form-label">Add your portfolio images from here;</label>
                            <input onChange={(e) => setFile(e.target.files[0])} className="form-control form-control-lg" id="formFileLg" type="file" />

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
                                    loader === true ?
                                        <>
                                            <div className='d-flex justify-content-center' style={{ marginTop: '130px' }}>
                                                <div className='position-absolute top-50 start-50 translate-middle'>
                                                    <div className="loader">Loading...</div>
                                                </div>
                                            </div>

                                        </> :

                                        data.map((items, index) => {
                                            return (
                                                <>
                                                    <div key={index} className='col-lg-6'>
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