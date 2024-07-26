import React from 'react'
import "../Reader/Navbar.css"

function Navbar() {
    return (
        <div className='container-fluid main-margin'>
            <nav className="navbar navbar-expand-lg">
                <div className='user_navbar'>
                    
                    <ul class="nav nav-underline nav_items">
                    <div className='search_input'>
                        <input type='text' placeholder='Search' className='search_input'/>
                    </div>
                        <li class="nav-item navigation-first">
                            <a class="nav-link" href="#" style={{textDecoration:'none' ,color:'black'}}>Link</a>
                        </li>
                        <li class="nav-item navigation">
                            <a class="nav-link" href="#" style={{textDecoration:'none' ,color:'black'}}>Link</a>
                        </li>
                        <li class="nav-item navigation">
                            <a class="nav-link" href="#" style={{textDecoration:'none' ,color:'black'}}>Link</a>
                        </li>
                        <li class="nav-item navigation">
                            <select className='nav-item select' >
                                <option>India</option>
                                <option>America</option>
                                <option>Austrilia</option>
                                <option>Japan</option>

                            </select>
                        </li>
                        <li class="nav-item navigation">
                            <a class="nav-link" href="#" style={{textDecoration:'none' ,color:'black'}}>Link</a>
                        </li>
                        <li class="nav-item button_login navigation">
                            <button type='submitt' className='borderbutton'>Login</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar