import React from 'react'
import image from '../SourceFiles/website.PNG'

const YourWebsite = () => {
    return (
        <div className='main-panel'>
            <div className='content-wrapper'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-5 m-5'>
                                <h1>This page will enroute you to your profile</h1>
                                <button className='mt-4 btn btn-primary btn-lg' style={{ borderRadius: "30px" }}><h2> VISIT </h2></button>
                            </div>
                            <div className='col-lg-5'>
                                <div className='mt-5 mb-5'>
                                    <img src={image} alt="cover" style={{ height: "250px", borderRadius: "5px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourWebsite