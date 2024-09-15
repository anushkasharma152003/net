import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="m1">
            <p>Trending Now</p>
            <br />
           <button id='s1'>India</button>
           <button id='s2'>Movies</button>

            <br />
            <br />
            <div className="image">
               <div className="img"><img src="image1.webp" alt="" height='200px'/>
               <span>1 </span>
               <div className="di">Recently Added</div></div> 
               <div className="img"><img src="image2.webp" alt="" height='200px'/>
               <span>2</span></div> 
               <div className="img"> <img src="image3.webp" alt="" height='200px'/>
               <span>3</span></div>
               <div className="img"> <img src="image4.webp" alt="" height='200px'/>
               <span>4</span></div>
               <div className="img"><img src="image5.webp" alt="" height='200px'/>
               <span>5</span></div> 
              

            </div>

            <h2 className='h2'> More reasons to join</h2>
            <div className="more">
            
              <br />
              <div className="col">
                <h2>Enjoy on your tv</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veritatis.</p>              </div>
              <div className="col">
                <h2>Watch everywhere </h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veritatis.</p>              </div>
              <div className="col">
                <h2>Download your show to watch to watch online</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veritatis.</p>              </div>
              <div className="col">
                <h2>Create profile for kids</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veritatis.</p>              </div>
            </div>

            <br /><br />
            <h2 className='f2'>Frequently Asked Questions</h2>
            <div className="last">
           
              <div className="ques">
                <p>What is Netflix?</p>
                <span>+</span>
              </div>
              <div className="ques">
              <p>how much does netflix cost?</p>
              <span>+</span>
              </div>
              <div className="ques">
              <p>Where can i watch?</p>
              <span>+</span>
              </div>
              <div className="ques">
              <p>how do I cancel?</p>
              <span>+</span>
              </div>
              <div className="ques">
              <p>What can i watch on Netflix?</p>
              <span>+</span>
              </div>
              <div className="ques">
              <p>Is Netflix good for kids?</p>
              <span>+</span>
              </div>
            </div>

          <br />
          <br />
           
           <div className="ext">
            <p>Ready to watch? Enter your email to create your restart your membership .</p>
            <input type="text" id='text1' placeholder='Email address' />
            <button>Get Started</button>
           </div>
        </div>
    </div>
  )
}

export default Main