import './Main.css';
import Slider from './Slider.jsx';
import home_img from '../Image/home_back.jpeg';
import homeabout from '../Image/homeabout.jpg';
import rev1 from '../Image/rev1.jpeg';
import rev2 from '../Image/rev2.jpeg';
import rev3 from '../Image/rev3.jpeg';
import team1 from '../Image/team2.jpeg';
import team2 from '../Image/team3.jpeg';
import team3 from '../Image/team1.jpeg';
import app1 from '../Image/applestore.png';
import app2 from '../Image/googlestore.png'
import { Link } from 'react-router-dom';


const main=()=>{

  const isLoggedIn = localStorage.getItem('logindata');

    const handleBookNow = () => {
      if (isLoggedIn) {
        // If user is logged in, redirect to '/bookservice'
        window.location.href = '/bookservice';
      } else {
        // If user is not logged in, redirect to '/login'
        window.location.href = '/login';
      }
    };

    const reviews = [
        { text: "Aman Jaswal", imageUrl: rev1, review: "I recently used the interior design services from this website, and I'm extremely satisfied. The incorporation of plants into my living space has brought such a refreshing vibe. The designers were attentive to my preferences and created a space that feels both cozy and stylish. Highly recommended!" },
        { text: "Ommany Jaamy", imageUrl: rev2, review: "I've always wanted to bring more greenery into my home, but I wasn't sure how to do it without compromising on style. This website provided the perfect solution with their interior design services. The designers seamlessly integrated plants into the decor, creating a harmonious environment that I love coming back to every day." },
        { text: "Omex Quany", imageUrl: rev3, review: "As someone who values sustainability and eco-friendliness, I was thrilled to discover this website's interior design services. They not only helped me achieve my dream of a greener home but also educated me on the benefits of different plant varieties. The end result exceeded my expectations, and I couldn't be happier with my space." }
      ];
    return(
        <>
            <div className='row main1'>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                    <div className='textadj'><span className='h1main'>Make your Home Healthier</span><br></br><span className='h2main'>place to Live.<br></br><button className='mainser' onClick={handleBookNow}>Book Service</button></span></div>
                    <div className='cirm1'></div>
                </div>
                <div className='col-lg-9 col-md-9 col-sm-12 '><img src={home_img} className='main_img'></img></div>
            </div>

            <sectionhome class="layout_padding about_section">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="row">
                     <div class="row">
                        <div class="col-md-7 p-relative r-left">
                           <div class=" back_blog text_align_center padding_right_left_15">
                              <img src={homeabout} alt="#" className='imgcir'/>
                           </div>
                        </div>
                        <div class="col-md-5 heading_s1">
                           <div className="full">
                              <h3 className='fullh1'>About</h3><br></br>
                              <p>Welcome to LeafyLuxe, your one-stop destination for all things green and beautiful! We are passionate about bringing the joy of gardening and the serenity of nature into your life, whether you're a seasoned green thumb or just beginning your journey into the world of plants.</p>
                           </div>
                           <div class="">
                              <a class="read_more_bt" href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </sectionhome>
      <section2home>
      <div class="section-content text-center">
          <div class="row">
            <div class="col-md-4">
              <div class="icon-box wow fadeInUp" data-wow-delay="0.2s"> <div className='iconhomes'><i class="fa fa-life-ring" aria-hidden="true"></i></div>
                <br></br><h5 className='fullh1'>24X7 Support</h5>
                <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box wow fadeInUp" data-wow-delay="0.4s"><div className='iconhomes'> <i class="fa fa-truck" aria-hidden="true"></i></div>
              <br></br><h5 className='fullh1'>Fast Delivery</h5>
                <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-box wow fadeInUp" data-wow-delay="0.6s"><div className='iconhomes'><i class="fa fa-link" aria-hidden="true"></i></div>
              <br></br><h5 className='fullh1'>Build Trust</h5>
                <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
              </div>
            </div>
          </div>
          <div className='mainbutton'><a href="#" class="about-btn">Learn More</a> </div></div>
      </section2home>
        <sectionhome3>
        <div>
      <center><h2 className='fullh1'>TESTIMONIAL</h2></center>
      <Slider reviews={reviews} />
    </div>
        </sectionhome3>

        <sectionhome4 class="team section-padding" data-scroll-index='3'>
  <div class="containerww">
    <div class="row">
      <div class="col-md-12">
        <div class="sectioner-header text-center">
          <h3 className='sec4ppp'>Our Team</h3>
          <span class="line"></span>
          <p className='sec4p'>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
        </div>
        <div class="section-contentss text-center">
          <div class="row">
            <div class="col-md-4">
              <div class="team-detail wow bounce" data-wow-delay="0.2s"> <img src={team1} class="img-fluid"/>
                <h5 className='sec4pp'>Akanksha Singh</h5>
                <p>CEO & Founder</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-detail wow bounce" data-wow-delay="0.4s"> <img src={team2} class="img-fluid"/>
                <h5 className='sec4pp'>Addya Dixit</h5>
                <p>Web Developer</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-detail wow bounce" data-wow-delay="0.6s"> <img src={team3} class="img-fluid"/>
                <h5 className='sec4pp'>Nisha Sharma</h5>
                <p>Markating Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</sectionhome4>


<sectionhome5 class="download section-padding">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="sectioner-header text-center white">
          <h3 className='sce5p'>Download Our App</h3>
          <span class="line"></span>
          <p className="sce5pp">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
        </div>
      </div>
      <div class="col-md-12">
        <div class="section-contents text-center">
          <ul>
            <li><a href="#"><img src={app1} class="wow fadeInUp" data-wow-delay="0.4s"/></a></li>
            <li><a href="#"><img src={app2} class="wow fadeInUp" data-wow-delay="0.7s"/></a></li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</sectionhome5>


        </>
    )
}

export default main;