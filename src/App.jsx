import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  
  return (
    <>
    <Navbar/>
      
      {/* Background Image */}
      <div className="background-img">
        <div id="on-background">
          <h1>Our Services</h1>
          <p id="headlines">Find Your Dream Job with Job3.0</p>
        </div>
      </div>
       
      <div className="container">
        <h4 className="title">What makes us Different from Others?</h4>
        <div className="grid">
          <div className="card">
            <h1>Personalized</h1>
            <p>Tailored Services</p>
          </div>
          <div className="card">
            <h1>Diverse</h1>
            <p>Job Options</p>
          </div>
          <div className="card">
            <h1>Empowering</h1>
            <p>Career Growth</p>
          </div>
          <div className="card">
            <h1>Supportive</h1>
            <p>Community</p> 
          </div>
        </div>
      </div>


      <div className="content">
        <div className="hero-section">
          <h1 className='para1'><p>Our Services</p></h1>
          <p className='para'>Discover the range of services we offer to match you with the perfect job.<br/> Let us simplify your job search process.</p>
        </div>
        <div className="services">
          <div className="service-card">
            <div className="service-number">1</div>
            <p className='para'>Personalized job recommendations based on your skills and preferences.</p>
          </div>
          <div className="service-card">
            <div className="service-number">2</div>
            <p className='para'>Access to a vast pool of job opportunities in diverse industries.</p>
          </div>
          <div className="service-card">
            <div className="service-number">3</div>
            <p className='para'>Resume building and optimization services to enhance your profile.</p>
          </div>
          <div className="service-card">
            <div className="service-number">4</div>
            <p className='para'>Job application tracking to keep you organized and informed.</p>
          </div>
          <div className="service-card">
            <div className="service-number">5</div>
            <p className='para'>Interview preparation resources to boost your confidence.</p>
          </div>
          <div className="service-card">
            <div className="service-number">6</div>
            <p className='para'>Career counseling to help you make informed decisions.</p>
          </div>
        </div>

        </div>
        <Footer/>
    </>
  );
}

export default App
