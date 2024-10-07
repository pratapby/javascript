import {Routes, Route, Link} from 'react-router-dom';
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

function Navbar()  {
  return (
        <div className='nav'>
          <nav >
            <ul className='navbar'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Solution">Solution</Link></li>
              <li><Link to="/Testimonials">Testimonials</Link></li>
              <li><Link to="/AboutUs">AboutUs</Link></li>
            </ul>
          </nav>

          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Solution" element={<Solution/>}/>
           <Route path="/Testimonials" element={<Testimonials/>}/>
           <Route path="/AboutUs" element={<AboutUs/>}/>
          </Routes>
        </div>
  );
}
export default Navbar;