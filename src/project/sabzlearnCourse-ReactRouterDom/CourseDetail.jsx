
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
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
            <div className='CourseDetail'>
                <Container className='mt-5'>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} className='mb-3 mb-md-0'>
                            <Typography variant='h4' sx={{ fontWeight: "bold", mb: 5, textShadow: "2px 2px 15px #fff" }}>{course.title}</Typography>
                            <Typography variant='subtitle2' color="#fff" >{course.description}</Typography>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={course.img} alt="courseImage" className='img-fluid img-thumbnail rounded-5' />
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6}>
                            <Button variant="contained"
                                onClick={() => navigate("/rrd/courses")}
                            >
                                بازگشت
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default CourseDetail;
