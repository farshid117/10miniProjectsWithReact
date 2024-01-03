import React from 'react';

import ReChart from "../../components/HomeChart"
import { productChartInfo } from "../../components"
import { Form } from 'react-bootstrap';

import Hp from "../../../../assets/product/4.jpg"

import "./ProductDetails.css"
import { Box } from '@mui/material';

const ProductDetails = () => {
    return (
        <>

            <section id='productInfo'>
                <div className='container mt-3 '>
                    <div className="row justify-content-between align-items-end">
                        <div className="col-12 col-md-6">

                            <div className="row justify-content-center">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <h4 className='me-3'>Dell Laptop</h4>
                                    <img src={Hp} alt="product img" className='productImg rounded-2' width={70} height={70} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 d-flex justify-content-center">
                                    <Box sx={{
                                        width: { xs: "100%", sm: "75%", md: "100%" },
                                        boxShadow: "0 0 10px -15px rgba(0,0,0,1)",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        padding: 4,
                                        borderRadius: 2
                                    }} >
                                        <ul className='list-unstyled '>
                                            <li className='d-flex justify-content-between align-items-center mb-2'>
                                                <h6 className=''>آیدی :</h6>
                                                <span>321</span>
                                            </li>
                                            <li className='d-flex justify-content-between align-items-center mb-2'>
                                                <h6 className=''>نام محصول :</h6>
                                                <span style={{ fontSize: 13 }}>لپ‌تاپ دل سری Inspiron </span>
                                            </li>
                                            <li className='d-flex justify-content-between align-items-center mb-2'>
                                                <h6 className=''>قیمت :</h6>
                                                <span>125.000 تومان</span>
                                            </li>
                                            <li className='d-flex justify-content-between align-items-center mb-2'>
                                                <h6 className=''>رضایت مشتری :</h6>
                                                <span>متوسط</span>
                                            </li>
                                            <li className='d-flex justify-content-between align-items-center mb-2'>
                                                <h6 className=''>موجود :</h6>
                                                <span>نیست</span>
                                            </li>
                                        </ul>

                                    </Box>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0 mb-0" dir='ltr'>
                            <ReChart
                                title="میزان فروش سه ماهه"
                                data={productChartInfo}
                                datakeyX="month"
                                datakeyY="total"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id='editProduct' className='mt-3'>
                <div className="container">
                    <Box sx={{
                        boxShadow: "0 0 10px -15px rgba(0,0,0,1)",
                        bgcolor: "rgba(0,0,0,0.5)",
                        padding: 4,
                        borderRadius: 2
                    }} >
                        <div className="formLeft">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <form >
                                            <div className="productName  mb-1">
                                                <label>نام محصول :</label>
                                                <Form.Control size="sm" type="text" placeholder="ویرایش نام محصول" />
                                            </div>
                                            <div className="productAvailabel mb-1 ">
                                                <label>وضعیت :</label>
                                                <Form.Select size="sm" name="availabel" >
                                                    <option>موجودیت کالا را مشخص کنید</option>
                                                    <option value="yes">موجود</option>
                                                    <option value="no">لاموجود</option>
                                                </Form.Select>
                                            </div>
                                            <div>
                                                <label>وضعیت :</label>
                                                <Form.Select size="sm">
                                                    <option>Small select</option>
                                                </Form.Select>
                                            </div>
                                            <div className="submitBtn d-flex justify-content-center mt-3">
                                                <input type="submit" value="ویرایش" className='btn btn-primary' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="formRight">

                        </div>
                    </Box>
                </div>
            </section>

        </>
    );
}

export default ProductDetails;
