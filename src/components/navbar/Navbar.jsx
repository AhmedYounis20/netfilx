import React, {useState } from 'react'
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
const Navbar = () => {
  const [isScrolled,setIsScrolled]=useState(false);
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset!==0);
    console.log(window.pageYOffset);
    return ()=> (window.onscroll=null);
  }
  return (
    <div className={ isScrolled ? 'navbar scrolled':"navbar"}>
        <div className="container">
            <div className="left">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix" />
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>New and Popular</span>
                    <span>My List</span>
            </div>
            <div className="right">
              <Search className='icon' />
              <span>KID</span>
              <Notifications className='icon'/>
              <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg" alt="profile"/>
             <div className="profile">
              <ArrowDropDown className='icon'/>
              <div className="options">
                <span>settings</span>
                <span>logout</span>
              </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
