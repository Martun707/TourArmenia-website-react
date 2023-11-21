import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} style={{color:"#e77b0c"}}>
            <CardMedia
                sx={{ height: 200, }}
                component="img"
                image={props.images}

                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>

            </CardContent>
            <CardActions >
                <Button size="small" style={{color:"#e77b0c"}}>{props.price}</Button>
                <Button size="small" style={{color:"#e77b0c"}}>ՄԱՆՐԱՄԱՍՆ</Button>
            </CardActions>
        </Card>
    );
}
