import Nav2 from './Nav2';
import Nav3 from './Nav3';
import './contact.css';
import app1 from '../Image/applestore.png';
import app2 from '../Image/googlestore.png'

import React, { useState } from 'react';
import axios from 'axios';

const Contact=()=>{


    const isLoggedIn = localStorage.getItem('logindata');

    const handleBookNow = () => {
      if (isLoggedIn) {
        // If user is logged in, redirect to '/bookservice'
        
      } else {
        // If user is not logged in, redirect to '/login'
        window.location.href = '/login';
      }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8080/submit-review', formData);
          alert('Review submitted successfully');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } catch (err) {
          console.error('Error submitting review:', err);
          alert('Error submitting review. Please try again.');
        }
      };

    return(
        <>
            <Nav2></Nav2>
            <Nav3></Nav3>
            <div className='conserbg'>
                <div className='conserbg1'><span>Contact</span></div>
            </div>
            <div className="container-fluid py-5 cont">
            <div className="container-fluid">
                <div className="text-center mx-auto mb-5 wow fadeInU" data-wow-delay="0.1s">
                    <h1 className="mb-3 over">Get In Touch</h1>
                    <p className='conss'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                        eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concir">
                            <i className="fa fa-map-marker-alt fa-2x conicon"></i>
                        </div>
                        <h6 className='over'>123 Street, New York, USA</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concir">
                            <i className="fa fa-envelope-open fa-2x conicon"></i>
                        </div>
                        <h6 className='over'>LeafyLuxe@gmail.com</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 concir">
                            <i className="fa fa-phone-alt fa-2x conicon"></i>
                        </div>
                        <h6 className='over'>+012 345 6789</h6>
                    </div>
                </div>
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn condetail" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className='condowm'>Download Now</a>.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name" name="name" onChange={handleChange} value={formData.name} required></input>
                                                <label>Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email" name="email" onChange={handleChange} value={formData.email} required></input>
                                                <label>Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject" name="subject" onChange={handleChange} value={formData.subject } required></input>
                                                <label>Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" name="message" onChange={handleChange} value={formData.message} required></textarea>
                                                <label>Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={handleBookNow}>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="position-relative h-100">
                                <iframe class="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                 allowfullscreen="" aria-hidden="false"
                                ></iframe>
                            </div>
                        </div>
                        <sectionhome5 class="download section-padding">
  <div class="container-fluid">
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
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        </>
    )
}

export default Contact;