import React from 'react';
import "./Features.css"
import { Card } from 'react-bootstrap';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const Features = (props) => {
    const { variant, textColor = "light", arrow, title, telotance } = props
    return (
        <>
            <Card
                dir='ltr'
                bg={variant}
                text={textColor}
                className="mb-2"
            >
                <Card.Header className='fw-bold' style={{ fontSize: "20px" }}>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <div className='d-flex justify-content-between my-3'>
                            <span className='fw-bold'>$141.00</span>
                            <span className='d-flex align-items-center '>
                                {telotance}
                                {
                                    arrow === "down" ? <ArrowDownward sx={{ color: "red", fontSize: 28, marginRight: 1 }} />
                                        : <ArrowUpward sx={{ color: "green", fontSize: 25 }} />
                                }
                            </span>

                        </div>
                    </Card.Title>
                    <Card.Text className='cardText'>
                        Compair to last month
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Features;
