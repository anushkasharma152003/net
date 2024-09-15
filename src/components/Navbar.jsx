import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="div">
<nav>
    <div className="nav1">. </div>
        <div className="navv1">
        <div className="n1">
        <div className="n11"> <img src="logo.png " alt="" height='80px' id='n11' /></div>
           <div className="n12">
            <button id='english'>English</button>
                
            <button id='b111'>Sign In</button>
           </div>
        </div>
 
        <div className="n2">
            <div className="nn2">
            <span id='n2span' >Unlimited movies, TV shows and more</span>
            <p id='p1'>starts at 149. Cancel anytime .</p>
            <p id='p2'>ready to watch? Enter your to create or restart your membership</p>
            <div className="button">
                <input type="text"  id='input1' placeholder='Email Address' />
                <button>Get Started</button>
            </div>
           </div> 
            </div>
           
        </div>
     
     <div className="curved-line">
        .
     </div>
  


   
</nav>
    
</div>
  )
}

export default Navbar