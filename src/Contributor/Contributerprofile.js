import React from 'react'
import "../Reader/Readerprofile.css"
import Contributersidebar from './Contributersidebar'
import Contributerviewprofile from './Contributerviewprofile'
import Contributeraddnews from './Contributeraddnews'
import Contributereditprofile from './Contributereditprofile'
import Readreabout from '../Reader/Readreabout'
import Readerprivicay from '../Reader/Readerprivicay'

function Contributerprofile({data}) {
  return (
    <div className='container_readerprofile'>
        <Contributersidebar/>
        {data === 'contributerviewprofile' ? (
            <Contributerviewprofile/>
        ):data=== 'contributereditprofile' ?(
          <Contributereditprofile/>
        ) :data==='about'?(
          <Readreabout/>
        ):data==='privacy' ?(
          <Readerprivicay/>
        ):
        ''}
    </div>
  )
}

export default Contributerprofile