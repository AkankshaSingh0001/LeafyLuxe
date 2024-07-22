import './service.css'
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import bbb from '../Image/servblock1.jpg'
import app1 from '../Image/applestore.png';
import app2 from '../Image/googlestore.png';
import s1 from '../Image/s1.jpeg';
import s2 from '../Image/s2.png';
import s3 from '../Image/s3.png';
import s5 from '../Image/s5.png';
import s6 from '../Image/s6.png';
import s7 from '../Image/s7.png';
import s8 from '../Image/s8.webp';
import s9 from '../Image/s9.webp';
import s10 from '../Image/s10.webp';

const service=()=>{

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


    return(
        <>
             <Nav2></Nav2>
            <Nav3></Nav3>
            <div className='serbg'>
                <div className='serbg1'><span>Services</span></div>
            </div>

            <div className='servbuu'>
                <p>Give us chance to serve you. Book your service. Out Team will reach to you by Call</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>

            <div className='row head1'>
                <div className='col-lg-5 col-md-6 col-sm-12 servs1'><div className='servs11'><img src={bbb} height={450} width={400}></img></div></div>
                <div className='col-lg-7 col-md-6 col-sm-12 servs2 sermain2'>
                    <div className='row'>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-certificate text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Certified Experts</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-tree text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Shrub Planting</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-exclamation-triangle text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Fertilization</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-trash text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Waste Disposal</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-scissors text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Grass Cutting</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 sermain3'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concirrrr">
                                    <i class="fa fa-leaf text-success" aria-hidden="true" height={2} width={2}></i>
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'><span className='serblo1s'>Garden Care</span></div>
                                        <div className='col-12'><span>A line about the service you've mentioned above.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className='galary'>
            <div className='Servmm'>
                <h2>References</h2><br></br>
                <p>These are only the references you can costomize your own. Our experts will make your home more homely to you and of your mood.<br></br></p>
            </div>
            <div className='row galarycards'>
                <h3>Exterior Designing</h3><br></br>
                <div className='col-4'>
                    <div><img src={s1} height={450}></img></div>
                    <div>Wooden wall with plants plates embedded in it.</div>
                </div>
                <div className='col-4'>
                    <div><img src={s2} height={450}></img></div>
                    <div>Door with Climbers.</div>
                </div>
                <div className='col-4'>
                    <div><img src={s3} height={450}></img></div>
                    <div>Wall full of pattern of grass.</div>
                </div>
            </div>
            <div className='row galarycards'><br></br>
                <h3>Interior Designing</h3>
                <div className='col-4'>
                    <div><img src={s8} height={450}></img></div>
                    <div>Room with fresh Plants which helps in breathing.</div>
                </div>
                <div className='col-4'>
                    <div><img src={s9} height={450}></img></div>
                    <div>Wall hanging made with flowers</div>
                </div>
                <div className='col-4'>
                    <div><img src={s10} height={450}></img></div>
                    <div>Wall in Kitchen with Spices</div>
                </div>
            </div>
            <div className='row galarycards'><br></br>
                <h3>Kitchen Gardening</h3>
                <div className='col-4'>
                    <div><img src={s5} height={450}></img></div>
                    <div>Belcony filled with flowers.</div>
                </div>
                <div className='col-4'>
                    <div><img src={s6} height={450}></img></div>
                    <div>Fresh Vegitables at home.</div>
                </div>
                <div className='col-4'>
                    <div><img src={s7} height={450}></img></div>
                    <div>Medicinal Herbs.</div>
                </div>
            </div>
            
        </div>
        <div className='servbuu'>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
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

export default service;

