import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import image1 from '../SourceFiles/featured-02.jpg'
import image2 from '../SourceFiles/featured-03.jpg'
import image3 from '../SourceFiles/featured-04.jpg'

const fileTypes = ["JPG", "PNG", "GIF"];

const AddPortfolio = () => {

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='card'>
                    <div className='card-body'>
                        <h2>Add your images for the portfolio from here:</h2>
                        <div className='fileuploader'>
                            <p>Images will be automatically uploaded!</p>
                            <FileUploader className='' handleChange={handleChange} name="file" types={fileTypes} />
                        </div>
                    </div>
                </div>
                <div className='card border-primary mt-3'>
                    <div className="card-body">
                        <h2>Delete your portfolio images:</h2>
                        <div className="d-flex">


                            <div className="card m-2" style={{ width: '18rem' , backgroundColor:'#7DA0FA' }}>
                                <img src={image1} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title"> title</h5>
                                    <a href="#" className="btn btn-danger">Delete</a>
                                </div>
                            </div>


                            <div className="card m-2" style={{ width: '18rem' , backgroundColor:'#7DA0FA'  }}>
                                <img src={image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> title</h5>
                                    <a href="#" className="btn btn-danger">Delete</a>
                                </div>
                            </div>


                            <div className="card m-2" style={{ width: '18rem', backgroundColor:'#7DA0FA'  }}>
                                <img src={image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> title</h5>
                                    <a href="#" className="btn btn-danger">Delete</a>
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