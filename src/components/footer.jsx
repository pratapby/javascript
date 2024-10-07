import {useState}  from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
                             <li><Link to="/Home">Home</Link></li>
                             <li><Link to="/Solution  ">Solution</Link></li>
                             <li><Link to="/Testimonials">Testimonials</Link></li>
                             <li><Link to="/AboutUs">AboutUs</Link></li>
                         </ul>
                         
                       <Routes>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Solution" element={<Solution/>}/>
                        <Route path="/Testimonials" element={<Testimonials/>}/>
                        <Route path="/AboutUS" element={<AboutUs/>}/>
                       </Routes>
                    </div>
                
            </div>

    );

}
export default Footer;