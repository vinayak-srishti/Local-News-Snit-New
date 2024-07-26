import React from 'react'
import "../Admin/Adminhome.css"
import Adminsidebar from "./Adminsidebar"
import Adminviewuser from "./Adminviewuser"
import { date } from 'yup'
import Adminviewsingleuser from './Adminviewsingleuser'
import Admindashboard from './Admindashboard'
import Adminviewadvertiser from './Adminviewadvertiser'
import Adminviewsingleadvertiser from './Adminviewsingleadvertiser'
import Adminprivacy from './Adminprivacy'
import Adminviewcontributer from './Adminviewcontributer'
import Adminviewsinglecontributer from './Adminviewsinglecontributer'
import Adminaddrequest from './Adminaddrequest'
import Addsubscription from './Addsubscription'
import Viewsubscription from './Viewsubscription'
import Viewsubscribers from './Viewsubscription/Viewsubscribers'
// const url = "http://localhost:4004";
// const url="http://hybrid.srishticampus.in:4003/"



function Adminhome({data,url}) {
  return (
    <div className='container_adminprofile'>
        <Adminsidebar/>
        {data === "viewuser" ?(
            <Adminviewuser/>
        ):data == "viewsingleuser" ?(
          <Adminviewsingleuser/>
        ):data == "admindashboard" ?(
          <Admindashboard/>
        ):data == 'viewadvertiser' ?(
            <Adminviewadvertiser/>
        ):data=='viewsingleadvertiser' ?(
          <Adminviewsingleadvertiser url={url}/>
        ): data =='adminprivacy' ?(
          <Adminprivacy/>
        ): data == "viewcontributer" ?(
          <Adminviewcontributer/>
        ):data =="viewsinglecontributer" ?(
          <Adminviewsinglecontributer url={url}/>
        ):data=='requests'?(
          <Adminaddrequest url={url}/>
        ):data=='addsubscription'?(
          <Addsubscription/>
        ):data=='viewsubscription'?(
          <Viewsubscription/>
        ):data=='viewsubscribers'?(
          <Viewsubscribers/>
        )
        :
        "" }
    </div>
  )
}

export default Adminhome