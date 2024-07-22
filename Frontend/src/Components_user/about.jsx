import './about.css'
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import app1 from '../Image/applestore.png';
import app2 from '../Image/googlestore.png'


const About=()=>{
    return(
        <>
            <Nav2></Nav2>
            <Nav3></Nav3>
            <div className='aboserbg'>
                <div className='aboserbg1'><span>About</span></div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-5 col-sm-12'><div class="bg-image"></div></div>
                <div className='col-lg-6 col-md-7 col-sm-12'>
                    <div className='col-12 ap1'><span>About us.</span></div>
                    <div className='col-12 ap2'>
                        <div className='row'>
                            <div className='col-6 ap3'><span>Welcome to LeafyLuxe, your premier destination for all things related to plants, gardening, and interior decor.</span> </div>
                            <div className='col-6 ap4'><span>At LeafyLuxe, we are passionate about bringing the beauty and tranquility of nature into your home and workspace.<br></br>
                            Our mission is to inspire and empower individuals to create vibrant and sustainable living spaces through the power of plants. We believe that surrounding 
                            ourselves with greenery not only enhances the aesthetics of our surroundings but also contributes to our overall well-being and happiness.</span></div>
                        </div>
                    </div>
                    <div className='col-12 ap5'></div>
                </div>
            </div><br></br><br></br>
            <sectionhome5 class="download section-padding">
  <div class="container-fluid kk">
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


export default About;