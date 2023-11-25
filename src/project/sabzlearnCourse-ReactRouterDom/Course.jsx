import { Link } from 'react-router-dom';
import EllipsisText from "react-ellipsis-text";
import { Button, Typography, Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Course = (props) => {
    const { id, title, description, img } = props;
    return (
        <>
            <Grid xs={12} md={6} lg={4} >
                <Link to={`${id}`}>
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
                                <Typography gutterBottom variant="h5" component="div" className='fw-bold'>
                                    {title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ textAlign: "justify" }}>
                                    <EllipsisText text={description} length={"200"} />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant='contained' size="small" color="primary">
                                خرید
                            </Button>
                        </CardActions>
                    </Card>

                </Link>

            </Grid>


        </>
    );
}

export default Course;




