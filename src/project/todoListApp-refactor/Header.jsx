import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <div>
                        <p>Farshid TodoList</p>
                        <div className='text-end position-absolute top-0 end-0'>
                            <Link to="/" className='btn btn-warning'>خانه</Link>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;