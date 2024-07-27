import React from 'react'
import Advertisersidebar from './Advertisersidebar'
import Advertiserviewuploads from './Advertiserviewuploads'
import Advertiserupload from './Advertiserupload'
import Advertiserviewaccount from './Advertiserviewaccount'
import Advertisereditprofile from './Advertisereditprofile'
import Aboutadvertiser from './Aboutadvertiser'
import Privacyadvertiser from './Privacyadvertiser'
import Advertisementviewsingleadds from './Advertisementviewsingleadds'

function Advertisermain({data}) {
  const url = "http://localhost:4004";
  // const url="http://hybrid.srishticampus.in:4003/"


  return (
    <div style={{display:"flex"}}>
        <Advertisersidebar url={url}/>
        {data== "viewpro" ?(
            <Advertiserviewuploads url={url}/>
        ): data=="uploadadd" ?(
            <Advertiserupload/>
        ):data=="viewaccountmy" ?(
          <Advertiserviewaccount/>
        ):data =="advertiser_editprofile" ?(
          <Advertisereditprofile/>
        ): data =="advertiser_about" ?(
          <Aboutadvertiser/>
        ):data == "advertiser_privacy" ?(
          <Privacyadvertiser/>
        )
        :""}
    </div>
  )
}

export default Advertisermain