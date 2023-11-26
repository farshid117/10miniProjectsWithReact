import { useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';

import coursesData from "./CoursesData";

import "./CourseDetail.css"


const CourseDetail = () => {
    const { courseId } = useParams()
    // console.log("courseId: ", courseId);
    const course = coursesData.find(course => course.id === parseInt(courseId))
    // console.log(course.price)
    const navigate = useNavigate()


    return (
        <>
            <Grid container spacing={3} className='mt-5 align-items-center'>
                <Grid xs={12} md={6} className="text-center" >
                    <Typography variant='h4' sx={{ fontWeight: "bold", mb: 5, textShadow: "2px 2px 15px #fff" }}>{course.title}</Typography>
                    <Typography variant='h6' color="#fff" className='justify' >{course.description}</Typography>
                    <Button variant="contained" className='mt-4'
                        onClick={() => navigate("/rrd/courses")}
                    >
                        بازگشت
                    </Button>
                    <Button variant="contained" color='secondary' className='mt-4 ms-2'
                        onClick={() => navigate("/rrd/courses")}
                    >
                        افزودن به سبد خرید
                    </Button>
                </Grid>

                <Grid xs={12} md={6}>
                    <img src={course.img} alt="courseImage" className='img-fluid img-thumbnail rounded-5' />
                </Grid>
            </Grid>
        </>
    );
}

export default CourseDetail;
