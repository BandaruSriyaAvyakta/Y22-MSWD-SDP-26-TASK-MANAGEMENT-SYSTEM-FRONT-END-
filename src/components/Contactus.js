import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contactus = ({ user, phnos, emails }) => {
 // Ensure that 'users' is defined
 if (!user) {
     console.error("The 'users' prop is not provided or is undefined.");
     return null;
 }
 
 return (
 <div style={{ 
     height: '180px', 
     width: '100%', 
     overflow: 'auto',
     scrollbarWidth: 'none', // Firefox
     '&::-webkit-scrollbar': { // Chrome, Safari, Edge
       display: 'none',
     },
   }}>
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '-10.0px', marginLeft: '30px' }}>
       <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
         <h3>Contact Us</h3>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
           <h3>Follow Us</h3>
           <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
             <IconButton aria-label="instagram" sx={{ color: 'yellow' }}>
               <InstagramIcon />
             </IconButton>
             <IconButton aria-label="twitter" sx={{ color: 'yellow' }}>
               <TwitterIcon />
             </IconButton>
             <IconButton aria-label="snapchat" sx={{ color: 'yellow' }}>
               <CameraAltIcon />
             </IconButton>
             <IconButton aria-label="whatsapp" sx={{ color: 'yellow' }}>
               <WhatsAppIcon />
             </IconButton>
           </div>
         </div>
       </Toolbar>
       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'flex-start', paddingTop: '0px' }}>
         {user.map((user, index) => (
           <Card key={user} sx={{ minWidth: 200, backgroundColor: '#0A1D56', color: '#FDE767', padding: '1px' }}>
             <CardContent>
               <Typography variant="h6" component="div" style={{ fontSize: '1rem' }}>
                 {user}
               </Typography>
               <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
                 Phone: {phnos[index]}
               </Typography>
               <Typography variant="body2" style={{ fontSize: '0.8rem' }}>
                 Email: {emails[index]}
               </Typography>
             </CardContent>
           </Card>
         ))}
       </div>
       <h3> Links</h3>
       <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
         <Link href="#about-us" color="inherit" underline="hover" style={{ fontSize: '0.8rem', color: 'yellow' }}>About us</Link>
         <Link href="#our-journey" color="inherit" underline="hover" style={{ fontSize: '0.8rem', color: 'yellow' }}>Our Journey</Link>
         <Link href="#features" color="inherit" underline="hover" style={{ fontSize: '0.8rem', color: 'yellow' }}>Features</Link>
         <Link href="#updates" color="inherit" underline="hover" style={{ fontSize: '0.8rem', color: 'yellow' }}>Updates</Link>
       </div>
     </div>
     </div>
 );
};
 
export default Contactus;