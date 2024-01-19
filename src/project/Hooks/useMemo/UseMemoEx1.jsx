import { useState, useMemo } from 'react';

const UseMemoEx1 = () => {
    const [firstCount, setFirstCount] = useState(0)
    const [secondCount, setSecondCount] = useState(0)

    const firstCountHandler = () => {
        let index = 0
        while (index < 2000000000) {
            index++;
        }
        setFirstCount(prev => prev + 1)
    }
    const secondCountHandler = () => {
        setSecondCount(prev => prev + 1)
    }
    //todo isEven only depended on firsCount state
    const isEven = useMemo(() => {
        let index = 0
        while (index < 2000000000) {
            index++;
        }
        return firstCount % 2 === 0
    }, [firstCount])

    return (
        <div className='container text-center'>
            <p className='fw-bold fs-2 mt-5'>useMemo <span className='text-primary'>Example1</span></p>
            <div className='row justify-content-center mt-4'>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='card'>
                        <div className="card-body">
                            <div className='text-center'>
                                <button className='btn btn-primary' onClick={firstCountHandler}>
                                    Add FirstCount: {firstCount}
                                </button>
                                <br /><br />
                                {/* todo isEven only depended on firsCount state */}
                                {
                                    isEven ?
                                        <p className='fw-bold'>FirstCount is <span className='text-success'>Even</span></p>
                                        :
                                        <p className='fw-bold'>FirstCount is <span className='text-danger'>Odd</span></p>
                                }
                                <button className='btn btn-primary' onClick={secondCountHandler}>
                                    Add SecondCount: {secondCount}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseMemoEx1;
