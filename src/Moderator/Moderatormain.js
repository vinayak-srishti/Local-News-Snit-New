import React from 'react'
import Moderatorsidebar from './Moderatorsidebar'
import Moderatorrequest from './Moderatorrequest'
import Readreabout from '../Reader/Readreabout'
import Readerprivicay from '../Reader/Readerprivicay'
import Allreports from './Allreports'
import Viewsinglereport from './Viewsinglereport'
import Moderatorviewcontribuorrequest from './Moderatorviewcontribuorrequest'
import Viewsinglecontributor from "./Viewsinglecontributor"

function Moderatormain({data}) {
  const url = "http://localhost:4004";
  // const url="http://hybrid.srishticampus.in:4003/"


  return (
    <div style={{display:"flex"}}>
        <Moderatorsidebar/>
        {data=="request" ?(
            <Moderatorrequest url={url}/>
        ):data==='about' ?(
          <Readreabout/>
        ):data==="privacy" ?(
          <Readerprivicay/>
      ):data=="allreports" ?(
        <Allreports url={url}/>
      ):data=="contributerrequest" ?(
        <Moderatorviewcontribuorrequest url={url}/>
      ):data=="viewsinglecontributer"?(
        <Viewsinglecontributor url={url}/>
      ):

        ""}
    </div>
  )
}

export default Moderatormain