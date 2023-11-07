import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <header>
                                <div>
                                    <p>Farshid NoteApp</p>
                                </div>
                            </header>
                            <div className='container '>
                                <div className='text-end position-absolute top-0 end-0'>
                                    <Link to="/" className='btn btn-warning'>خانه</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;