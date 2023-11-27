import { Link } from 'react-router-dom';
import EllipsisText from "react-ellipsis-text";
import { Button, Typography, Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Course = (props) => {
    const { id, title, description, img } = props;
    return (
        <>
            <Grid xs={12} md={4} lg={3} >
                <Card className='h-100' >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img}
                            alt={`img-${id}`}
                            className='img-fluid'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className='fw-bold'>
                                {title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
                                <EllipsisText text={description} length={85} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to={`${id}`}>
                            <Button variant='contained' size="small" color="primary">
                                جزئیات بیشتر
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>


        </>
    );
}

export default Course;




