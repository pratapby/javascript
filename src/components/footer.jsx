import {useState}  from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './footer.css'

function Home(){
    return <h2>Home</h2>;
  }
  function Solution(){
    return <h2>Solution</h2>;
  }
  
  function Testimonials(){
    return <h2>Testimonials</h2>;
  }
  function AboutUs(){
    return <h2>AboutUs</h2>;
  }

function Footer(){
    const[inputvalue, setinputvalue] = useState("");
    const Handleclick = (e) =>{
        setinputvalue(e.target.value)
    };
    const HandleButtonclick =()=>{
        console.log(`input value: ${inputvalue}`);
        setinputvalue("")
    };
    return(
            <div className= "Footer">
                <div className='child_footer'>
                <div className='feedback-section'>
                <p className='footer-brand'>Job 3.0</p>
                    <h3 className='newsletter'>SIGN UP FOR OUR NEWSLETTER NOW !</h3>
                <input type = "email" value={inputvalue} onChange={Handleclick} placeholder="Enter your Email.."/>
                    <button onClick={HandleButtonclick}>
                    Subscribe</button>

                    <div className='contactus'>
                        <span>contactUS@job3.0.com</span>
                        <span style={{marginLeft:"20px"}}>+1(123)4567890</span>

                    </div>
                </div>
                    
                     
                        
                             <div className='our-items' >
                                  <ul className='footer_list'>
                                      <li style={{fontWeight:"bold"}}>COMPANY</li>
                                      <li><Link to="/Home">HOME</Link></li>
                                      <li><Link to="/Solution  ">SOLUTION</Link></li>
                                      <li><Link to="/Testimonials">TESTIMONIALS</Link></li>
                                      <li><Link to="/AboutUs">ABOUTUS</Link></li>
                                  </ul>
                                  
                                <Routes>
                                 <Route path="/Home" element={<Home/>}/>
                                 <Route path="/Solution" element={<Solution/>}/>
                                 <Route path="/Testimonials" element={<Testimonials/>}/>
                                 <Route path="/AboutUS" element={<AboutUs/>}/>
                                </Routes>
                              </div>
                    <div className='footer_items'>
                      <ul className='footer_list'>
                          <li style={{fontWeight:"bold"}}>RESOURCES</li>
                          <li>PRIVACY POLICY</li>
                          <li>TERMS & CONDITIONS</li>

                      </ul>
                   </div>
                </div>
                 <hr style={{margin:"0 200px", border:"1px solid"}}/>
                 <p className='copyrights'> &#169; Copyright 2024, All Rights Reserved By Job 3.0</p>  
            </div>
            
    );

}
export default Footer;