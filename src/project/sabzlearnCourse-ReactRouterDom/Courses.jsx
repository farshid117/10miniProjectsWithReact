import { useState } from "react"
import Grid from '@mui/material/Unstable_Grid2';

import coursesData from "./CoursesData";
import Course from "./Course";

import "./Courses.css"

const Courses = () => {
    const [courses, ] = useState(coursesData)

    return (
        <div className="Courses container">
            <h3 className="text-center mt-3 mb-3 text-white">لیست دوره‌های آموزشی</h3>
            <Grid container spacing={2}>
                {
                    courses.map(course => (
                        <Course key={course.id} {...course} /> //course is object with key-value
                    ))
                }
            </Grid>
        </div>
    );
}

export default Courses;
