import React, { useState } from 'react'
import {AppBar,Tab,Tabs,Toolbar,Typography} from '@mui/material'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:"black"}} position='sticky'>
           <Toolbar>
             <AssuredWorkloadIcon/>
             <Typography>Counselling and visitor management system</Typography>
             <Tabs textColor='inherit' indicatorColor='primary' 
             sx={{ml:"auto"}} value={value} onChange={(e,val)=>setValue(val)}>
               <Tab LinkComponent={NavLink} to='/signup' label='Signup'/>
               <Tab LinkComponent={NavLink} to='/Login' label='Login'/>
               <Tab LinkComponent={NavLink} to='/AddCounsellor' label='Add Counsellor'/>
               <Tab LinkComponent={NavLink} to='/visitor' label='Add Visitor'/>
               <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
               <Tab LinkComponent={NavLink} to='/contact' label='Contact'/>
               {/* <Tab LinkComponent={NavLink} to='/toggle' label='Toggle'/> */}
               <Tab LinkComponent={NavLink} to='/fetchregistrations' label='Registrations'/>
             </Tabs>
           </Toolbar> 
        </AppBar>
    </div>
  )
}
export default Header