import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';

const ActionAreaCard = ({ data, onDismiss, showDismissButton }) => {
 const { name, details } = data;

 return (
    <Grow in={true} timeout={500}>
      <Card style={{ maxWidth: 345, margin: '10px', backgroundColor: '#00cecb' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
        {showDismissButton && (
          <div style={{ padding: '10px' }}>
            <Button variant="contained" color="secondary" onClick={onDismiss}>Dismiss</Button>
          </div>
        )}
      </Card>
    </Grow>
 );
};

export default ActionAreaCard;
