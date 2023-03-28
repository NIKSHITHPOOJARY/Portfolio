import React, { useState } from 'react'
import "./styles.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import { FacebookOutlined, FacebookTwoTone, GitHub, LinkedCameraOutlined, LinkedCameraRounded, LinkedIn, Twitter } from '@mui/icons-material';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [contactForm, setContactForm] = useState({
    name: '',
    contactNo: '',
    email: '',
  });

  const handleInputChange = (event) => {
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${contactForm.name}\nContact No: ${contactForm.contactNo}\nEmail: ${contactForm.email}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'about' && 'active'}`}
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
        <button
          className={`tab-button ${activeTab === 'education' && 'active'}`}
          onClick={() => handleTabChange('education')}
        >
          Education
        </button>
        <button
          className={`tab-button ${activeTab === 'experience' && 'active'}`}
          onClick={() => handleTabChange('experience')}
        >
          Experience
        </button>
        <button
          className={`tab-button ${activeTab === 'projects' && 'active'}`}
          onClick={() => handleTabChange('projects')}
        >
          Projects
        </button>
        <button
          className={`tab-button ${activeTab === 'skills' && 'active'}`}
          onClick={() => handleTabChange('skills')}
        >
          Skills
        </button>
        <button
          className={`tab-button ${activeTab === 'resume' && 'active'}`}
          onClick={() => handleTabChange('resume')}
        >
          Resume
        </button>
        <button
          className={`tab-button ${activeTab === 'links' && 'active'}`}
          onClick={() => handleTabChange('links')}
        >
          Links
        </button>
      </div>
      {activeTab === 'about' && (
        <div className="tab-content">
          <h2 className="tab-title">About</h2>
          <div className='tab-content-1'>
            <img className='profile-pic' src='./mypic.jpeg' />
            <p className="tab-text">
              Hello, my name is Nikshith, I am from Udupi,Karnataka, I am a BCA Graduate from St Aloysius College Autonomous Mangaluru  aspiring to be a Full Stack Developer.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'education' && (
        <div className="tab-content">
          <h2 className="tab-title">Education</h2>
          <p className="tab-text">
            <b> REACTJS FRONT END DEVELOPER COURSE (ONLINE) </b>  <br />
            Learn code Online (2022)  <br /> <br />
            <b>CERTIFICATION COURSE - MERN Stack </b> <br />
            PrepBytes Elevation Academy (DEC 2021- APR 2022) <br /> <br />

            <b> BACHELORS OF COMPUTER APPLICATIONS(BCA) </b>  <br />
            St. Aloysius College Autonomous Mangaluru (2018-2021)  <br /> <br />

            <b> PUC </b>  <br />
            S.V.P.U College, Kundapura (2016-2018)  <br /> <br />

            <b> SSLC </b>  <br />
            S.V.E.M School, Kundapura (2015-2016) <br /> <br />

          </p>
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="tab-content">
          <h2 className="tab-title">Work Experience</h2>
          <p className="tab-text">
            <b> Full Stack Developer (JUN 2022 - OCT 2022) </b>  <br />
            Sodio Technologies Pvt Ltd    <br /> <br />

            <b>Front End Developer Intern (FEB 2022 - MAY 2022) </b> <br />
            SuperBolt Technologies Pvt Ltd <br /> <br />
          </p>
        </div>
      )}
      {activeTab === 'projects' && (
        <div className="tab-content">
          <h2 className="tab-title">Projects</h2>
          <p className="tab-text">
            <b> RENTAL HUB APP </b>  <br />
            Rental Hub app<br /> <br />
            <b>  SHOOTING GAME  </b>  <br />
            2 player shooting game using javascript    <br /> <br />
            <b> Landing Pages </b>  <br />
            Responsive landing pages using Reactjs    <br /> <br />
            <b> Block Chain Applications </b>  <br />
            Web apps on block chain   <br /> <br />
          </p>
        </div>
      )}
      {activeTab === 'skills' && (
        <div className="tab-content">
          <h2 className="tab-title">Skils</h2>
          <p className="tab-text">
            HTML, CSS, JAVASCRIPT, REACTJS, NODEJS(BASICS),  MANUAL TESTING
          </p>
        </div>
      )}

      {activeTab === 'resume' && (
        <div className="tab-content">
          <h2 className="tab-title">Resume</h2>
          <p className="tab-text-1">
            <button className='resume-button'>
              <a href='https://drive.google.com/file/d/1gHcBwzW36oomytFqbhFv9b4gpEJGr1-w/view?usp=share_link' style={{ textDecoration: "none", color: "white" }} target="_blank">Open Resume </a>
            </button>
          </p>
        </div>
      )}

      {activeTab === 'links' && (
        <div className="tab-content">
          <h2 className="tab-title">Social Media Links</h2>
          {/* <p className="tab-text"> */}
          <div className='social-media-links'>
            <a href='https://github.com/NIKSHITHPOOJARY' className='icons-g' target='_blank'>
              <GitHub fontSize='large' />
            </a>
            <a href="https://www.linkedin.com/in/nikshith-poojary-17b23019b/" className='icons' target='_blank'>
              <LinkedIn fontSize='large' />
            </a>
            <a href='https://www.instagram.com/_nikshii/' className='icons-i' target='_blank'>
              <InstagramIcon fontSize='large' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100006067154851&mibextid=ZbWKwL' className='icons' target='_blank'>
              <FacebookTwoTone fontSize='large' />
            </a>
            <a href='https://twitter.com/Nikshit82853047' className='icons' target='_blank'>
              <Twitter fontSize='large' />
            </a>
          </div>
          {/* </p> */}
        </div>
      )}

      {/* contact me */}
      {/* <div className="tab-content">
        <h2 className="tab-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="contactNo">Contact No:</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={contactForm.contactNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */}



    </div>
  )
}

export default Portfolio
