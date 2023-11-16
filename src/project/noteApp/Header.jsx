import { Link } from 'react-router-dom';

const Header = () => {

        return (
            <>
                <div className='container mt-5 mt-md-3'>
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

export default Header;