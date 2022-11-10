import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AsyncStorage } from 'AsyncStorage';

const Header = () => {
    const navigate = useNavigate()

    const logOut = async () => {
        AsyncStorage.setItem('logIN', JSON.stringify(false));
        let login = await AsyncStorage.getItem("logIN")
        let _login = JSON.parse(login)
        console.log(_login)
        if (_login === false) {
            navigate('/')

            setInterval(() => {
                window.location.reload()
            }, 1000);
        }
    }
    return (
        <div>
            {/* partial:partials/_navbar.html */}
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" >
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="./images/logo.svg" className="mr-2" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="./images/logo-mini.svg" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end" >
                    <button style={{ boxShadow: "none" }} className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" >
                        <span className="icon-menu" />
                    </button>
                    <ul className="navbar-nav mr-lg-2" >
                        <li className="nav-item nav-search d-none d-lg-block">
                            <div className="input-group">
                                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                    <span className="input-group-text" id="search">
                                        <i className="icon-search" />
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="icon-bell mx-0" />
                                <span className="count" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <Link to='/SeeNews' className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="ti-info-alt mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">See News</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            2 new notifications
                                        </p>
                                    </div>
                                </Link>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="ti-settings mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            Private message
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="ti-user mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            2 days ago
                                        </p>
                                    </div>

                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" id="profileDropdown">
                                {/* <img src="./images/faces/face28.jpg" alt="profile" /> */}
                                <i className="fa-regular fa-1x fa-user" style={{ fontSize: '19px' }} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="ti-settings text-primary" />
                                    Settings
                                </a>
                                <a onClick={logOut} className="dropdown-item">
                                    <i className="ti-power-off text-primary" />
                                    Logout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-settings d-none d-lg-flex">
                            <a className="nav-link" href="#">
                                <i className="icon-ellipsis" />
                            </a>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="icon-menu" />
                    </button>
                </div>
            </nav>
            {/* partial */}
        </div>
    )
}

export default Header