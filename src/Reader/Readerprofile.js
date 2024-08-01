import React from 'react'
import "../Reader/Readerprofile.css"
import Readerprofilesidebar from "./Readerprofilesidebar"
import Readerprofileaccountinfo from './Readerprofileaccountinfo'
import Readerpageroles from './Readerpageroles'
import Readereditprofile from './Readereditprofile'
import Readerprivicay from './Readerprivicay'
import Readreabout from './Readreabout'
import Savednews from './Savednews'
import Viewsubscriptionplans from './Subscriptions/Viewsubscriptionplans'
import Viewmysubscribedplan from './Subscriptions/Viewmysubscribedplan'
import Upgradeplans from './Subscriptions/Upgrade/Upgradeplans'

function Readerprofile({data}) {
  // const url = "http://localhost:4004";
  const url="http://hybrid.srishticampus.in:4003/"


  return (
    <div className='container_readerprofile'>
        <Readerprofilesidebar className='Readerprofilesidebar'/>
        {data === "account" ?(
            <Readerprofileaccountinfo className='Readerprofileaccountinfo'/>
        ):data === "pagerole" ?(
          <Readerpageroles />
        ):data==="editprofile" ?(
          <Readereditprofile/>
        ):data=="readerprivacy" ?(
          <Readerprivicay/>
        ):data=="readerabout" ?(
          <Readreabout/>
        ):data=='savednews' ?(
          <Savednews url={url}/>
        ):data=='reader-viewsubscriptionplans' ?(
          <Viewsubscriptionplans url={url}/>
        ):data=='reader-viewsubscribedplan' ?(
          <Viewmysubscribedplan url={url}/>
        ):data=='reader-upgradeplan' ?(
          <Upgradeplans url={url}/>
        ):
        ''}
    </div>
  )
}

export default Readerprofile