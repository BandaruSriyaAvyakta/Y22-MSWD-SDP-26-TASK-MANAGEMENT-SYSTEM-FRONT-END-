import React, { useEffect, useState } from 'react';
import Contactus from './Contactus'; // Adjust the import path as necessary

const Footer = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 if (!isVisible) return null; // Don't render the footer until it's supposed to be visible

 return (
    <div style={{ 
        textAlign: 'center', 
        marginTop: '5rem', 
        position: 'sticky', 
        bottom: 0, 
        width: '100vw',
        maxWidth: '100%',
        backgroundColor: '#0D1282', 
        color: 'white',
        padding: '0.5px 0',
        boxSizing: 'border-box',
        marginLeft: '-50vw',
        marginRight: '50vw',
        transform: 'translateX(50%)'
    }}>
      <Contactus user={["Rajyalakshmi", "B.Srija Anuhya", "R.Lalitha"]} phnos={["123456789", "987654321", "135790866"]} emails={["abc@gmail.com", "cba@gmail.com", "academics123@gmail.com"]} />
    </div>
 );
};

export default Footer;
