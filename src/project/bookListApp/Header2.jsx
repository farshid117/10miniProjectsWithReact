import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header2 extends Component {
     
    render() { 
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center">
                    <p className='h1 text-center mt-3 fw-bold' >AliCoder <span className='text-warning fw-bold'>BookList</span></p>
                    <Link to="/" className='btn btn-warning position-absolute end-0 top-0'>خانه</Link>
                </div>
            </>
        );
    }
}
 
export default Header2;