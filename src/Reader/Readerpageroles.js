import React from 'react'
import "../Reader/Readerpageroles.css"
import { Link } from 'react-router-dom'

function Readerpageroles() {
    return (
        <div className='col-9'>
            <div className='reader_pageroles'>
                <div className='container'>
                <div className='row'>
                    <div className='reader_pagerole_title'>
                        <p>Page Roles</p>
                    </div>
                    <div className='col-6'>
                        <div className='reader_pageroles_box'>
                            <h4>Contributor</h4>
                            <p>A news contributor is an<br/>individual who actively<br/>contributes
                            articles,stories,<br/>or content to a news<br/>platform or publication.This<br/>role is vital in the realm of <br/>journalism and media
                            as<br/>contributors are responsible for generating informative,<br/>engaging, and timely<br/>content for the audience.</p>
                        </div>
                        
                    </div>
                    <div className='col-6 '>
                    <div className='reader_pageroles_box'>
                            <h4>Advertiser</h4>
                            <p>A news contributor is an<br/>individual who actively<br/>contributes
                            articles,stories,<br/>or content to a news<br/>platform or publication.This<br/>role is vital in the realm of <br/>journalism and media
                            as<br/>contributors are responsible for generating informative,<br/>engaging, and timely<br/>content for the audience.</p>
                        </div>
                    </div>

                    <div className='col-6 reader_pagerole_regbuttonone'>
                       <Link to="/contributorsignup"> <button type='submit' className='btn btn-primary'>Register</button></Link>
                    </div>
                    <div className='col-6 reader_pagerole_regbuttonone'>
                    <Link to="/advertisersignin">  <button type='submit' className='btn btn-primary'>Register</button></Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Readerpageroles