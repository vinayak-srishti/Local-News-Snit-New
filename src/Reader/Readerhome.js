import React from 'react'
import img from "../Assets/imagess.png"
import "../Reader/Readerhome.css"
import Loginpage from "../Reader/ReaderLogin.js"

function Readerhome() {
    return (
        <div>
            <div>
                <div class="container">
                    <h1 className='carousel_heading'>Trending Topics</h1>

                    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-inner mb-5">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500sjkdcndjbcjdb"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>


                            <div class="carousel-item user_trendingNews_bg">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div class="col-lg-3">
                                        <div class="user_trendingNews user_trendingNews_bg">
                                            <img src={img} class="img-fluid" alt="" />
                                            <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                                and typesetting
                                                industry.
                                                Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s"
                                            </p>

                                            <div class="row">
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                                </div>
                                                <div class="col-6">
                                                    <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-3">
                                <div class="user_trendingNews user_trendingNews_bg">
                                    <img src={img} class="img-fluid" alt="" />
                                    <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                        and typesetting
                                        industry.
                                        Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s"
                                    </p>

                                    <div class="row">
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                        </div>
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="user_trendingNews user_trendingNews_bg">
                                    <img src={img} class="img-fluid" alt="" />
                                    <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                        and typesetting
                                        industry.
                                        Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s"
                                    </p>

                                    <div class="row">
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                        </div>
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="user_trendingNews_news user_trendingNews_bg">
                                    <img src={img} class="img-fluid" alt="" />
                                    <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                        and typesetting
                                        industry.
                                        Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s"
                                    </p>

                                    <div class="row">
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                        </div>
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="user_trendingNews user_trendingNews_bg">
                                    <img src={img} class="img-fluid" alt="" />
                                    <p class="user_trendingNews_content ">"Lorem Ipsum is simply dummy text of the printing
                                        and typesetting
                                        industry.
                                        Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s"
                                    </p>

                                    <div class="row">
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-thin fa-user"></i> Rahul</p>
                                        </div>
                                        <div class="col-6">
                                            <p className='pclass'><i class="fa fa-regular fa-clock"></i>1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Readerhome