import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import slide4 from './slide4.jpg';
import slide5 from './slide5.jpg';
import slide6 from './slide6.jpg';
import slide7 from './slide7.jpg';
import main1 from './main1.jpg';
import main2 from './main2.jpg';
import main3 from './main3.jpg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
 const [visibleSection, setVisibleSection] = useState(null);
 const navigate = useNavigate(); 
 useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.app-container > div');
      let currentSection = null;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = index;
        }
      });

      setVisibleSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 25,
 };

 return (
  <div style={{ flexGrow: 1, paddingTop: '2790px' }}>
  <Container style={{ marginTop: '113.6px' }}> 
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold', color: 'darkblue' }}>
          WELCOME TO TASK MANAGEMENT SYSTEM
        </Typography>
        <Button
    variant="contained"
    style={{ backgroundColor: '#FFC436', color: 'white' }}
    onClick={() => navigate('/SignIn')} // Navigate to the SignIn page
>
    Start for Free
</Button>

      </div>
      <div className="app-container" style={{ marginTop: '1px' }}>
        <Slider {...sliderSettings}>
          {[
            { src: slide1, alt: 'Slide 1', content: 'Working On a Project' },
            { src: slide2, alt: 'Slide 2', content: 'Cooking for your family' },
            { src: slide3, alt: 'Slide 3', content: 'Doing Regular Workouts' },
            { src: slide4, alt: 'Slide 4', content: 'Travelling on a Vacation' },
            { src: slide5, alt: 'Slide 5', content: 'Family Reunions and Parties' },
            { src: slide6, alt: 'Slide 6', content: 'Organizing Parties' },
            { src: slide7, alt: 'Slide 7', content: 'Taking Your Dog for a Walk' },
          ].map((slide, index) => (
            <div key={index} className={`card ${visibleSection === 0 ? 'visible' : ''}`}>
              <img src={slide.src} alt={slide.alt} />
              <div className="card-content">{slide.content}</div>
            </div>
          ))}
        </Slider>
      </div>
      {/* New section with a single slide */}
      <div className="app-container" style={{ marginTop: '37.8px' }}>
        <div className={`card card-second-section ${visibleSection === 1 ? 'visible' : ''}`}>
          <img src={main1} alt="Main Slide" />
          <div className="card-content">
            <Typography variant="h4">The Fastest Way To Get Tasks Out Of Your Head.</Typography>
            <Typography variant="body1">
              Type just about anything into the task field and Todoist’s one-of-its-kind natural
              language recognition will instantly fill your to-do list.
            </Typography>
          </div>
        </div>
      </div>
      {/* New section with a single slide */}
      <div className="app-container" style={{ marginTop: '37.8px' }}>
        <div className={`card card-third-section ${visibleSection === 2 ? 'visible' : ''}`}>
          <div className="content-container">
            <Typography variant="h4">Reach that mental clarity you’ve been longing for.</Typography>
            <Typography variant="body1">
              Your tasks are automatically sorted into Today, Upcoming, and custom Filter views
              to help you prioritize your most important work.
            </Typography>
          </div>
          <div className="image-container">
            <img src={main2} alt="Main Slide" />
          </div>
        </div>
      </div>
      {/* New section with a single slide */}
      <div className="app-container" style={{ marginTop: '37.8px' }}>
        <div className={`card card-fourth-section ${visibleSection === 3 ? 'visible' : ''}`}>
          <img src={main3} alt="Main Slide" />
          <div className="card-content">
            <Typography variant="h4">Where all your tasks can finally coexist.</Typography>
            <Typography variant="body1">
              Give your team a shared space to collaborate and stay on top of it all –
              alongside but separate from your personal tasks and projects.
            </Typography>
          </div>
        </div>
      </div>
      {/* New section for the caption */}
      <div className="caption-container">
 <Typography variant="body1" style={{ color: '#00A9FF', fontWeight: 'bold', fontSize: '36px' }}>
    "Taskman makes it easy to go as simple or as complex as you want"
 </Typography>
</div>

    </Container>
    </div>
 );
};

export default Home;